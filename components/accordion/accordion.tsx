import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[#1c6758] md:text-lg font-semibold">
          Apa itu Aplikasi Pantau?
        </AccordionTrigger>
        <AccordionContent className="leading-relaxed">
          Pantau adalah aplikasi inovatif yang memantau kelembapan dan
          pertumbuhan tanaman secara real-time. Dengan Pantau, Anda dapat
          melacak kondisi dan perkembangan tanaman dengan mudah, memastikan
          mereka selalu dalam kondisi optimal. Nikmati kemudahan merawat tanaman
          kesayangan Anda dengan Pantau!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[#1c6758] md:text-lg font-semibold">
          Fitur apa saja yang ada di Pantau?
        </AccordionTrigger>
        <AccordionContent className="leading-relaxed">
          Pantau menawarkan beragam fitur menarik, mulai dari monitoring
          kelembapan dan kondisi tanaman secara real-time hingga analisis
          mendalam tentang pertumbuhan mereka. Dengan Pantau, Anda bisa
          mendapatkan laporan lengkap yang membantu memastikan tanaman Anda
          selalu dalam kondisi terbaik. Jadi, tunggu apa lagi? Stay tuned untuk
          menikmati kemudahan dan inovasi dalam merawat tanaman kesayangan Anda!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[#1c6758] md:text-lg font-semibold">
          Aplikasinya berbasis apa?
        </AccordionTrigger>
        <AccordionContent className="leading-relaxed">
          Pantau kini hadir dengan aplikasi berbasis web, memudahkan Anda untuk
          memantau dan menganalisis pertumbuhan tanaman di mana saja dan kapan
          saja. Praktis, bukan? Jadi, tunggu apa lagi? Stay tuned sampai
          aplikasinya resmi diluncurkan dan nikmati kemudahan merawat tanaman
          kesayangan Anda!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
