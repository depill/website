---
title: "Tenging við Business Central"
description: "Hvernig vörur, verð og viðskiptavinir berast í POS og hvernig sala skilar sér til bókhalds."
date: 2026-10-05
lang: is
section: "Supergut POS"
order: 2
comments: false
---

Supergut POS tengist Microsoft Dynamics 365 Business Central til að sækja rekstrargögn og skila sölu til bókunar. Tengingin notar staðlaða vefþjónustu Microsoft þar sem hún hentar og sérstaka SG POS-viðbót fyrir gögn og vinnslu sem afgreiðslukerfið þarf.

Tengingin er komin í kóðann og hefur verið prófuð að hluta í staðbundnu þróunarumhverfi. Uppsetning og bókun í BC-prófunarumhverfi eru enn nauðsynleg áður en hægt er að staðfesta hana fyrir daglegan rekstur.

## Gögn frá Business Central

Samstillingin nær yfir vörur og afbrigði, strikamerki, mælieiningar, verð, viðskiptavini og birgðastöðu eftir birgðageymslu. POS heldur afriti af þeim gögnum sem afgreiðslan þarf og uppfærir það með samstillingu.

Samstilling er ekki loforð um rauntímabirgðir. Við uppsetningu þarf að yfirfara hvaða vörur og birgðageymslur tilheyra hverri verslun og hvernig verðreglur hennar eru túlkaðar. Reglur sem tengingin styður ekki þurfa yfirferð áður en þær eru notaðar í afgreiðslu.

## Frá sölu að bókun

1. **Afgreiðslu er lokið í POS.** Sala og skráðar greiðsluupplýsingar eru varðveittar ásamt verkefni til afhendingar.
2. **Gögn eru undirbúin fyrir BC.** Viðskiptin fá fast gagnainnihald og skýra auðkenningu svo endursending verði ekki ný sala.
3. **SG POS tekur við og vinnur gögnin.** Uppsetning í BC ræður bókunarflokkum, viðskiptavini, birgðageymslu og meðferð greiðslumáta.
4. **Staða er sótt til baka.** POS merkir afhendingu lokið þegar BC staðfestir bókun og skilanúmer skjals.

Greiðsla hjá greiðsluþjónustu og bókun í Business Central eru aðskildar aðgerðir. Hvorki kvittun úr POS né samþykkt kortagreiðsla ein og sér staðfestir að salan sé bókuð í BC.

## Hvar er tengingunni stýrt?

| Hluti stjórnborðs | Hlutverk                                                              |
| ----------------- | --------------------------------------------------------------------- |
| **Data source**   | Yfirfara tengingu, samstillingu og gögn sem þarfnast athugunar.       |
| **Catalog**       | Skoða vörur og verð sem hafa borist í POS.                            |
| **Shops & tills** | Tengja verslun og afgreiðslukassa við rétta birgðageymslu.            |
| **Accounting**    | Fylgjast með afhendingu, skoða gögn og endursenda eftir leiðréttingu. |

Í Business Central þarf meðal annars að stilla viðskiptavinasniðmát, bókunarflokka, virðisaukaskatt, númeraraðir og reikninga fyrir greiðslumáta. Núverandi SG POS-viðbót miðar við BC 28; samhæfni við aðrar útgáfur þarf að staðfesta sérstaklega.

## Ef tengingin rofnar

Afhending til BC er unnin úr biðröð. Ef BC er tímabundið óaðgengilegt geta viðskipti beðið afhendingar. Afgreiðslan þarf þó áfram samband við POS-þjónustuna og þær greiðsluþjónustur sem hún notar.

Við villu skal skoða stöðu í **Accounting**, leiðrétta uppsetningu eftir þörfum og endursenda sömu viðskipti. Óljóst svar er ekki ástæða til að stofna nýja sölu. Markmiðið er að endursending og stöðuskoðun leiði aftur að sömu viðskiptum.

## Hvað þarf að sannreyna?

Fyrsta prófun á að fylgja einni venjulegri sölu alla leið: rétt verð og skattur í körfu, rétt greiðsla, bókaður sölureikningur og samsvarandi fjárhæðir í BC. Síðan þarf að prófa skil, skipti, endurgreiðslur og þá greiðslumáta sem verða notaðir.

Gjafakort, sala í reikning, flóknar verðreglur og vörur með lotu- eða raðnúmerum þurfa sérstaka útfærslu eða staðfestingu. Ekki gera ráð fyrir að öll BC-ferli séu studd með því einu að tengingin sé virk.
