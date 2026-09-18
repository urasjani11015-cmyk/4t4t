export async function onRequest() {
  const imageUrl = "2rhrh.jpg";

  const response = await fetch(imageUrl);

  if (!response.ok) {
    return new Response("Image fetch failed", {
      status: 502
    });
  }

  const image = await response.arrayBuffer();

  return new Response(image, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
