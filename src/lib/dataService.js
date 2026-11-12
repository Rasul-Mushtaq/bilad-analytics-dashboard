import { supabase } from "./supabase";
import { generateMockData } from "../data/mockTourism";

export async function fetchTourismData({ year = 2023 } = {}) {
  try {
    const { data, error } = await supabase
      .from("annual_tourism_stats")
      .select(`
        id,
        year,
        hotels_count,
        total_guests,
        overnight_stays,
        workforce,
        revenue_million_dinars,
        expenses_million_dinars,
        governorates ( name, region )
      `)
      .eq("year", year)
      .order("hotels_count", { ascending: false });

    if (error) throw error;

    const rows = data || [];
    if (rows.length === 0) {
      throw new Error("No records returned for the selected year.");
    }

    return rows.map((row) => ({
      id: row.id,
      year: row.year,
      governorate: row.governorates?.name || "Unknown",
      region: row.governorates?.region || "Unknown",
      hotels_count: row.hotels_count ?? 0,
      total_guests: row.total_guests ?? 0,
      overnight_stays: row.overnight_stays ?? 0,
      workforce: row.workforce ?? 0,
      revenue_million_dinars: row.revenue_million_dinars ?? 0,
      expenses_million_dinars: row.expenses_million_dinars ?? 0,
    }));
  } catch (err) {
    console.warn(
      "[BILAD] Supabase unavailable, using seeded demo data:",
      err.message
    );
    return generateMockData({ year });
  }
}