import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MangaHomePage() {
    // API Status ကြေညာ
    const [genres, setGenres] = useState([]);
    const [mangas, setMangas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //  API Fetching Logic (Reusable Function ဖြစ်အောင် useEffect အပြင်ထုတ်လိုက်ပါတယ်)
    const fetchGenres = async (showLoading = true) => {
        try {
            if (showLoading) setLoading(true); // အစပိုင်းမှာပဲ လောဒင်ပြပြီး နောက်ကွယ်ကဆွဲချိန် (Silent Refetch) မှာ လောဒင်မပြစေရန်

            const [genresRes, mangasRes] = await Promise.all([
                axios.get('http://127.0.0.1:8000/genres/'),
                axios.get('http://127.0.0.1:8000/mangas/')
            ]);

            if (genresRes.data.success) {
                setGenres(genresRes.data.genres);
            }

            if (mangasRes.data.success) {
                setMangas(mangasRes.data.mangas);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            if (showLoading) setLoading(false);
        }
    };

    // ၃။ Polling မပါသော Real-time Trigger များ
    useEffect(() => {
        // (က) Page စတက်လာချိန်တွင် ပထမဆုံးအကြိမ် ဒေတာဆွဲခြင်း
        fetchGenres(true);

        // (ခ) User က အခြား Tab သို့သွားပြီး မင်း Website ဆီ ပြန်လာချိန်တွင် ဒေတာကို နောက်ကွယ်မှ အော်တိုဆွဲခြင်း
        // ဥပမာ - User က Facebook ခဏကြည့်ပြီး မင်းဆိုက်ထဲပြန်ဝင်လာရင် ဂျန်ဂိုဘက်က Update ဖြစ်သွားတဲ့ Genre တွေကို တစ်ခါတည်း မြင်ရစေမယ်
        const handleWindowFocus = () => {
            fetchGenres(false); // လောဒင်အဝိုင်းကြီးပြပြီး အနှောင့်အယှက်မပေးဘဲ ဒေတာကို Silent Update လုပ်ပေးခြင်း
        };

        window.addEventListener('focus', handleWindowFocus);
        return () => window.removeEventListener('focus', handleWindowFocus);
    }, []);

    const trendingManga = mangas.filter(manga => manga.is_premium).slice(0, 5);
    const latestUpdates = mangas.filter(manga => !manga.is_premium).slice(0, 6);

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#4a3e3d] font-sans selection:bg-[#c2b093] selection:text-white">

            {/* 1. Hero Spotlight Banner */}
            <div className="relative w-full h-[460px] overflow-hidden flex items-center bg-[#f5efe6]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide"
                        alt="Spotlight Background"
                        className="w-full h-full object-cover opacity-70 scale-105 filter grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7] via-transparent to-transparent" />
                </div>

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

                    {loading ? (
                        <div className="text-sm text-[#8c7853]">Loading Hot Mangas...</div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {trendingManga.map((manga) => (
                                <div key={manga.id} className="group relative flex flex-col cursor-pointer">
                                    <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#f3ede2] border border-[#ebdccb] shadow-sm group-hover:shadow-md group-hover:border-[#d4c1aa] transition-all duration-300">
                                        {/* ⚠️ Backend က ပို့ပေးမည့် Image URL နှင့် ဒေတာများကို ချိတ်ဆက်ခြင်း */}
                                        <img src={`http://localhost:8000${manga.cover_image}`} alt={manga.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-102" />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#b8860b] px-2 py-0.5 rounded-md flex items-center gap-1 border border-[#ebdccb]">
                                            ⭐ {manga.rating || "0.0"}
                                        </div>
                                    </div>
                                    <div className="mt-3 px-1">
                                        <h3 className="font-bold text-sm text-[#362b2a] group-hover:text-[#8c7853] transition-colors line-clamp-1">
                                            {manga.title}
                                        </h3>
                                        <span className="text-xs text-[#a1928e] font-medium inline-block mt-0.5">
                                            {manga.latest_chapter || "Ch. 1"}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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

                        {loading ? (
                            <div className="text-sm text-[#8c7853]">Loading Latest Chapters...</div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {latestUpdates.map((manga) => (
                                    <div key={manga.id} className="flex gap-4 p-3 rounded-2xl bg-white hover:bg-[#fbf9f3] border border-[#ebdccb]/60 hover:border-[#d4c1aa] shadow-sm transition-all duration-200 group">
                                        <div className="w-20 h-28 rounded-xl overflow-hidden bg-[#f3ede2] shrink-0 border border-[#ebdccb]/40">
                                            <img src={`http:\\localhost:8000${manga.cover_image}` || manga.image} alt={manga.title} className="w-full h-full object-cover mix-blend-multiply" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#f4ebe1] text-[#9c7853]">
                                                    {manga.type || "Manga"}
                                                </span>
                                                <h3 className="font-bold text-sm text-[#362b2a] mt-2 line-clamp-1 group-hover:text-[#8c7853] transition-colors">
                                                    {manga.title}
                                                </h3>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[#5c4d4c] bg-[#f5efe6] px-2.5 py-1 rounded-lg w-max border border-[#e6dec9]/60">
                                                    {manga.latest_chapter || "Ch. 1"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Right 1 Column: Top Genres Sidebar */}
                    <aside className="space-y-6">

                        <div className="p-6 rounded-2xl bg-white border border-[#ebdccb] shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-base font-black text-[#362b2a] flex items-center gap-2">
                                    Popular Genres
                                </h2>
                            </div>

                            {loading ? (
                                <div className="animate-pulse flex flex-wrap gap-2">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <div key={n} className="h-7 bg-gray-200 rounded-xl w-16"></div>
                                    ))}
                                </div>
                            ) : error ? (
                                <div className="text-red-500 text-xs py-2">
                                    Error: {error}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {genres.map((genre) => (
                                        <span
                                            key={genre.id}
                                            className="text-xs bg-[#fdfbf7] hover:bg-[#8c7853] text-[#6b5e5c] hover:text-white px-3 py-1.5 rounded-xl border border-[#ebdccb] cursor-pointer transition-all duration-200"
                                            onClick={() => console.log(`Selected Genre Slug: ${genre.slug}`)}
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            )}
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