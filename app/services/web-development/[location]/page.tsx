import Clients from "@/sections/Clients";
import Contact from "@/sections/Contact";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Work from "@/sections/Work";


export async function generateMetadata({ params }:{params:any}) {
 const { location } = await params;
   const city =
    location.charAt(0).toUpperCase() + location.slice(1);
  return {
    title: `Web Development Services in ${city.toUpperCase()} | Weblify`,
    description: `Professional web development services in ${city}. Build fast, modern, and SEO-optimized websites for your business.`,
  };
}

export async function generateStaticParams() {
  return [
    { location: "dubai" },
    { location: "usa" },
    { location: "uk" },
    { location: "pakistan" },
  ];
}



export default async function Page({ params }:{params:any}) {
  const { location } = await params;


  const cityName =
    location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <main>
          <Hero
        title={`Web Development Services in ${cityName}`}
        subtitle={`We help businesses in ${cityName} grow online with modern, SEO-optimized websites.`}
      />
      <h1>Web Development Services in {cityName}</h1>

      <p>
        We provide professional web development services for businesses in {cityName},
        helping companies build fast, modern and high-converting websites.
      </p>

      <h2>Why choose us in {cityName}?</h2>
      <ul>
        <li>Fast & SEO-optimized websites</li>
        <li>Ecommerce & business solutions</li>
        <li>Ongoing support & maintenance</li>
      </ul>
      <div>

<Clients />
          <Work />
          <Features />
          <Reviews />
          <Contact />
      </div>
    </main>
  );
}