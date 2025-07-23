# 🎬 Film Arama Servisi

Bu proje, **TMDB API** kullanarak popüler filmleri listeleyen, film araması yapabilen ve film detayları, oyuncu kadrosu ile kullanıcı yorumlarını gösteren React tabanlı bir web uygulamasıdır.

---

## 🌟 Özellikler

- **Ana Sayfa:** Güncel ve trend olan filmlerin listesi.
- **Film Arama:** Anahtar kelime ile film arayabilme.
- **Film Detayları:** Seçilen filmin ayrıntılı bilgileri.
- **Oyuncu Kadrosu:** Filmde yer alan oyuncuların listesi.
- **Kullanıcı Yorumları:** Film hakkında kullanıcı incelemeleri.
- **Navigasyon:** React Router ile sayfa geçişleri, iç içe yönlendirme.
- **404 Sayfası:** Geçersiz URL'lerde ana sayfaya yönlendirme.
- **Geri Dönüş:** Oyuncu kadrosu ve yorumlardan detay sayfasına ve arama sayfasına dönüş kolaylığı.

---

## 🛠️ Kullanılan Teknolojiler

- React 18+
- React Router v6 (dinamik ve iç içe routing)
- Axios (HTTP istekleri için)
- TMDB API (The Movie Database)
- React Hooks (`useState`, `useEffect`, `useParams`, `useLocation`, `useRef`, `useSearchParams`)
- React.lazy & Suspense (Kodun asenkron yüklenmesi için)

---

## ⚙️ Önemli Teknik Detaylar

### 1. TMDB API Entegrasyonu
- API erişimi için **Bearer Token** ile HTTP başlıklarına `Authorization` eklendi.
- Film afişlerinin tam URL’leri için, backend’den gelen sadece dosya adı `/xxx.jpg` önüne `https://image.tmdb.org/t/p/w500` eklendi.
- API çağrıları `services/api.js` dosyasında fonksiyonlar halinde organize edildi (trend filmler, arama, detaylar, oyuncular, yorumlar).

### 2. React Router ve Navigasyon
- **Ana sayfa:** `/`
- **Film arama sayfası:** `/movies`
- **Film detay sayfası:** `/movies/:movieId`
- **İç içe alt rotalar:** `/movies/:movieId/cast` ve `/movies/:movieId/reviews`
- Geçersiz rotalar için `NotFoundPage` ile ana sayfaya yönlendirme.
- `Navigation` bileşeni ile `/` ve `/movies` sayfalarına kolay erişim.
- `MovieDetailsPage` içinde `<Outlet />` kullanılarak alt bileşenlerin render edilmesi.
- `useLocation` ve `useRef` ile **"Go Back"** linkinin geldiği sayfaya veya arama sayfasına yönlendirmesi.

### 3. State ve Lifecycle Yönetimi
- API’den veri çekmek için `useEffect` kullanıldı.
- Yüklenme (loading) ve hata (error) durumları için state yönetimi yapıldı.
- `useSearchParams` ile arama kelimesi URL parametresi olarak yönetildi ve URL parametresi değiştikçe arama tetiklendi.
- Bileşenler `React.lazy` & `Suspense` ile asenkron yüklendi, sayfa yükleme performansı artırıldı.

---

## 🔎 İleri Düzey Notlar

- Geri dönüş butonu, eğer kullanıcı doğrudan detay sayfasını yenilediyse veya state bilgisi yoksa `/movies` sayfasına yönlendirir.
- `MovieList` bileşeninde, `Link` elementleri ile `to` prop’u `/movies/:movieId` şeklinde ve `state` olarak geçerli konum (location) verisi taşınır.
- API çağrılarında hata yönetimi yapılmıştır, kullanıcıya uygun mesajlar gösterilir.

---

## 📌 Proje Hakkında

Bu proje **React**, **React Router** ve **Axios** kullanılarak, TMDB API’den gerçek zamanlı veri çekip kullanıcı dostu film arama deneyimi sunmak amacıyla geliştirilmiştir. Kodun okunabilirliği, performans ve kullanıcı deneyimi ön planda tutulmuştur.
