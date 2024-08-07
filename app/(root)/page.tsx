import TypewriterEffect from "@/components/sub/TypewriterEffect";
import "./page.css";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row scroll_background_img">
        <div className="w-full h-full p-10 pt-36 bg-primary/5 backdrop-blur-lg">
          <TypewriterEffect />
        </div>
        <div className="w-full h-full"></div>
      </section>
    </>
  );
}
