if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Bibliyotèk Supabase la pa chaje.");
} else {
    window.supabaseClient = window.supabase.createClient(
        "https://kzrphvyhkbuhaczmnjgk.supabase.co",
        "sb_publishable_ZvVK-d8qoaqi4__K0cqoyg_IsCaAqPO"
    );

    console.log("Kliyan Supabase la inisyalize.");
}
