import type { MetadataRoute } from "next";
import { articles, calculators, forms } from "@landlords-toolkit/content";

const baseUrl = "https://landlords-toolkit.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/forms",
    "/calculators",
    "/articles",
    "/premium",
    "/privacy",
    "/terms"
  ];

  const formRoutes = forms.map((form) => `/forms/${form.slug}`);
  const calculatorRoutes = calculators.map((calculator) => `/calculators/${calculator.slug}`);
  const articleRoutes = articles.map((article) => `/articles/${article.slug}`);

  return [...staticRoutes, ...formRoutes, ...calculatorRoutes, ...articleRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
