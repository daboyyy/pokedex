export const calculateHpLevel = (hp) => {
  const hpLevel = parseInt(hp, 10);
  if (isNaN(hpLevel)) return 0;
  else if (hpLevel > 100) return 100;

  return hpLevel;
};

export const calculateAtkLevel = (atks) => {
  if (atks === undefined) return 0;
  const atkLevel = atks.length * 50;

  return Math.min(atkLevel, 100);
};

export const calculateWeakLevel = (weaks) => {
  if (weaks === undefined) return 0;
  const weakLevel = weaks.length * 100;

  return Math.min(weakLevel, 100);
};

export const calculateDmg = (atks) => {
  if (atks === undefined) return 0;

  let totalDmg = 0;
  atks.map((skill, _) => {
    let dmg = Number(skill.damage.replace(/[^\d]+/g, ""));
    if (isNaN(dmg)) dmg = 0;
    totalDmg += dmg;

    return null;
  });

  return totalDmg;
};

export const calculateWeak = (weaks) => {
  if (weaks === undefined) return 0;

  let totalWeakVal = 0;
  weaks.map((weak, _) => {
    let weakVal = Number(weak.value.replace(/[^\d]+/g, ""));
    if (isNaN(weakVal)) weakVal = 0;
    totalWeakVal += weakVal;

    return null;
  });

  return totalWeakVal;
};

export const calculateHappiness = (hpLevel, dmg, weak) =>
  (hpLevel / 10 + dmg / 10 + 10 - weak) / 5;

export const calculatePokedexData = (pokemon) => {
  const hpLevel = calculateHpLevel(pokemon.hp);
  const atkLevel = calculateAtkLevel(pokemon.attacks);
  const weakLevel = calculateWeakLevel(pokemon.weaknesses);

  const dmg = calculateDmg(pokemon.attacks);
  const weak = calculateWeak(pokemon.weaknesses);
  const happinessLevel = calculateHappiness(hpLevel, dmg, weak);

  return {
    hpLevel,
    atkLevel,
    weakLevel,
    dmg,
    weak,
    happinessLevel,
  };
};
