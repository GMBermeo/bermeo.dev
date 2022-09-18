//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://bermeo.dev</loc>
       <image:image>
            <image:loc>https://bermeo.dev/avatar1.jpg</image:loc>
            <image:loc>https://bermeo.dev/avatar2.png</image:loc>
            <image:loc>https://bermeo.dev/logo.svg</image:loc>
            <image:loc>https://bermeo.dev/logo-transparent.svg</image:loc>
            <image:loc>https://bermeo.dev/opengraph.png</image:loc>
            <image:loc>https://bermeo.dev/opengraph.svg</image:loc>
        </image:image>
     </url>
     <url>
       <loc>https://bermeo.dev/advocacia-geral-da-uniao</loc>
       <image:image>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Cartaz.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Cartaz-Pre.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Escola-Cover.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/OTRS-SADAtende-Home.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/OTRS-SADAtende-Cover.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-Modulos-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-Modulos-2160.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-Pesquisa-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-Pesquisa-2160.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-Logo-720.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Email.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Escola-mockup-1080.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/APP-Escola-mockup-2160.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-LogoBW-720.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/agu/UNIO-LogoTransition-720.png</image:loc>
    </image:image>
     </url>
     <url>
       <loc>https://bermeo.dev/banco-do-brasil</loc>
        <image:image>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-BB_Windows-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-BB-3_1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-BB-3_2.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-BB-3_3.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-CONSUMIDOR-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-CONSUMIDOR-2160.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-LIMITES.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/APP-TRANSFERENCIA.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/GPI-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/HOTSITE-2160.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-2160.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/INTRANET-MODULAR-MOBILE.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-Cover.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-Group-1080.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-Group-2160.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-iMac.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-iPad.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/bbts/PLUGINS-Macbook.png</image:loc>
        </image:image>
     </url>
     <url>
       <loc>https://bermeo.dev/other-projects</loc>
        <image:image>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_1-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_2-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_2.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_3-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_3.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_4-1080.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_4.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_5.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_Cover.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_Mobile-1080.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CHAT-Persona5_Mobile-2160.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-Avatar.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-Linkedin.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-Old_Avatar.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-Starry_Night_by_Van_Gogh.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-The_Kiss_by_Gustav_Klimt.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals_2.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_2-Fundamentals-1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_3-Sketch_Transform_2.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_4-Sketch_Agents_2.png</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_5-Sketch_Noise.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_1.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_2.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/other/DOMESTIKA-Unit_6-Sketch_Type_Abaporu_by_Tarsila_3.jpg</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-avatar1-600.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-avatar1.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh-600.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-Starry_Night_by_Van_Gogh.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt-600.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-The_Kiss_by_Gustav_Klimt.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh-600.gif</image:loc>
            <image:loc>https://bermeo.dev/img/portfolio/gif/CORRUPTED-Twelve_Sunflowers_by_Van_Gogh.gif</image:loc>
        </image:image>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();

  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
