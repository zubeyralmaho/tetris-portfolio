# nomos

**GitHub:** [github.com/zubeyralmaho/nomos](https://github.com/zubeyralmaho/nomos)  
**Lisans:** MIT | **Commit:** 46 | **Durum:** Açık kaynak  
**Teknoloji:** Rust, eBPF/XDP, WASM, NLP, SIMD (AVX2/SSE2/NEON)

---

## Problem

API'lar değişir. Alan adları yeniden adlandırılır. Tipler kayar. İç içe yapılar evrilir. Birden fazla servis veya harici API bağımlılığı olan her sistemde şema kayması kaçınılmazdır — ve her kayma downstream tüketicileri bozar.

Standart yanıt ağrılıdır: bozulmayı tespit et, bilet aç, tüketici kodunu güncelle, yeniden deploy et. Her olay geliştirici zamanı kaybettirir, downtime yaratır ve ekipler arası koordinasyon sorunu doğurur.

Kimsenin yanıtlamadığı soru: *Ya proxy bunu otomatik olarak, runtime'da, herhangi bir kod değişikliği veya yeniden deploy olmadan düzeltebilseydi?*

---

## Çözüm

**nomos**, JSON API şema kaymasını **runtime'da otomatik iyileştiren**, herhangi bir kod değişikliği veya yeniden deploy gerektirmeyen şeffaf bir reverse proxy'dir.

nomos API'nın önünde konumlanır. Yeniden adlandırılmış alan, değiştirilmiş tip veya yeniden yapılandırılmış nesneyle yanıt geldiğinde nomos kaymasını tespit eder, beklenen şemaya uyacak şekilde iyileştirir ve düzeltilmiş yanıtı tüketiciye şeffaf biçimde, bir milisaniyenin altında iletir.

---

## Teknik Mimari

### NLP Ensemble — Şema Kayması Tespiti

nomos, alan adı yeniden adlandırmalarını ve şema değişikliklerini tespit edip çözmek için **5 algoritmalı bir NLP ensemble** kullanır:

| Algoritma | Rolü |
|-----------|------|
| Jaro-Winkler | Kısa alan adları için string benzerliği |
| Levenshtein mesafesi | Yazım hatası tarzı yeniden adlandırmalar için düzenleme mesafesi |
| TF-IDF N-gram | Frekans ağırlıklı semantik eşleştirme |
| Eş anlamlı sözlük | Alana özgü alan adı denkliği |
| Trigram embedding | Alt kelime düzeyinde semantik benzerlik |

Ensemble, bu sinyalleri güven puanlama modeliyle birleştirerek iyileştirme, işaretleme veya olduğu gibi geçirme kararı verir.

### Performans Mühendisliği

- **eBPF/XDP kernel düzeyinde paket sınıflandırması** — iyileştirme gerektirmeyen istekler için userspace'e ulaşmadan kernel düzeyinde işlenen fast-path bypass
- **SIMD hızlandırmalı JSON ayrıştırma** — vektörleştirilmiş byte taraması için AVX2, SSE2 ve NEON intrinsic'leri
- **Zero-copy hot path** — gereksiz bellek tahsisi olmadan çalışan iyileştirme pipeline'ı
- **Arena allocation** — bellek havuzlama ile GC baskısını minimize etme
- **WASM healer hot-swap** — servis yeniden başlatılmadan değiştirilebilen WebAssembly healer modülü

### Benchmark Sonuçları

| Metrik | Sonuç |
|--------|-------|
| p99 gecikme | **0.22ms** |
| İşlem hacmi | **5.146 RPS** |

### Test Suite

- 46 unit test
- Chaos suite (hata enjeksiyonu, hatalı biçimlendirilmiş girdiler)
- Stres testleri (sürekli yüksek yük altında çalışma)

---

## Neden Önemli?

nomos çoğu mühendisinin hiç dokunmadığı alana giriyor:

- **Kernel düzeyinde ağ** — eBPF/XDP, nomos'un paketler uygulama katmanına ulaşmadan yönlendirme kararı vermesini sağlar
- **SIMD programlama** — JSON ayrıştırma için elle ayarlanmış vektörleştirilmiş operasyonlar; bu tür optimizasyon genellikle yalnızca veritabanları ve runtime'lara özgüdür
- **Sistemler bağlamında uygulamalı NLP** — milisaniyenin altında gecikmeyle çalışan 5 algoritmalı ensemble; altyapı olarak NLP
- **Sıfır downtime şema evrimi** — gerçek bir DevOps sorununu uygulama katmanı yerine altyapı katmanında çözme

---

## Kullanım Alanları

- Sık API versiyon değişikliği olan mikroservis mimarileri
- Upstream şemanın kontrolünüzde olmadığı üçüncü taraf API tüketicileri
- Eski ve yeni şemaların bir arada var olması gereken legacy sistem modernizasyonu
- Şema kaymasının downstream başarısızlıklara yol açtığı her ortam
