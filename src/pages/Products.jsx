import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="px-7 text-black py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Kontak
        </h1>
      </div>
      <form action="submit">
        <div className=" mt-3 w-full p-4 m-0">
          <Label htmlFor="email" className=" block">
            Email Kamu
          </Label>
          <TextInput
            id="email"
            name="email"
            placeholder="nama@company.com"
            type="email"
          />
        </div>
        <div className=" w-full p-4 m-0">
          <Label htmlFor="subject" className=" block">
            Subjek
          </Label>
          <TextInput
            id="subject"
            name="subject"
            placeholder="apa yang bisa saya bantu?"
          />
        </div>
        <div className=" w-full p-4 m-0 mb-6">
          <Label htmlFor="message" className=" block">
            Pesan Kamu
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Pesan kamu..."
            rows={4}
          />
        </div>
        <div className=" w-full p-3 mb-6">
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </div>
      </form>
    </>
  );
}
