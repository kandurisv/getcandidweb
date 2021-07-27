import { API } from "../../utils/exports";

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");


export default async (req, res) => {

  const categoriesRes = await fetch(API + 'categories')
  const categoriesData = await categoriesRes.json()
  const brandsRes = await fetch(API + 'brands')
  const brandsData = await brandsRes.json()


  var dynamicArray = []

  brandsData.map((item)=>{
    dynamicArray.push(
      { url: "/brands/"+item.brand_name, changefreq: "daily", priority: 0.3 }
    )
  })

  categoriesData.map((item)=>{
    dynamicArray.push(
      { url: "/categories/"+item.category_name, changefreq: "daily", priority: 0.3 }
    )
  })

  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/brands", changefreq: "daily", priority: 0.3 },
    { url: "/categories", changefreq: "daily", priority: 0.3 },
    { url: "/trending", changefreq: "daily", priority: 0.3 },
  ];

  const children = dynamicArray.concat(links);

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  res.writeHead(200, {"Content-Type": "application/xml"});
  const xmlString = await streamToPromise(Readable.from(children).pipe(stream)).then((data) => data.toString());
  res.end(xmlString);
};


