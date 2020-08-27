const ShowsObject = show => {
  let object = {};
  if (show === 'TOS') {
    object = {
      name: 'Star Trek - The Original Series',
      description: "<p>The original <b>Star Trek</b> series focuses on the 23rd century adventures of Captain James T. Kirk and the U.S.S. <i>Enterprise </i>(NCC-1701), a powerful interstellar spacecraft dispatched by Earth-based Starfleet Command to explore the galaxy. Kirk commands a crew of 430 men and women aboard his starship, which can travel at speeds surpassing the speed of light. Kirk's five-year mission—and his mandate from Starfleet—is to seek out new life and new civilizations, and to boldly go where no man has gone before.</p>",
      seasons: '3',
      episodes: '79',
      premiered: '1966-09-08',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/210/525135.jpg',
    };
    return object;
  } if (show === 'TNG') {
    object = {
      name: 'Star Trek - The Next Generation',
      description: "<p><b>Star Trek: The Next Generation</b> (TNG) focuses on the 24th century adventures of Captain Jean-Luc Picard aboard the U.S.S. Enterprise (NCC-1701-D). This incarnation of the famous starship is much larger than the one captained by James T. Kirk a century earlier, and, accordingly, it carries a larger crew complement: 1,012 men, women…and, surprisingly, children. This era's Starfleet Command believes that men and women are more likely to sign up for long-term exploratory missions if they think of their ship as home. Thus, Picard's crew enjoys many of the comforts they'd have otherwise left behind, including a wide variety of recreational opportunities, \"replicated\" food dishes to suit every palate, and quarters large enough to share with spouses and offspring. There are schools for the children and a bar (stocked with synthetic alcohol, or synthehol) where the adults can unwind. However, the ongoing mission—no longer limited to a mere five years—remains virtually the same as it was during Kirk's time: to seek out new life and new civilizations, and to boldly go where no one has gone before.</p>",
      seasons: '7',
      episodes: '178',
      premiered: '1987-09-28',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/70/176261.jpg',
    };
    return object;
  } if (show === 'VOY') {
    object = {
      name: 'Star Trek - Voyager',
      description: "<p><b>Star Trek: Voyager</b> (VOY) focuses on the 24th century adventures of Captain Kathryn Janeway aboard the U.S.S. Voyager. Smaller than either Kirk's or Picard's starships—its crew complement is only 150—Voyager is fast and powerful, and has the ability to land on a planet's surface. It is one of the most technologically advanced vessels in Starfleet, utilizing computer circuitry that incorporates synthetic neural tissue. Ironically, Janeway's inaugural mission aboard Voyager was to be her last in the Alpha quadrant. While attempting to capture the crew of a renegade Maquis vessel, both her ship and that of the Maquis were pulled into the distant Delta quadrant by powerful alien technology. Unfortunately, there would be no similar \"express\" route to take them home again. Stranded 70,000 light-years from Earth, Janeway convinced the Maquis to join her Starfleet crew and serve together during the long voyage back to Federation space.</p>",
      seasons: '7',
      episodes: '172',
      premiered: '1995-01-16',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/70/176260.jpg',
    };
    return object;
  } if (show === 'DS9') {
    object = {
      name: 'Star Trek - Deep Space 9',
      description: "<p><b>Star Trek: Deep Space Nine</b> (DS9) focuses on the 24th century adventures of Captain Benjamin Sisko on space station Deep Space 9, an outpost situated near the mouth of a stable wormhole on the far reaches of explored space. Although Sisko commands Deep Space 9, the station actually belongs to the inhabitants of nearby Bajor, who requested Starfleet's protective presence after Bajoran freedom fighters put an end to the brutal Cardassian occupation of their world. Approximately a sixth of the station's 300 permanent residents are Starfleet personnel; there is also a sizable Bajoran militia presence. The rest of Deep Space 9's inhabitants are civilians, most of whom work in the station's Promenade, a kind of indoor marketplace. Initially, Sisko's mandate from Starfleet was to protect Bajor and the station from any hostiles who ventured into the area. But with the discovery of the nearby wormhole—a shortcut through space that leads directly to the uncharted Gamma quadrant—Sisko's mandate has expanded exponentially, as the region becomes the gateway to all manner of visitors, both friendly and extremely hostile.</p>",
      seasons: '7',
      episodes: '176',
      premiered: '1993-01-03',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/70/176262.jpg',
    };
    return object;
  } if (show === 'ENT') {
    object = {
      name: 'Star Trek - Enterprise',
      description: "<p><b>Star Trek: Enterprise</b> (ENT) focuses on the 22nd century adventures of Captain Jonathan Archer aboard the Enterprise NX-01 during the early days of interstellar travel. The NX designation indicates that this Enterprise is an experimental prototype; AUnlike the starships of the four other <i>Star Trek </i>series, this Enterprise doesn't have deflector shields or phasers, but it does come equipped with a phase cannon and a rudimentary transporter that functions efficiently most of the time.</p>",
      seasons: '4',
      episodes: '98',
      premiered: '2001-09-26',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/6/15045.jpg',
    };
    return object;
  } if (show === 'DIS') {
    object = {
      name: 'Star Trek - Discovery',
      description: '<p>Star Trek, one of the most iconic and influential global television franchises, returns 50 years after it first premiered, with <b>Star Trek: Discovery</b>. The series will feature a new ship, new characters and new missions, while embracing the same ideology and hope for the future that inspired a generation of dreamers and doers.</p>',
      seasons: '2',
      episodes: '29',
      premiered: '2017-09-24',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/237/592644.jpg',
    };
    return object;
  }
  return object;
};

export default ShowsObject;
