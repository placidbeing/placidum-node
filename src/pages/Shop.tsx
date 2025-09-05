const Shop = () => {
  const products = [
    {
      title: "YL001 - Artist Name - Debut Album",
      format: "Vinyl LP",
      price: "25.00",
      status: "In Stock",
      bandcampUrl: "#",
      image: null,
    },
    {
      title: "YL002 - Another Artist - Experimental EP",
      format: "Digital",
      price: "8.00",
      status: "Available",
      bandcampUrl: "#",
      image: null,
    },
    {
      title: "YL003 - Various Artists - Compilation",
      format: "Cassette",
      price: "12.00",
      status: "Pre-order",
      bandcampUrl: "#",
      image: null,
    },
    {
      title: "Label T-Shirt",
      format: "Apparel",
      price: "20.00",
      status: "In Stock",
      bandcampUrl: "#",
      image: null,
    },
    {
      title: "Label Tote Bag",
      format: "Merchandise",
      price: "15.00",
      status: "In Stock",
      bandcampUrl: "#",
      image: null,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-8">Shop</h1>
      
      <div className="mb-12">
        <p className="text-muted-foreground mb-4">
          All music releases and merchandise available through our Bandcamp store. 
          Worldwide shipping available for physical items.
        </p>
        <a 
          href="#" 
          className="text-accent hover:underline font-mono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Bandcamp store →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={index} className="border border-border p-6 group hover:border-accent transition-colors">
            {/* Product Image Placeholder */}
            <div className="aspect-square bg-muted border border-border mb-4"></div>
            
            <div className="space-y-2">
              <h3 className="font-mono text-sm">{product.title}</h3>
              <p className="text-xs text-muted-foreground">{product.format}</p>
              <div className="flex justify-between items-center">
                <span className="font-mono">${product.price}</span>
                <span className={`text-xs font-mono px-2 py-1 border ${
                  product.status === "In Stock" || product.status === "Available"
                    ? "border-accent text-accent" 
                    : "border-muted-foreground text-muted-foreground"
                }`}>
                  {product.status}
                </span>
              </div>
              <a 
                href={product.bandcampUrl}
                className="text-sm text-accent hover:underline font-mono block mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Bandcamp →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-border p-6">
        <h2 className="text-xl font-mono mb-4">Shipping Info</h2>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>• All physical orders shipped within 2-3 business days</p>
          <p>• Free shipping on orders over $50</p>
          <p>• International shipping available</p>
          <p>• Digital purchases delivered instantly</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;