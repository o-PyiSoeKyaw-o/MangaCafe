import React from 'react';
import { Link } from 'react-router-dom';

export default function MangaHomePage() {
    // Dummy Data for Preview
    const trendingManga = [
        { id: 1, title: "Chainsaw Man", chapter: "Ch. 165", rating: "4.9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq19IM0GeH-G5iqw8bZedp5BKFZiXMBaGpUA&s" },
        { id: 2, title: "Jujutsu Kaisen", chapter: "Ch. 262", rating: "4.8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnispILQdnHUPtxRUknnbu6S72VOWovrmkg&s" },
        { id: 3, title: "Demon Slayer", chapter: "Ch. 205 (End)", rating: "4.9", image: "https://a.storyblok.com/f/178900/1064x1596/08c0e10608/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-kv.jpg/m/filters:quality(95)format(webp)" },
        { id: 4, title: "One Piece", chapter: "Ch. 1115", rating: "5.0", image: "https://images.thalia.media/-/BF750-750/6f4ede8c8ef74eab83d8541655384a69/one-piece-box-1-2-limited-edition-12-dvds-dvd.png" },
        { id: 5, title: "My Hero Academia", chapter: "Ch. 423", rating: "4.7", image: "https://i0.wp.com/doublesama.com/wp-content/uploads/2024/10/MHA-Season-7-cover-art-1.webp?fit=640%2C853&ssl=1" },
    ];

    const latestUpdates = [
        { id: 1, title: "Solo Leveling Ragnarok", chapter: "Ch. 18", time: "10 mins ago", type: "Manhwa", image: "https://www.hachette.co.uk/wp-content/uploads/2026/02/hbg-title-solo-leveling-ragnarok-vol-1-comic-15.jpg?w=450" },
        { id: 2, title: "Kaiju No. 8", chapter: "Ch. 108", time: "1 hour ago", type: "Manga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3xAaXK8tpHFJ7q9m5O9DjQNbTSZ4h3NvIw&s" },
        { id: 3, title: "The Beginning After The End", chapter: "Ch. 185", time: "2 hours ago", type: "Manhwa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJC7hZYEleuXg6ntfN8RvU36Q9eZ59yjzZ0A&s" },
        { id: 4, title: "Tower of God", chapter: "Ch. 625", time: "5 hours ago", type: "Manhwa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaFO1ce1FdBDmyr6KIvOZNH4rcBNL7EN6zw&s" },
        { id: 5, title: "Black Clover", chapter: "Ch. 373", time: "1 day ago", type: "Manga", image: "https://media.notify.moe/images/anime/large/7pEG2KmiR.jpg?1521566199" },
        { id: 6, title: "Spy x Family", chapter: "Ch. 99", time: "1 day ago", type: "Manga", image: "https://bookstation.ie/cdn/shop/files/9781974743339_grande.jpg?v=1752703529" },
    ];

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#4a3e3d] font-sans selection:bg-[#c2b093] selection:text-white">

            {/* 1. Hero Spotlight Banner */}
            <div className="relative w-full h-[460px] overflow-hidden flex items-center bg-[#f5efe6]">
                {/* Background Image with Warm Soft Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide"
                        alt="Spotlight Background"
                        className="w-full h-full object-cover opacity-70 scale-105 filter grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7] via-transparent to-transparent" />
                </div>

                {/* Banner Content */}
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <span className="bg-[#8c7853] text-[#fdfbf7] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block shadow-sm">
                        Trending #1
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#362b2a]">
                        Attack on Titan
                    </h1>
                    <p className="text-[#6b5e5c] text-sm md:text-base max-w-xl mb-6 line-clamp-3 leading-relaxed">
                        Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls...
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to="/manga/1" className="bg-[#8c7853] hover:bg-[#736243] text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 shadow-sm transform hover:-translate-y-0.5">
                            Read Now
                        </Link>
                        <button className="bg-white hover:bg-[#fcfaf4] text-[#8c7853] font-medium px-5 py-2.5 rounded-xl transition-all duration-300 border border-[#e6dec9] shadow-sm">
                            Add to Library
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <main className="container mx-auto px-6 pb-20 -mt-10 relative z-20 space-y-16">

                {/* 2. Trending / Recommended Section */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#362b2a] flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#8c7853] rounded-full inline-block"></span>
                                Hot Updates
                            </h2>
                            <p className="text-xs text-[#a1928e] mt-1">Most read chapters today</p>
                        </div>
                        <Link to="/trending" className="text-xs font-bold text-[#8c7853] hover:text-[#736243] transition-colors">
                            View All →
                        </Link>
                    </div>

                    {/* Manga Grid Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {trendingManga.map((manga) => (
                            <div key={manga.id} className="group relative flex flex-col cursor-pointer">
                                {/* Thumbnail Cover */}
                                <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#f3ede2] border border-[#ebdccb] shadow-sm group-hover:shadow-md group-hover:border-[#d4c1aa] transition-all duration-300">
                                    <img
                                        src={manga.image}
                                        alt={manga.title}
                                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
                                    />
                                    {/* Rating Tag */}
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#b8860b] px-2 py-0.5 rounded-md flex items-center gap-1 border border-[#ebdccb]">
                                        ⭐ {manga.rating}
                                    </div>
                                    {/* Bottom Info Gradient on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#362b2a]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-xs text-white font-medium">Click to read</span>
                                    </div>
                                </div>
                                {/* Title & Chapter */}
                                <div className="mt-3 px-1">
                                    <h3 className="font-bold text-sm text-[#362b2a] group-hover:text-[#8c7853] transition-colors line-clamp-1">
                                        {manga.title}
                                    </h3>
                                    <span className="text-xs text-[#a1928e] font-medium inline-block mt-0.5">
                                        {manga.chapter}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* 3. Latest Chapters & Sidebar Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Left 2 Columns: Latest Chapters */}
                    <section className="lg:col-span-2">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#362b2a] flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-[#a6b1e1]/80 rounded-full inline-block"></span>
                                    Latest Releases
                                </h2>
                            </div>
                        </div>

                        {/* List Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {latestUpdates.map((manga) => (
                                <div key={manga.id} className="flex gap-4 p-3 rounded-2xl bg-white hover:bg-[#fbf9f3] border border-[#ebdccb]/60 hover:border-[#d4c1aa] shadow-sm transition-all duration-200 group">
                                    {/* Mini Cover */}
                                    <div className="w-20 h-28 rounded-xl overflow-hidden bg-[#f3ede2] shrink-0 border border-[#ebdccb]/40">
                                        <img src={manga.image} alt={manga.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-102" />
                                    </div>
                                    {/* Chapter Info */}
                                    <div className="flex flex-col justify-between py-1">
                                        <div>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${manga.type === 'Manhwa' ? 'bg-[#e3e7f8] text-[#5665b0]' : 'bg-[#f4ebe1] text-[#9c7853]'}`}>
                                                {manga.type}
                                            </span>
                                            <h3 className="font-bold text-sm text-[#362b2a] mt-2 line-clamp-1 group-hover:text-[#8c7853] transition-colors">
                                                {manga.title}
                                            </h3>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#5c4d4c] bg-[#f5efe6] px-2.5 py-1 rounded-lg w-max border border-[#e6dec9]/60">
                                                {manga.chapter}
                                            </div>
                                            <span className="text-[11px] text-[#a1928e] mt-1.5 inline-block">
                                                🕒 {manga.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right 1 Column: Top Genres Sidebar */}
                    <aside className="space-y-6">
                        <div className="p-6 rounded-2xl bg-white border border-[#ebdccb] shadow-sm">
                            <h2 className="text-base font-black text-[#362b2a] mb-4 flex items-center gap-2">
                                Popular Genres
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {["Action", "Adventure", "Fantasy", "Comedy", "Drama", "Sci-Fi", "Slice of Life", "Mystery", "Supernatural", "Isekai", "Romance"].map((genre, idx) => (
                                    <span 
                                        key={idx} 
                                        className="text-xs bg-[#fdfbf7] hover:bg-[#8c7853] text-[#6b5e5c] hover:text-white px-3 py-1.5 rounded-xl border border-[#ebdccb] cursor-pointer transition-all duration-200"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Statistics Banner */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f4ebe1] to-[#e6dec9] border border-[#d4c1aa] relative overflow-hidden group">
                            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#8c7853]/5 rounded-full blur-xl" />
                            <h3 className="font-black text-[#362b2a] text-base">Join Discord Server</h3>
                            <p className="text-xs text-[#6b5e5c] mt-1 mb-4 leading-relaxed">Get instantly notified when your favorite manga releases a new chapter!</p>
                            <button className="w-full bg-[#8c7853] hover:bg-[#736243] text-white text-xs font-bold py-2.5 rounded-xl shadow-sm transition-colors">
                                Connect Discord
                            </button>
                        </div>
                    </aside>

                </div>

            </main>
        </div>
    );
}