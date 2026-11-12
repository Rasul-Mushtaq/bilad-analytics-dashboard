import { GOVERNORATES } from "./governorates";

function createSeededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Illustrative national targets for the 2023 survey cycle.
const TOTAL_GUESTS = 9_567_572;
const TOTAL_HOTELS = 2_438;
const TOTAL_REVENUE_MILLION_IQD = 695_221; // ~695.221B IQD
const TOTAL_STAYS = 14_200_000;

const GUEST_WEIGHTS = {
  Baghdad: 0.13,
  Basra: 0.09,
  Nineveh: 0.07,
  Erbil: 0.08,
  Sulaymaniyah: 0.07,
  Duhok: 0.03,
  Najaf: 0.06,
  Karbala: 0.05,
  Kirkuk: 0.04,
  "Dhi Qar": 0.05,
  Babil: 0.04,
  Wasit: 0.03,
  Maysan: 0.03,
  "Al-Qadisiyyah": 0.03,
  "Al-Muthanna": 0.02,
  "Al-Anbar": 0.03,
  "Salah ad-Din": 0.03,
  Diyala: 0.03,
};

export function generateMockData({ year = 2023 } = {}) {
  const rand = createSeededRandom(year);

  return GOVERNORATES.map((gov) => {
    const r = () => rand();
    const guestShare = GUEST_WEIGHTS[gov.name] || 0.03;
    const total_guests = Math.round(TOTAL_GUESTS * guestShare * (0.82 + 0.36 * r()));
    const hotels_count = Math.max(4, Math.round(TOTAL_HOTELS * guestShare * (0.78 + 0.44 * r())));
    const revenue_million_dinars = Math.round(
      TOTAL_REVENUE_MILLION_IQD * guestShare * (0.8 + 0.4 * r())
    );
    const overnight_stays = Math.round(total_guests * (1.1 + 0.9 * r()));
    const workforce = Math.round(hotels_count * (10 + 22 * r()));

    return {
      id: `${year}-${gov.name}`,
      year,
      governorate: gov.name,
      region: gov.region,
      hotels_count,
      total_guests,
      overnight_stays,
      workforce,
      revenue_million_dinars,
      expenses_million_dinars: Math.round(revenue_million_dinars * (0.52 + 0.28 * r())),
    };
  });
}