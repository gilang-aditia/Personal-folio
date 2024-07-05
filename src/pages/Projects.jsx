import { Card } from "flowbite-react";

export default function Home() {
  return (
    <>
      <div className="px-7 text-black py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Project Development
        </h1>
      </div>
      <div className="grid gap-4 p-3 sm:grid-cols-2">
        <Card href="https://ssayomart.com/" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Company Profile Ssayomart
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Ssayomart adalah sebuah supermarket khusus yang menawarkan berbagai
            produk makanan Korea dan Jepang untuk memenuhi kebutuhan belanja
            sehari-hari dengan rasa dan kualitas autentik.
          </p>
        </Card>
        <Card href="https://apps.ssayomart.com/" className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ssayomart App
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Aplikasi E-commerce produk makanan dan minuman korea dan jepang yang
            sudah integrasi dengan berbagai macam pembayaran dan juga berbagai
            macam pengiriman termasuk gojek
          </p>
        </Card>
      </div>
    </>
  );
}
