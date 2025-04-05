# İstanbul VIP Escort Web Uygulaması

Bu proje, Next.js kullanılarak geliştirilmiş bir web uygulamasıdır.

## Resim Dizin Yapısı

Resimleri şu şekilde organize ettik:

```
public/
  ├── images/
  │   ├── platin/
  │   │   ├── platin-escort-1.jpg
  │   │   ├── platin-escort-2.jpg
  │   │   └── ...
  │   │   ├── platin-vip-17.jpg
  │   │   ├── platin-vip-18.jpg
  │   │   └── ...
  │   │
  │   └── altin/
  │       ├── altin-escort-1.jpg
  │       ├── altin-escort-2.jpg
  │       └── ...
  │       ├── altin-ozel-9.jpg
  │       ├── altin-ozel-10.jpg
  │       └── ...
```

### Resim Dosyaları

1. **Platin Kategori**:
   - `platin-escort-1.jpg` - `platin-escort-16.jpg`: İlk sıradaki platin üyeler
   - `platin-vip-17.jpg` - `platin-vip-32.jpg`: İkinci sıradaki platin VIP üyeler

2. **Altın Kategori**:
   - `altin-escort-1.jpg` - `altin-escort-8.jpg`: İlk sıradaki altın üyeler
   - `altin-ozel-9.jpg` - `altin-ozel-16.jpg`: İkinci sıradaki özel üyeler

## Resim Değiştirme

Resim değiştirmek için, ilgili dosyayı aynı isimle değiştirmeniz yeterlidir. Örneğin:

1. `public/images/platin/platin-escort-1.jpg` dosyasını kendi resminizle değiştirin.
2. Aynı isim ve yolu koruduğunuz sürece, uygulama otomatik olarak yeni resmi gösterecektir.

## Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## SEO Yapısı

Bu web uygulaması, SEO için optimize edilmiştir:

1. Semantik HTML yapısı
2. Optimize edilmiş meta etiketleri
3. Schema.org yapısal veri işaretlemeleri
4. Sitemap.xml desteği
5. SEO dostu URL yapısı

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
