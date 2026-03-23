# spatiad

**GitHub:** [github.com/zubeyralmaho/spatiad](https://github.com/zubeyralmaho/spatiad)  
**npm:** [@spatiad/sdk](https://www.npmjs.com/package/@spatiad/sdk)  
**Lisans:** MIT | **Commit:** 64 | **Durum:** Açık kaynak, production-grade  
**Teknoloji:** Rust, TypeScript, WebSocket, Uber H3, Docker, Kubernetes, GitHub Actions

---

## Problem

Gerçek zamanlı dispatch sistemleri — bir istek geldiği anda sürücüyü işe eşleştiren sistemler — oluşturması karmaşık, deploy etmesi daha da zordur. Çoğu implementasyon ağır bir stack'e dayanır: harici veritabanları, pub/sub için Redis, mesaj broker'lar ve birden fazla koordinasyon servisi. Her bağımlılık gecikme, operasyonel yük ve potansiyel başarısızlık noktası ekler.

Takımların bu karmaşıklığı yönetmek zorunda kalmadan altyapılarına dahil edebileceği hafif, bağımsız ve production-ready bir mekansal dispatch motoru yoktu.

---

## Çözüm

**spatiad**, Uber'in H3 altıgen jeomekansal indekslemesini kullanarak sürücüleri (ya da herhangi bir mobil ajanı) gerçek zamanlı işlere eşleştiren, production-grade açık kaynaklı bir dispatch motorudur — **sıfır harici bağımlılıkla tek bir Rust binary'si** olarak yayınlanır.

Veritabanı yok. Redis yok. Mesaj broker yok. Tek binary.

---

## Teknik Mimari

### Çekirdek Motor
- **Jeomekansal indeksleme:** Uber'in H3 altıgen grid yapısı — yapılandırılabilir yarıçap genişlemesiyle en yakın komşu araması, büyük ölçekte verimli mekansal sorgular
- **Gerçek zamanlı oturumlar:** WebSocket tabanlı sürücü oturumları — canlı konum güncellemeleri ve iş teklifi iletimi için kalıcı bağlantılar
- **Durum makinesi:** Teklif yaşam döngüsü yönetimi — bekliyor → kabul edildi / reddedildi / süresi doldu, doğru concurrency yönetimiyle

### Performans & Güvenilirlik
- **Sıfır harici bağımlılık** — tüm sistem tek derlenmiş Rust binary'si olarak çalışır
- **HMAC-SHA256 imzalı webhook'lar** — üstel geri çekilme (exponential backoff) yeniden deneme ile değiştirilemez event iletimi
- **Kayan pencere hız sınırlama** — yerleşik kötüye kullanım koruması
- **İmleç sayfalandırmalı event zaman çizelgesi** — tüm dispatch olayları için verimli denetim logu

### Deployment
- Docker, Kubernetes ve systemd deployment konfigürasyonları dahil
- GitHub Actions CI/CD pipeline
- Tam mimari dokümantasyon

---

## Çok Dilli SDK

spatiad, 6 dilde birinci sınıf SDK desteğiyle gelir:

| Dil | Paket |
|-----|-------|
| TypeScript | npm'de `@spatiad/sdk` |
| Go | Native SDK |
| Java | Native SDK |
| Kotlin | Native SDK |
| Python | Native SDK |
| Swift | Native SDK |

TypeScript SDK'sı npm'de yayınlanmış ve production-ready. Tüm SDK'lar aynı API sözleşmesini takip eder; çok dilli ekipler sürtünme olmadan entegre edebilir.

---

## Neden Önemli?

spatiad, sistemler düzeyinde düşünmenin ürün mühendisliğiyle buluştuğunda ne kadar güçlü sonuçlar doğurabileceğini gösteriyor:

- **Ölçekte API tasarımı** — 6 dil ekosisteminde tüketilecek şekilde tasarlanmış bir dispatch protokolü
- **Performans mühendisliği** — Hot path'te allocation yükünü ortadan kaldırmak için Rust'ın ownership modeli ve zero-copy kalıpları
- **Açık kaynak sahipliği** — MIT lisanslı, katkı kılavuzu, CI/CD ve deployment dokümantasyonu — oyuncak proje değil, gerçekten production'a alınabilir bir sistem

---

## Kullanım Alanları

- Ride-hailing ve isteğe bağlı sürücü uygulamaları
- Teslimat ve lojistik dispatch
- Saha hizmet ajanı yönlendirme
- Gerçek zamanlı mekansal eşleştirme gerektiren her problem
