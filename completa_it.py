from pathlib import Path
import re

p = Path("public/it/index.html")
s = p.read_text(encoding="utf-8")

replacements = {
    # Hero / navigation
    "Travel discovery, reimagined": "Scopri il viaggio in un modo nuovo",
    "Find the trip that fits": "Trova il viaggio perfetto per",
    "Discover Spain, Portugal and their islands with destinations, activities and travel services selected around the way you want to travel.": "Scopri Spagna, Portogallo e le loro isole attraverso destinazioni, attività e servizi di viaggio scelti in base al tuo modo di viaggiare.",
    "Find My Perfect Match": "Trova il mio abbinamento perfetto",
    "Explore Destinations": "Esplora le destinazioni",
    "Your perfect trip": "Il tuo viaggio perfetto",

    # Travel services
    "Search Flights": "Cerca voli",
    "Rent a Car": "Noleggia un'auto",
    "Explore Activities": "Scopri le attività",
    "Explore Klook": "Scopri Klook",
    "Book Transfer": "Prenota un trasferimento",
    "Find Transfer": "Trova un trasferimento",
    "Get an eSIM": "Ottieni una eSIM",
    "Check Compensation": "Verifica il risarcimento",
    "Find Bikes": "Trova biciclette",
    "Book Tickets": "Prenota i biglietti",

    # Destinations intro
    "Explore with StayPerfect": "Scopri con StayPerfect",
    "Where will you go? 🌍": "Dove andrai? 🌍",
    "Explore Spain and Portugal together with their islands, cities, beaches, nature and unique experiences.": "Esplora la Spagna e il Portogallo con le loro isole, città, spiagge, natura ed esperienze uniche.",

    # Countries
    ">Spain<": ">Spagna<",
    ">France<": ">Francia<",
    ">Portugal<": ">Portogallo<",

    "Explore mainland Spain together with the Balearic and Canary Islands.": "Esplora la Spagna continentale insieme alle Isole Baleari e alle Isole Canarie.",
    "Explore Spain →": "Esplora la Spagna →",

    "Discover France through iconic cities, Mediterranean coastlines, historic regions, mountains, countryside and unforgettable French experiences.": "Scopri la Francia attraverso città iconiche, coste mediterranee, regioni storiche, montagne, campagne ed esperienze francesi indimenticabili.",
    "Explore France →": "Esplora la Francia →",

    "Discover Portugal, Madeira and the Azores — from vibrant cities to Atlantic island escapes.": "Scopri il Portogallo, Madeira e le Azzorre — dalle città vivaci alle meravigliose isole dell'Atlantico.",
    "Explore Portugal →": "Esplora il Portogallo →",

    "Perfect Match ✨": "Abbinamento perfetto ✨",

    # Portugal destinations
    "Historic neighbourhoods, viewpoints, food, culture and nightlife.": "Quartieri storici, punti panoramici, gastronomia, cultura e vita notturna.",
    "Explore Lisbon →": "Esplora Lisbona →",

    "Historic streets, river views, architecture, food and wine.": "Strade storiche, panorami sul fiume, architettura, gastronomia e vino.",
    "Explore Porto →": "Esplora Porto →",

    "Golden beaches, cliffs, coastal towns and sunshine.": "Spiagge dorate, scogliere, località costiere e tanto sole.",
    "Explore Algarve →": "Esplora l'Algarve →",

    "Mountains, levadas, dramatic coastline, nature and hiking.": "Montagne, levadas, costa spettacolare, natura ed escursioni.",
    "Explore Madeira →": "Esplora Madeira →",

    "Volcanic landscapes, lakes, hiking, whales and wild Atlantic nature.": "Paesaggi vulcanici, laghi, escursioni, balene e natura incontaminata dell'Atlantico.",
    "Explore Azores →": "Esplora le Azzorre →",

    "Palaces, forests, historic architecture and romantic landscapes.": "Palazzi, foreste, architettura storica e paesaggi romantici.",
    "Explore Sintra →": "Esplora Sintra →",

    "Coastal scenery, beaches, restaurants and relaxed Portuguese atmosphere.": "Paesaggi costieri, spiagge, ristoranti e rilassata atmosfera portoghese.",
    "Explore Cascais →": "Esplora Cascais →",

    "Madeira's vibrant capital, gardens, food, ocean views and culture.": "La vivace capitale di Madeira, giardini, gastronomia, panorami sull'oceano e cultura.",
    "Explore Funchal →": "Esplora Funchal →",

    "Volcanic lakes, hot springs, green landscapes and Atlantic nature.": "Laghi vulcanici, sorgenti termali, paesaggi verdi e natura dell'Atlantico.",
    "Explore São Miguel →": "Esplora São Miguel →",

    # How it works
    "Describe your trip": "Descrivi il tuo viaggio",
    "Tell us what kind of experience you are looking for.": "Dicci che tipo di esperienza stai cercando.",
    "Find your Perfect Match": "Trova il tuo abbinamento perfetto",
    "Your preferences are compared with destination profiles to calculate a personalised match.": "Le tue preferenze vengono confrontate con i profili delle destinazioni per calcolare l'abbinamento più adatto a te.",
    "Choose with confidence": "Scegli con sicurezza",
    "Understand why a destination matches your travel style and explore your options.": "Scopri perché una destinazione è adatta al tuo stile di viaggio ed esplora le tue opzioni.",

    # Services section
    "Flights": "Voli",
    "Search flight options for your journey.": "Cerca le opzioni di volo per il tuo viaggio.",
    "Car Rentals": "Noleggio auto",
    "Compare rental options and explore independently.": "Confronta le opzioni di noleggio e viaggia in autonomia.",
    "Activities": "Attività",
    "Discover tours, attractions and experiences.": "Scopri tour, attrazioni ed esperienze.",
    "Hotels & Activities": "Hotel e attività",
    "Discover hotels, attractions and experiences with Klook.": "Scopri hotel, attrazioni ed esperienze con Klook.",
    "Airport Transfers": "Trasferimenti aeroportuali",
    "Arrange a smoother arrival and departure.": "Organizza un arrivo e una partenza più semplici.",
    "Private Transfers": "Trasferimenti privati",
    "Find private transfer options.": "Trova opzioni di trasferimento privato.",
    "Travel eSIM": "eSIM da viaggio",
    "Stay connected while travelling.": "Rimani connesso durante i tuoi viaggi.",
    "Flight Compensation": "Risarcimento voli",
    "Explore compensation options after disrupted flights.": "Scopri le opzioni di risarcimento dopo un volo interrotto o cancellato.",
    "Bike Rental": "Noleggio biciclette",
    "Find bicycle rental options for exploring destinations.": "Trova opzioni di noleggio biciclette per esplorare le destinazioni.",
    "Tickets & Attractions": "Biglietti e attrazioni",
    "Book tickets for attractions, museums and experiences.": "Prenota biglietti per attrazioni, musei ed esperienze.",

    "Search Flights →": "Cerca voli →",
    "Rent a Car →": "Noleggia un'auto →",
    "Explore Activities →": "Scopri le attività →",
    "Explore Klook →": "Scopri Klook →",
    "Book Transfer →": "Prenota un trasferimento →",
    "Find Transfer →": "Trova un trasferimento →",
    "Get an eSIM →": "Ottieni una eSIM →",
    "Check Compensation →": "Verifica il risarcimento →",
    "Find Bikes →": "Trova biciclette →",
    "Book Tickets →": "Prenota i biglietti →",

    # Footer / choices
    "Find your perfect trip.": "Trova il viaggio perfetto per te.",
    "Privacy": "Privacy",

    "Cities, beaches, culture and unforgettable Spanish escapes": "Città, spiagge, cultura e indimenticabili esperienze spagnole",
    "Volcanic landscapes, beaches, nature and island adventures": "Paesaggi vulcanici, spiagge, natura e avventure sulle isole",
    "Mediterranean beaches, island life and coastal experiences": "Spiagge mediterranee, vita sulle isole ed esperienze sulla costa",
    "Portogallo, Madeira, the Azores and Atlantic escapes": "Portogallo, Madeira, Azzorre e fughe nell'Atlantico",
    "Paris, the French Riviera, Provence, Corsica and more": "Parigi, Costa Azzurra, Provenza, Corsica e molto altro",
}

# Ordine: prima le stringhe complete, poi le singole.
for old, new in replacements.items():
    s = s.replace(old, new)

p.write_text(s, encoding="utf-8")
print("TRADUZIONE ITALIANA APPLICATA")
