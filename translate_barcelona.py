from pathlib import Path

p = Path("public/barcelona.html")
s = p.read_text(encoding="utf-8")

replacements = {
    # SEO
    "Barcelona — Find Your Perfect Match | StayPerfect":
        "Barcellona — Trova il tuo abbinamento perfetto | StayPerfect",

    "Discover Barcelona with StayPerfect. Explore Gaudí, beaches, architecture, food, culture, nightlife and unforgettable Mediterranean experiences.":
        "Scopri Barcellona con StayPerfect. Esplora Gaudí, le spiagge, l'architettura, la gastronomia, la cultura, la vita notturna e le indimenticabili esperienze mediterranee.",

    # Header
    ">Highlights<": ">Punti salienti<",
    ">Places<": ">Luoghi<",
    ">Activities<": ">Attività<",
    ">Services<": ">Servizi<",
    ">Perfect Match<": ">Abbinamento perfetto<",

    # Hero
    "Made for <em>you.</em>":
        "Pensata per <em>te.</em>",

    "Discover a city where Gaudí, Mediterranean beaches, historic neighbourhoods,":
        "Scopri una città dove Gaudí, le spiagge mediterranee, i quartieri storici,",

    "Explore Barcelona":
        "Esplora Barcellona",

    "Find My Perfect Match ✨":
        "Trova il mio abbinamento perfetto ✨",

    # Quick profile
    "Barcelona at a glance":
        "Barcellona in breve",

    "What kind of trip is Barcelona?":
        "Che tipo di viaggio offre Barcellona?",

    "culture in the morning, the Mediterranean in the afternoon and restaurants,":
        "cultura al mattino, Mediterraneo nel pomeriggio e ristoranti,",

    "rooftops or nightlife in the evening.":
        "terrazze panoramiche o vita notturna la sera.",

    "Enjoy the Mediterranean without leaving the city.":
        "Goditi il Mediterraneo senza lasciare la città.",

    "Explore Gaudí, museums, Modernisme and historic neighbourhoods.":
        "Esplora Gaudí, i musei, il Modernismo e i quartieri storici.",

    "From traditional Catalan dishes to modern gastronomy and markets.":
        "Dai piatti tradizionali catalani alla gastronomia moderna e ai mercati.",

    # Highlights
    "The Barcelona experience":
        "L'esperienza di Barcellona",

    "Three sides of the city":
        "Tre anime della città",

    "architecture, the sea and neighbourhoods full of character.":
        "architettura, mare e quartieri ricchi di carattere.",

    "Walk by the sea, relax on the beaches and enjoy the waterfront.":
        "Passeggia sul mare, rilassati sulle spiagge e goditi il lungomare.",

    "Discover the Gothic Quarter, El Born, historic streets and hidden corners.":
        "Scopri il Quartiere Gotico, El Born, le strade storiche e gli angoli nascosti.",

    # Places
    "Places worth exploring":
        "Luoghi da esplorare",

    "Start with Barcelona's iconic landmarks, then leave time to explore the":
        "Inizia dai luoghi simbolo di Barcellona, poi lasciati del tempo per esplorare il",

    "and one of the city's essential experiences.":
        "e una delle esperienze imperdibili della città.",

    "Discover Sagrada Família →":
        "Scopri la Sagrada Família →",

    "Barcelona and the Mediterranean.":
        "Barcellona e il Mediterraneo.",

    "Discover Park Güell →":
        "Scopri Park Güell →",

    "Medieval streets, historic squares, cafés, shops and some of the oldest":
        "Strade medievali, piazze storiche, caffè, negozi e alcune delle zone più antiche",

    "parts of the city.":
        "della città.",

    "Explore the area →":
        "Esplora la zona →",

    "Discover Casa Batlló →":
        "Scopri Casa Batlló →",

    "Explore Montjuïc →":
        "Esplora Montjuïc →",

    "A classic place to experience Barcelona's relationship with the":
        "Un luogo classico per vivere il rapporto di Barcellona con il",

    "Explore Barceloneta →":
        "Esplora Barceloneta →",

    # Travel styles
    "Find your style":
        "Trova il tuo stile",

    "The best Barcelona itinerary depends on what you want from the trip.":
        "Il miglior itinerario a Barcellona dipende da ciò che cerchi dal viaggio.",

    "the old city.":
        "la città vecchia.",

    "Beaches, parks, attractions, food and activities create plenty of options":
        "Spiagge, parchi, attrazioni, gastronomia e attività offrono moltissime possibilità",

    "Great restaurants, nightlife, beaches, football and activities make":
        "Ottimi ristoranti, vita notturna, spiagge, calcio e attività rendono",

    "central to the Barcelona experience.":
        "questi elementi centrali nell'esperienza di Barcellona.",

    # Activities
    "Build your Barcelona experience":
        "Costruisci la tua esperienza a Barcellona",

    "Mix iconic sights with experiences that fit your interests.":
        "Combina i luoghi simbolo con esperienze adatte ai tuoi interessi.",

    "Explore the architectural legacy of Antoni Gaudí across Barcelona.":
        "Esplora l'eredità architettonica di Antoni Gaudí in tutta Barcellona.",

    "Explore experiences →":
        "Esplora le esperienze →",

    "Discover the Gothic Quarter, El Born, Passeig de Gràcia and the city's":
        "Scopri il Quartiere Gotico, El Born, Passeig de Gràcia e i",

    "Find tours →":
        "Trova tour →",

    "Explore markets, Catalan cuisine, food tours and Barcelona's gastronomic":
        "Esplora mercati, cucina catalana, tour gastronomici e la scena",

    "Explore food →":
        "Esplora la gastronomia →",

    "Combine city sightseeing with beaches, the waterfront and seaside":
        "Combina la visita della città con spiagge, lungomare ed esperienze sul mare",

    "Discover the coast →":
        "Scopri la costa →",

    "Discover Picasso, MNAC, contemporary art and Barcelona's wider cultural":
        "Scopri Picasso, il MNAC, l'arte contemporanea e il più ampio patrimonio culturale",

    "Explore culture →":
        "Esplora la cultura →",

    "Discover Barça →":
        "Scopri il Barça →",

    # Itineraries
    "culture and the Mediterranean.":
        "cultura e Mediterraneo.",

    "Start with Sagrada Família, continue towards Passeig de Gràcia and explore":
        "Inizia dalla Sagrada Família, prosegui verso Passeig de Gràcia ed esplora",

    "Casa Batlló and La Pedrera. Finish with dinner in the city centre.":
        "Casa Batlló e La Pedrera. Concludi con una cena nel centro città.",

    "Visit Park Güell in the morning, then explore the Gothic Quarter, La":
        "Visita Park Güell al mattino, poi esplora il Quartiere Gotico, La",

    "Explore Montjuïc, its viewpoints, gardens and museums before spending the":
        "Esplora Montjuïc, i suoi belvedere, giardini e musei prima di trascorrere il",

    "Slow the pace down with Barceloneta, the waterfront and a relaxed final":
        "Rallenta il ritmo con Barceloneta, il lungomare e una tranquilla ultima",

    "day by the Mediterranean.":
        "giornata sul Mediterraneo.",

    # Services
    "Plan your trip":
        "Organizza il tuo viaggio",

    "Travel services for Barcelona":
        "Servizi di viaggio per Barcellona",

    "Use StayPerfect to connect your destination discovery with the practical":
        "Usa StayPerfect per collegare la scoperta della destinazione agli aspetti pratici",

    "parts of your journey.":
        "del tuo viaggio.",

    "Flights":
        "Voli",

    "Search flight options for your Barcelona trip.":
        "Cerca le opzioni di volo per il tuo viaggio a Barcellona.",

    "Search Flights →":
        "Cerca voli →",

    "Hotels & Activities":
        "Hotel e attività",

    "Discover accommodation, attractions and experiences.":
        "Scopri alloggi, attrazioni ed esperienze.",

    "Explore Klook →":
        "Esplora Klook →",

    "Find tours, attractions and experiences for your Barcelona itinerary.":
        "Trova tour, attrazioni ed esperienze per il tuo itinerario a Barcellona.",

    "Explore Activities →":
        "Esplora le attività →",

    "Car Rental":
        "Noleggio auto",

    "Compare rental options if you plan to explore Catalonia beyond Barcelona.":
        "Confronta le opzioni di noleggio se vuoi esplorare la Catalogna oltre Barcellona.",

    "Rent a Car →":
        "Noleggia un'auto →",

    "Airport Transfers":
        "Trasferimenti aeroportuali",

    "Arrange a smoother arrival and departure.":
        "Organizza un arrivo e una partenza più semplici.",

    "Book Transfer →":
        "Prenota un trasferimento →",

    "Travel eSIM":
        "eSIM da viaggio",

    "Stay connected while exploring Barcelona and the rest of Spain.":
        "Rimani connesso mentre esplori Barcellona e il resto della Spagna.",

    "Get an eSIM →":
        "Ottieni una eSIM →",

    # Match CTA
    "Not sure if Barcelona is right for you?":
        "Non sai se Barcellona fa per te?",

    "Find your Perfect Match ✨":
        "Trova il tuo abbinamento perfetto ✨",

    "Tell StayPerfect what matters most to you and compare Barcelona with the":
        "Indica a StayPerfect ciò che conta di più per te e confronta Barcellona con le",

    "other destinations in Spain and Portugal.":
        "altre destinazioni in Spagna e Portogallo.",

    "Start Perfect Match →":
        "Inizia l'abbinamento perfetto →",

    "Explore Spain →":
        "Esplora la Spagna →",

    # Disclosure
    "Transparency":
        "Trasparenza",

    "Affiliate disclosure":
        "Informativa sui link affiliati",

    "Some links on StayPerfect are affiliate links. If you click a link and":
        "Alcuni link su StayPerfect sono link affiliati. Se fai clic su un link e",

    "make a qualifying purchase, StayPerfect may receive a commission at no":
        "effettui un acquisto idoneo, StayPerfect potrebbe ricevere una commissione senza",

    "additional cost to you.":
        "alcun costo aggiuntivo per te.",

    # Final CTA
    "Build your Barcelona trip":
        "Costruisci il tuo viaggio a Barcellona",

    "Barcelona is one of those destinations where the best itinerary depends":
        "Barcellona è una di quelle destinazioni in cui il miglior itinerario dipende",

    "on how you want to travel. Use StayPerfect to discover the right mix of":
        "da come vuoi viaggiare. Usa StayPerfect per scoprire il giusto equilibrio tra",

    "places, experiences and travel services.":
        "luoghi, esperienze e servizi di viaggio.",

    "Contact StayPerfect":
        "Contatta StayPerfect",

    "Back to StayPerfect →":
        "Torna a StayPerfect →",

    "— Find your perfect trip.":
        "— Trova il viaggio perfetto per te.",
}

for old, new in replacements.items():
    s = s.replace(old, new)

p.write_text(s, encoding="utf-8")
print("Barcelona tradotta.")
