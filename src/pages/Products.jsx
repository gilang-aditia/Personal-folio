import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import emailjs from "emailjs-com";

export default function Home() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k3haqmc", // Ganti dengan Service ID Anda
        "template_9c1pshs", // Ganti dengan Template ID Anda
        formData,
        "85MduW3i-nn4pbSJZ" // Ganti dengan User ID Anda
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Pesan berhasil dikirim!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Gagal mengirim pesan.");
      });
  };
  return (
    <>
      <div className="px-7 text-black py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Kontak
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full p-4 m-0">
          <Label htmlFor="from_name" className="block">
            Nama Kamu
          </Label>
          <TextInput
            id="from_name"
            name="from_name"
            placeholder="Siapa nama kamu?"
            className="block w-full"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-3 w-full p-4 m-0">
          <Label htmlFor="email" className="block">
            Email Kamu
          </Label>
          <TextInput
            id="email"
            name="email"
            placeholder="nama@company.com"
            type="email"
            className="block w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full p-4 m-0">
          <Label htmlFor="subject" className="block">
            Subjek
          </Label>
          <TextInput
            id="subject"
            name="subject"
            placeholder="apa yang bisa saya bantu?"
            className="block w-full"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full p-4 m-0 mb-6">
          <Label htmlFor="message" className="block">
            Pesan Kamu
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Pesan kamu..."
            rows={4}
            className="block w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full p-3 mb-6">
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </div>
      </form>
    </>
  );
}
