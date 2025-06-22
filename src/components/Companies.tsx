
const Companies = () => {
  const companies = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=120&h=60&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=120&h=60&fit=crop" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=120&h=60&fit=crop" },
    { name: "Spotify", logo: "https://images.unsplash.com/photo-1614680376573-df3480f27355?w=120&h=60&fit=crop" }
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg font-medium">Trusted by industry leaders</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={company.logo}
                    alt={company.name}
                    className="max-w-24 max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
