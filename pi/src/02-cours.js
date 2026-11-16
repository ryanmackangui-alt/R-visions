/* =========================================================
   COURS — R5.02 Droit de la propriété intellectuelle (A. Mbotaingar)
   Sources : notes de cours, plan du cours, support « suite et fin »,
   complétés et recoupés avec le Code de la propriété intellectuelle.
   ========================================================= */
const key = h => `<div class="box key"><span class="bt">À retenir</span>${h}</div>`;
const trap = h => `<div class="box trap"><span class="bt">Piège d’examen</span>${h}</div>`;
const tip = h => `<div class="box tip"><span class="bt">Astuce mémo</span>${h}</div>`;
const fix = h => `<div class="box fix"><span class="bt">Tes notes ≠ le texte — à vérifier</span>${h}</div>`;
const plus = h => `<div class="box plus"><span class="bt">Pour aller plus loin (complément hors notes)</span>${h}</div>`;
const A = s => `<span class="art">${s}</span>`;

const CHAPTERS = [
{ id: 'intro', n: '0', title: 'Introduction générale', time: '15 min', html: `
<p class="muted">Notions préalables : définition, plagiat et contrefaçon, branches de la PI, acquisition des droits, exclusions, régime répressif.</p>

<h3>1. Définition du droit de la propriété intellectuelle</h3>
<p>La propriété intellectuelle est l’ensemble des règles qui permettent à l’<b>inventeur</b> ou au <b>créateur</b> d’une œuvre de protéger sa production en lui réservant deux séries de prérogatives :</p>
<ul>
<li>un <b>droit patrimonial</b> : le <b>monopole d’exploitation</b>. Il peut être transmis <b>à titre gratuit ou onéreux</b>, ou <b>concédé sous forme de licence</b> ;</li>
<li>un <b>droit moral</b> : le respect du nom, de la qualité et de l’œuvre — notamment la <b>paternité</b>. Il est <b>perpétuel</b> et <b>attaché à la personne</b> de l’auteur.</li>
</ul>
${key(`<p>Même après avoir <b>vendu</b> son droit patrimonial, l’auteur <b>conserve</b> son droit moral. On peut céder l’exploitation, jamais la paternité.</p>`)}
<p>Le droit de la PI est aussi la <b>source de la répression</b> de deux usages indus : la <b>contrefaçon</b> et le <b>plagiat</b>. Tout usage non autorisé par l’auteur caractérise, selon le cas, l’un ou l’autre.</p>

<h3>2. Plagiat et contrefaçon</h3>
<div class="tw"><table class="t">
<tr><th></th><th>Plagiat</th><th>Contrefaçon</th></tr>
<tr><th>Texte cité au cours</th><td>${A('CPI, art. L. 122-4')}</td><td>${A('CPI, art. L. 335-3')}</td></tr>
<tr><th>Définition</th><td>S’<b>attribuer la propriété</b> de ce qu’on a puisé dans l’œuvre d’autrui, <b>sans son consentement</b> et <b>sans mention des sources</b>.</td><td>Toute <b>reproduction, représentation ou diffusion</b>, par quelque moyen que ce soit, d’une œuvre <b>en violation des droits de l’auteur</b>.</td></tr>
<tr><th>Ce qui est atteint</th><td>La <b>paternité</b> : emprunt d’un passage, d’une idée exprimée, voire de l’intégralité de l’œuvre, en se faisant passer pour l’auteur.</td><td>La <b>forme</b> de l’œuvre : reprise de sa composition, de sa structure, et <b>utilisation sans autorisation</b> du titulaire.</td></tr>
<tr><th>Formule du cours</th><td>« Plagiat ⇒ emprunt + appropriation de la paternité »</td><td>« Contrefaçon = reproduction + utilisation sans autorisation »</td></tr>
</table></div>
<p>${A('L. 122-4')} : <q>Toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l’auteur ou de ses ayants droit ou ayants cause est illicite. Il en est de même pour la traduction, l’adaptation ou la transformation, l’arrangement ou la reproduction par un art ou un procédé quelconque.</q></p>
<p>${A('L. 335-3')} : <q>Est également un délit de contrefaçon toute reproduction, représentation ou diffusion, par quelque moyen que ce soit, d’une œuvre de l’esprit en violation des droits de l’auteur, tels qu’ils sont définis et réglementés par la loi.</q></p>
${plus(`<p>Le mot « plagiat » ne figure <b>pas</b> dans le CPI : c’est une notion morale et universitaire. Juridiquement, le plagiat est sanctionné <b>par l’action en contrefaçon</b> lorsqu’il reprend la <i>forme</i> originale d’une œuvre. C’est pour cela que le cours rattache le plagiat à L. 122-4 (l’usage illicite) et la contrefaçon à L. 335-3 (le délit). Reprendre une simple <b>idée</b> n’est pas une contrefaçon : les idées sont de libre parcours.</p>`)}
<p>Des <b>exceptions</b> existent : certains usages non consentis sont licites (visée scientifique, universitaire, didactique… — voir les exceptions de ${A('L. 122-5')}).</p>

<h3>3. Les branches de la propriété intellectuelle</h3>
<div class="tw"><table class="t">
<tr><th>Propriété littéraire et artistique (PLA)</th><th>Propriété industrielle</th></tr>
<tr><td><ul>
<li><b>Droit d’auteur</b> : musique, films, livres, créations de mode… et <b>logiciels</b>.</li>
<li><b>Droits voisins</b> du droit d’auteur : artistes-interprètes, producteurs de phonogrammes et de vidéogrammes, entreprises de communication audiovisuelle.</li>
<li><b>Droit spécial (sui generis) des producteurs de bases de données</b>.</li>
</ul></td><td><ul>
<li><b>Brevets</b> (inventions).</li>
<li><b>Marques</b> (industrielles, commerciales, de service).</li>
<li><b>Dessins et modèles</b>.</li>
<li><b>Appellations d’origine</b> et <b>indications géographiques</b> protégées.</li>
</ul></td></tr>
<tr><th colspan="2">Acquisition du droit</th></tr>
<tr><td><b>Aucune formalité</b> : le droit naît <b>du seul fait de la création</b>. Présomption de titularité au profit de celui sous le nom de qui l’œuvre est divulguée.</td><td>Par un <b>dépôt</b> (auprès de l’INPI) : le droit résulte du titre délivré et se règle par l’<b>antériorité du dépôt</b> (le premier déposant l’emporte).</td></tr>
</table></div>
<p><b>Support légal</b> : le <b>Code de la propriété intellectuelle</b> (CPI).</p>
${plus(`<ul>
<li>Durées en propriété industrielle : brevet <b>20 ans</b> à compter du dépôt ; marque <b>10 ans</b>, renouvelable indéfiniment ; dessins et modèles <b>5 ans</b>, renouvelables jusqu’à 25 ans.</li>
<li>INPI = Institut national de la propriété industrielle. Tes notes s’arrêtent à « Auprès de… » : c’est l’INPI.</li>
<li>Depuis 2019, les <b>éditeurs et agences de presse</b> disposent aussi d’un droit voisin.</li>
</ul>`)}

<h3>4. Ce qui est exclu du champ de la propriété intellectuelle</h3>
<ul>
<li><b>Le droit à l’image</b> : il est attaché à la <b>personne</b> de l’être humain et prolonge sa personnalité. Il relève du <b>Code civil</b> (vie privée, art. 9) et du <b>Code pénal</b>, pas du CPI.</li>
<li><b>Certains signes distinctifs</b> : <b>dénomination sociale</b>, <b>logo</b>, <b>enseigne commerciale</b>, <b>nom commercial</b>, <b>nom de domaine</b>.</li>
<li>Le <b>savoir-faire</b>.</li>
</ul>
<p>Ces éléments ne sont protégés, en eux-mêmes, ni par le droit d’auteur, ni par le brevet, ni par la marque. Ils peuvent l’être par l’action en <b>concurrence déloyale</b> (responsabilité civile).</p>
${plus(`<p>Nuances utiles si le prof creuse : un <b>logo</b> peut être <i>déposé comme marque</i> ou protégé par le droit d’auteur s’il est original — c’est le signe « en lui-même » qui n’a pas de titre propre. Une marque ne peut pas porter atteinte à une dénomination sociale, un nom commercial ou un nom de domaine <b>antérieurs</b> (ce sont des « droits antérieurs » opposables). Le savoir-faire secret relève du <b>secret des affaires</b> (Code de commerce).</p>`)}

<h3>5. Régime répressif : une action de double nature</h3>
<p>L’action en contrefaçon (et en plagiat) a une <b>double nature</b> :</p>
<div class="tw"><table class="t">
<tr><th>Action pénale (délit)</th><th>Action civile (réparation)</th></tr>
<tr><td>${A('L. 335-2')} ; ${A('L. 335-2-1')} ; ${A('L. 335-4')} ; ${A('L. 343-4')} ; ${A('L. 521-10')} ; ${A('L. 615-14')} ; ${A('L. 716-10')}</td><td>${A('L. 331-1-3')} ; ${A('L. 521-7')} ; ${A('L. 615-7')} ; ${A('L. 623-28')} ; ${A('L. 716-4-10')} ; ${A('L. 722-6')}</td></tr>
<tr><td><b>3 ans d’emprisonnement et 300 000 € d’amende</b> (contrefaçon de droit d’auteur, L. 335-2).</td><td><b>Dommages et intérêts</b> au profit de l’auteur.</td></tr>
</table></div>
${plus(`<p><b>Lire les numéros</b> (très utile pour un prof précis) : le premier chiffre du numéro indique le livre du CPI. <b>L. 3xx</b> = droit d’auteur, droits voisins, bases de données ; <b>L. 5xx</b> = dessins et modèles ; <b>L. 6xx</b> = brevets (et obtentions végétales, L. 623) ; <b>L. 7xx</b> = marques et indications géographiques.</p>
<ul>
<li>Pénal : L. 335-2 (droit d’auteur), L. 335-2-1 (logiciels destinés au piratage), L. 335-4 (droits voisins), L. 343-4 (bases de données), L. 521-10 (dessins et modèles), L. 615-14 (brevets), L. 716-10 (marques).</li>
<li>Civil : L. 331-1-3 (droit d’auteur), L. 521-7 (dessins et modèles), L. 615-7 (brevets), L. 623-28 (obtentions végétales), L. 716-4-10 (marques), L. 722-6 (indications géographiques).</li>
<li>Pour fixer les dommages et intérêts, le juge prend en considération <b>distinctement</b> : les conséquences économiques négatives (manque à gagner, perte subie), le <b>préjudice moral</b>, et les <b>bénéfices réalisés par le contrefacteur</b>. À la demande de la victime, il peut allouer à la place une <b>somme forfaitaire</b>.</li>
<li>En <b>bande organisée</b> (ou en ligne dans certains cas), les peines sont aggravées (7 ans et 750 000 € dans la rédaction que j’ai pu recouper ; des sources plus anciennes indiquent 5 ans et 500 000 € — à vérifier sur Légifrance si tu veux citer ce chiffre).</li>
</ul>`)}
` },

{ id: 'oeuvre', n: '1', title: 'L’œuvre de l’esprit', time: '20 min', html: `
<p class="muted">Titre 1 — PLA · Chapitre 1 — Droit d’auteur · Section I, § 1, A : la nécessité d’une œuvre de l’esprit (définition, IA).</p>

<h3>Le droit d’auteur : objet et nature</h3>
<p>Le droit d’auteur a pour <b>seul objet</b> de protéger une <b>œuvre de l’esprit</b>, c’est-à-dire l’œuvre d’une <b>personne physique</b>.</p>
<ul>
<li>Une <b>personne morale</b> (entreprise, association, État, collectivité territoriale) <b>ne peut pas être auteur</b> — elle ne peut jamais être auteur <i>initial</i>.</li>
<li>Elle peut en revanche être <b>titulaire du droit patrimonial</b> : soit en <b>achetant</b> le droit à l’auteur une fois l’œuvre créée, soit en étant <b>à l’initiative</b> de la création (œuvre collective).</li>
</ul>
<p>${A('L. 111-1, al. 1')} : <q>L’auteur d’une œuvre de l’esprit jouit sur cette œuvre, du seul fait de sa création, d’un droit de propriété incorporelle exclusif et opposable à tous.</q></p>
${key(`<p>Quatre mots à replacer : droit de propriété <b>incorporelle</b>, <b>exclusif</b>, <b>opposable à tous</b>, né <b>du seul fait de la création</b>. « Pas de droit d’auteur sans œuvre de l’esprit. »</p>`)}
${plus(`<p>${A('L. 111-3')} : la propriété incorporelle est <b>indépendante de la propriété de l’objet matériel</b>. Acheter un tableau ne donne pas le droit de le reproduire en cartes postales.</p>`)}

<h3>A. Définition de l’œuvre de l’esprit</h3>
<p><b>Absence de définition légale.</b> La doctrine la définit comme <q>une création intellectuelle se concrétisant dans une forme perceptible aux sens</q> (Lucas, Lucas-Schloetter et Bernault, <i>Traité de la propriété littéraire et artistique</i>, LexisNexis, 5<sup>e</sup> éd. 2017, p. 68).</p>
<h4>1) Une création intellectuelle</h4>
<ul>
<li>Nécessairement l’œuvre d’une <b>personne physique</b>.</li>
<li>Une activité de <b>réflexion</b> qui dépasse le simple choix : créer, ce n’est pas assembler au hasard ou mécaniquement.</li>
<li>Créer requiert la <b>maîtrise du processus</b> : l’auteur <b>ne doit pas être surpris</b> par son œuvre ; il a conscience, dès le départ, du résultat recherché.</li>
<li>Sont donc exclues : la réalisation <b>spontanée</b>, <b>hasardeuse</b>, la simple <b>découverte</b>, la création <b>animale</b>, et la création réalisée <b>de façon autonome par une machine</b>.</li>
</ul>
<h4>2) Concrétisée dans une forme</h4>
<ul>
<li>L’œuvre doit <b>quitter l’état d’idée</b> pour prendre forme. <b>Les idées ne sont pas protégées</b> : elles sont <b>libres</b> (« de libre parcours ») et, tant qu’elles ne sont pas extériorisées, insaisissables.</li>
<li>La forme est <b>indépendante de l’achèvement</b> : une œuvre inachevée est protégée.</li>
</ul>
<h4>3) Une forme perceptible aux sens</h4>
<ul>
<li>L’œuvre doit être <b>apte à être communiquée à un public</b> par les sens : vue, ouïe, odorat, goût, toucher.</li>
<li><b>Attention aux parfums</b> : ils ne sont <b>pas</b> protégés par le droit d’auteur, car ils procèdent de la mise en œuvre d’un <b>savoir-faire</b>.</li>
</ul>
${plus(`<ul>
<li><b>Parfum</b> : Cass. 1<sup>re</sup> civ., <b>13 juin 2006</b> — la fragrance d’un parfum, <q>qui procède de la simple mise en œuvre d’un savoir-faire</q>, n’est pas la création d’une forme d’expression protégeable. Solution maintenue par Cass. com., <b>10 décembre 2013</b> (forme non identifiable avec une précision suffisante).</li>
<li><b>Saveur</b> : CJUE, <b>13 novembre 2018</b>, <i>Levola Hengelo</i> (C-310/17) — la saveur d’un aliment ne peut être une « œuvre », faute d’être identifiable avec précision et objectivité.</li>
</ul>`)}
${trap(`<p>« Perceptible aux sens » ne veut pas dire que tout ce qui se sent ou se goûte est protégé : le <b>parfum</b> est le contre-exemple à citer. Et l’<b>idée</b>, même géniale, n’est jamais protégée — seule sa <b>mise en forme</b> l’est.</p>`)}

<h3>A bis. Les œuvres créées par l’intelligence artificielle</h3>
<p>Principe : le droit d’auteur ne protège que les œuvres émanant de la <b>création humaine</b>.</p>
<div class="tw"><table class="t">
<tr><th>France et Union européenne</th><td>Une image, un texte, une musique produits par une IA <b>sans intervention humaine</b> ne sont pas protégés. Une protection est envisageable lorsque l’utilisateur a réellement <b>façonné</b> le résultat (prompts travaillés, direction artistique, choix créatifs, retouches) : c’est alors <i>son</i> apport créatif qui est protégé.</td></tr>
<tr><th>États-Unis</th><td>Le <b>copyright</b> (équivalent du droit d’auteur) <b>refuse l’enregistrement</b> des œuvres réalisées par l’IA sans le concours de l’homme.</td></tr>
<tr><th>Royaume-Uni</th><td>Plus <b>favorable</b> : la loi reconnaît un droit exclusif à la personne à l’origine de l’œuvre générée par ordinateur, à des conditions plus souples que dans l’UE (le cours parle d’un droit <i>sui generis</i> au profit de l’utilisateur).</td></tr>
<tr><th>Droit <i>sui generis</i></th><td>De plus en plus de voix demandent la création d’un <b>droit spécial</b>, distinct du droit d’auteur, pour protéger les créations de l’IA.</td></tr>
</table></div>
<p><b>Conséquence de la non-protection par le droit d’auteur :</b></p>
<ul>
<li><b>Domaine public</b> : l’œuvre n’a aucune protection, elle « appartient à tout le monde ».</li>
<li><b>Protection éventuelle par d’autres droits</b> : contrat (conditions d’utilisation de l’outil), concurrence déloyale et parasitisme, droit des marques ou des dessins et modèles si un dépôt est possible.</li>
</ul>
${plus(`<ul>
<li><b>États-Unis</b> : affaire <i>Thaler v. Perlmutter</i> — refus d’enregistrer une image créée de façon autonome par une IA ; confirmé par la cour d’appel fédérale de Washington (D.C. Circuit) en mars 2025 ; la Cour suprême a <b>refusé d’examiner l’affaire le 2 mars 2026</b>. L’exigence d’un auteur humain demeure.</li>
<li><b>Royaume-Uni</b> : <i>Copyright, Designs and Patents Act 1988</i>, section 9(3) : l’auteur d’une œuvre générée par ordinateur est la personne qui a pris <q>les dispositions nécessaires à la création</q> ; protection de 50 ans. Un rapport du gouvernement britannique de mars 2026 envisage de supprimer cette protection, mais <b>rien n’est voté</b> à ce jour.</li>
<li><b>UE</b> : le critère reste celui de la CJUE — une <q>création intellectuelle propre à son auteur</q>, reflétant des <b>choix libres et créatifs</b> (arrêts <i>Infopaq</i>, 2009 ; <i>Painer</i>, 2011).</li>
<li>Je n’ai pas pu vérifier de décision française publiée tranchant directement la question : n’en cite pas à l’examen.</li>
</ul>`)}
` },

{ id: 'qualite', n: '2', title: 'Originalité, exemples d’œuvres, absence de formalité', time: '20 min', html: `
<p class="muted">Section I, § 1 : 2) qualité de l’œuvre · 3) exemples d’œuvres · B. protection sans formalité.</p>

<h3>2) La qualité de l’œuvre : l’originalité</h3>
<p>L’<b>originalité</b> est la qualité <b>primordiale</b> de l’œuvre de l’esprit. Deux conceptions :</p>
<div class="tw"><table class="t">
<tr><th>Conception classique (subjective)</th><th>Conception moderne (objective)</th></tr>
<tr><td>L’originalité est l’<b>empreinte personnelle</b> du créateur, le <b>reflet de sa personnalité</b>.<br>Exemple : un même paysage peint par deux peintres donne deux œuvres protégées, car chacun y met sa personnalité.</td><td>Est original <b>ce qui est nouveau</b>. Sur ce terrain de la nouveauté, le droit d’auteur <b>se rapproche du brevet</b>.</td></tr>
</table></div>
<p>La jurisprudence procède <b>au cas par cas</b>.</p>
${fix(`<p>Tes notes disent : « 2 conditions cumulatives : <b>originalité et innovation</b> ». Le plan du prof, lui, ne pose qu’<b>une</b> qualité — l’<b>originalité</b> — avec <b>deux conceptions</b> (classique / moderne). L’« innovation » correspond très probablement à la conception <i>moderne</i> (nouveauté), pas à une seconde condition. En droit positif, la <b>nouveauté</b> est une condition du <b>brevet</b>, pas du droit d’auteur. À l’examen : présente l’originalité et ses deux conceptions.</p>`)}
${plus(`<p>La conception moderne vient surtout du <b>logiciel</b> : Cass. ass. plén., <b>7 mars 1986</b>, <i>Babolat c/ Pachot</i> — l’originalité y est la <q>marque d’un apport intellectuel</q>. Au niveau européen : <q>création intellectuelle propre à son auteur</q> (CJUE, 16 juillet 2009, <i>Infopaq</i>).</p>`)}

<h3>Les quatre « indifférences »</h3>
<p>${A('L. 112-1')} : le droit d’auteur protège <q>toutes les œuvres de l’esprit, quels qu’en soient le genre, la forme d’expression, le mérite ou la destination</q>.</p>
${tip(`<p><b>G-F-M-D</b> : <b>G</b>enre, <b>F</b>orme d’expression, <b>M</b>érite, <b>D</b>estination. Le juge ne note pas l’œuvre : originalité ≠ « plus-value » ≠ beauté ≠ valeur marchande.</p>`)}
<p>${A('L. 111-2')} : <q>L’œuvre est réputée créée, indépendamment de toute divulgation publique, du seul fait de la réalisation, même inachevée, de la conception de l’auteur.</q></p>
<p>Il en résulte que sont protégées :</p>
<ul>
<li>les <b>œuvres éphémères</b> : compositions florales, sculptures en chocolat… ;</li>
<li>une simple <b>ébauche</b> ou un <b>brouillon</b>, pourvu qu’il épouse déjà la structure de l’œuvre et permette de la distinguer ;</li>
<li>les <b>œuvres orales</b> : discours, allocutions, conférences, plaidoiries ;</li>
<li>une <b>œuvre secrète</b>, jamais diffusée : la confidentialité ne retire rien.</li>
</ul>
${fix(`<p>Dans tes notes : « elle est réputée créée du seul fait de sa <i>réputation</i> » → il faut lire « du seul fait de sa <b>réalisation</b> » (L. 111-2).</p>`)}

<h3>3) Exemples d’œuvres de l’esprit — ${A('L. 112-2')}</h3>
<p><q>Sont considérés <b>notamment</b> comme œuvres de l’esprit</q> (14 rubriques) :</p>
<ol>
<li>les livres, brochures et autres écrits littéraires, artistiques et scientifiques ;</li>
<li>les conférences, allocutions, sermons, plaidoiries et autres œuvres de même nature ;</li>
<li>les œuvres dramatiques ou dramatico-musicales ;</li>
<li>les œuvres chorégraphiques, les numéros et tours de cirque, les pantomimes, <b>dont la mise en œuvre est fixée par écrit ou autrement</b> ;</li>
<li>les compositions musicales avec ou sans paroles ;</li>
<li>les œuvres cinématographiques et autres œuvres consistant dans des séquences animées d’images, sonorisées ou non, dites <b>œuvres audiovisuelles</b> ;</li>
<li>les œuvres de dessin, de peinture, d’architecture, de sculpture, de gravure, de lithographie ;</li>
<li>les œuvres graphiques et typographiques ;</li>
<li>les œuvres photographiques et celles réalisées à l’aide de techniques analogues ;</li>
<li>les œuvres des <b>arts appliqués</b> ;</li>
<li>les illustrations, les cartes géographiques ;</li>
<li>les plans, croquis et ouvrages plastiques relatifs à la géographie, à la topographie, à l’architecture et aux sciences ;</li>
<li>les <b>logiciels, y compris le matériel de conception préparatoire</b> ;</li>
<li>les créations des <b>industries saisonnières de l’habillement et de la parure</b> (couture, fourrure, lingerie, broderie, mode, chaussure, ganterie, maroquinerie…).</li>
</ol>
${key(`<p>Le mot « <b>notamment</b> » rend la liste <b>indicative</b> (non limitative). La <b>jurisprudence</b> a ajouté : <b>compositions florales</b>, <b>modèles de coiffure</b>, <b>jeux de lumière</b>, <b>jeux télévisés</b>, <b>sonorité d’un orgue</b>.</p>`)}
${trap(`<p>Seule la rubrique 4 (chorégraphie, cirque, pantomime) exige une <b>fixation</b> « par écrit ou autrement ». Et la rubrique 14 ne vise que les industries qui <b>renouvellent fréquemment la forme de leurs produits</b>.</p>`)}

<h3>B. Une protection sans formalité</h3>
<p><b>Naissance du seul fait de la création</b> (${A('L. 111-1')} et ${A('L. 111-2')}) : aucun dépôt, aucun enregistrement, aucune mention © n’est nécessaire. Il suffit que l’œuvre existe dans une forme perceptible aux sens.</p>
<p>Il existe pourtant des <b>formalités</b>, mais elles ne conditionnent <b>pas</b> le droit d’auteur. Elles servent à la <b>conservation</b>, à la <b>sauvegarde</b>, à la <b>preuve</b> ou à l’exercice d’un <b>contrôle</b> :</p>
<ul>
<li><b>Dépôt légal</b> (un exemplaire du livre à la BnF, une copie du film) : conservation et <b>pérennité</b> de l’œuvre — si tous les exemplaires disparaissent, on pourra la rééditer dans 100 ans. Il est aussi <b>utile comme preuve</b> de la <b>date</b> de création ou de sortie.</li>
<li><b>Visa d’exploitation</b> (films) : contrôle préalable, pour s’assurer de l’absence de <b>dangerosité</b> de l’œuvre pour le public (classification par âge).</li>
</ul>
${plus(`<p>Le dépôt légal est régi par le <b>Code du patrimoine</b> (BnF pour les imprimés, INA pour l’audiovisuel, CNC pour les films). Le visa d’exploitation cinématographique est délivré par le <b>ministre chargé de la culture</b> après avis d’une commission de classification (Code du cinéma et de l’image animée). Autres moyens de preuve de la date : enveloppe Soleau (INPI), dépôt chez un notaire ou un commissaire de justice, dépôt auprès d’une société d’auteurs.</p>`)}
` },

{ id: 'patri', n: '3', title: 'Droits patrimoniaux : le droit d’exploitation et ses exceptions', time: '25 min', html: `
<p class="muted">Section I, § 2, A, 1 : droit de reproduction, droit de représentation, exceptions au monopole.</p>
<p>${A('L. 111-1, al. 2')} : le droit d’auteur comporte des <b>attributs d’ordre intellectuel et moral</b> et des <b>attributs d’ordre patrimonial</b>.</p>
<div class="tw"><table class="t">
<tr><th colspan="2">Droits patrimoniaux</th></tr>
<tr><td><b>Droit d’exploitation</b> — portée <b>générale</b> : reproduction + représentation</td><td><b>Droit de suite</b> — ne concerne que les œuvres <b>graphiques et plastiques</b></td></tr>
</table></div>

<h3>1. Le droit d’exploitation</h3>
<p><b>Principe</b> : un <b>monopole</b> de l’auteur ou de ses <b>ayants droit</b>, qui se décline en droit de <b>reproduction</b> et droit de <b>représentation</b> (${A('L. 122-1')}).</p>
${key(`<p><b>Ayants droit</b> = les héritiers. <b>Ayants cause</b> = les tiers qui ont <b>acquis</b> le droit d’exploitation auprès de l’auteur ou de ses héritiers (maison d’édition, producteur…).</p>`)}

<h4>a) Le droit de reproduction — ${A('L. 122-3')}</h4>
<p><b>Définition</b> : la <b>fixation matérielle</b> de l’œuvre sur un support, par tous procédés qui permettent de la <b>communiquer au public de manière indirecte</b>.</p>
<p><b>Moyens de fixation</b> : imprimerie, dessin, gravure, photographie, moulage, tout procédé des arts graphiques et plastiques, enregistrement mécanique, cinématographique ou magnétique (et aujourd’hui numérique).</p>
<p><b>Principe</b> : ce n’est pas la fixation par un tiers <i>en elle-même</i> qui viole le droit, c’est la fixation <b>en vue d’une exploitation publique</b>, <b>gratuite ou payante</b>. Il y a contrefaçon ou plagiat à partir de la <b>mise en circulation</b>.</p>
<p>Fixations caractéristiques d’une violation :</p>
<ul>
<li>la <b>mise en vente d’un support non visé par l’auteur</b> (l’auteur a autorisé le livre papier, pas le livre audio) ;</li>
<li>l’<b>intégration d’éléments originaux</b> d’une œuvre dans une autre, sans autorisation (œuvre composite non autorisée) ;</li>
<li>les <b>œuvres dérivées</b> : traduction, adaptation et plus largement <b>merchandising</b> d’un livre, d’une chanson, d’une comédie musicale ;</li>
<li>la <b>location</b> ou le <b>prêt</b> de l’œuvre.</li>
</ul>
<p>Face à une exploitation non autorisée, l’auteur a <b>deux choix</b> : <b>faire interdire</b> l’exploitation pour l’avenir, ou <b>réclamer des droits d’auteur</b> (une rémunération).</p>

<h4>b) Le droit de représentation — ${A('L. 122-2')}</h4>
<p><b>Définition</b> : la <b>communication de l’œuvre au public par un procédé quelconque</b>. À la différence de la reproduction, elle établit un <b>lien direct</b> entre l’œuvre et le public (pas de support intermédiaire remis au public).</p>
<ul>
<li>récitation publique ;</li>
<li>exécution lyrique ;</li>
<li>représentation dramatique ;</li>
<li>exposition (présentation publique) ;</li>
<li>projection publique ;</li>
<li><b>télédiffusion</b> : ondes hertziennes, câble, satellite, Internet.</li>
</ul>
${tip(`<p><b>Reproduction = support = communication indirecte.</b> <b>Représentation = pas de support = communication directe.</b> Un concert : représentation. Le CD du concert : reproduction. Le streaming : les deux à la fois (copie sur serveur + mise à disposition du public).</p>`)}

<h3>c) Les exceptions au monopole — ${A('L. 122-5')}</h3>
<p>Le droit d’exploitation confère un monopole en principe <b>absolu</b>. Lorsque l’œuvre a été <b>divulguée</b>, l’auteur <b>ne peut interdire</b> certains usages. <b>Réserve générale</b> : ces dérogations ne doivent <b>ni porter atteinte à l’exploitation normale de l’œuvre, ni causer un préjudice injustifié aux intérêts légitimes de l’auteur</b>.</p>
<div class="tw"><table class="t">
<tr><th>Exception</th><th>Conditions à citer</th></tr>
<tr><td><b>Représentation familiale</b></td><td><b>Privée</b> et <b>gratuite</b>, effectuée exclusivement dans un <b>cercle de famille</b>. L’exemplaire doit avoir été acquis de façon licite.</td></tr>
<tr><td><b>Copie privée</b></td><td>Copie strictement réservée à l’<b>usage privé du copiste</b>, non destinée à une utilisation collective, réalisée à partir d’une <b>source licite</b>. <b>Ne s’applique pas aux logiciels</b> (seule une copie de sauvegarde est permise) ni aux bases de données électroniques.</td></tr>
<tr><td colspan="2"><b>Usages d’intérêt public</b> — <b>sous réserve que soient indiqués clairement le nom de l’auteur et la source</b> :</td></tr>
<tr><td>Analyses et <b>courtes citations</b></td><td>Justifiées par le caractère <b>critique, polémique, pédagogique, scientifique ou d’information</b> de l’œuvre qui les incorpore (critiques, médias, analystes, polémistes).</td></tr>
<tr><td><b>Revues de presse</b></td><td>Présentation comparative d’articles de presse sur un même thème.</td></tr>
<tr><td>Diffusion à titre d’<b>actualité</b></td><td>Discours destinés au public (assemblées politiques, administratives, judiciaires, académiques, réunions publiques, cérémonies officielles).</td></tr>
<tr><td><b>Catalogues de ventes judiciaires</b></td><td>Reproduction d’œuvres d’art dans le catalogue d’une vente judiciaire effectuée en France.</td></tr>
<tr><td>Fins <b>pédagogiques</b></td><td><b>Extraits</b> seulement, à des fins exclusives d’<b>illustration</b> dans le cadre de l’enseignement et de la recherche. L’enseignant ne peut reproduire qu’<b>une partie</b> de l’ouvrage.</td></tr>
<tr><td colspan="2"><b>Autres exceptions</b></td></tr>
<tr><td><b>Parodie, pastiche, caricature</b></td><td><q>Compte tenu des lois du genre</q> : intention humoristique, absence de confusion avec l’œuvre d’origine, pas d’intention de nuire.</td></tr>
<tr><td><b>Handicap</b></td><td>Reproduction et représentation par des établissements ouverts au public, au profit de personnes atteintes d’une déficience motrice, physique, sensorielle, mentale, cognitive ou psychique.</td></tr>
<tr><td><b>Conservation / consultation</b></td><td>Par des bibliothèques accessibles au public, musées, services d’archives, sans avantage économique ou commercial.</td></tr>
<tr><td>Œuvres <b>architecturales et sculptures</b> sur la <b>voie publique</b> (« liberté de panorama »)</td><td>Œuvres placées <b>en permanence</b> sur la voie publique ; reproductions réalisées par des <b>personnes physiques</b>, <b>à l’exclusion de tout usage commercial</b>.</td></tr>
<tr><td><b>Pièces automobiles</b></td><td>Reproduction de pièces destinées à <b>rendre son apparence initiale</b> à un véhicule (pièces de carrosserie, vitrages…) — issue de la loi « Climat et résilience » du 22 août 2021.</td></tr>
</table></div>
${fix(`<p>Tes notes disent pour la copie privée : « autorisé <i>avec accord de l’auteur</i> ». C’est l’inverse : une <b>exception</b> est justement un usage permis <b>sans</b> l’accord de l’auteur. Ce qui est exigé, c’est une <b>source licite</b> et un usage <b>strictement privé</b>. Ce que tes notes ont bien retenu : la copie privée <b>ne s’applique pas aux logiciels</b>.</p>`)}
${trap(`<p>Trois confusions classiques : (1) la mention du <b>nom de l’auteur et de la source</b> n’est exigée que pour le bloc « intérêt public » (citations, revues de presse, actualité, catalogues, pédagogie) — pas pour la copie privée ni le cercle de famille ; (2) le cercle de famille doit être <b>privé ET gratuit</b> ; (3) la citation doit être <b>courte</b> et <b>justifiée</b> par l’œuvre qui l’accueille.</p>`)}
${plus(`<p>La réserve générale s’appelle le <b>« test en trois étapes »</b> (Convention de Berne, directive 2001/29) : cas spéciaux, pas d’atteinte à l’exploitation normale, pas de préjudice injustifié aux intérêts légitimes de l’auteur. La copie privée est compensée par la <b>rémunération pour copie privée</b> prélevée sur les supports vierges. Je n’ai pas pu relire la <b>numérotation actuelle</b> des alinéas de L. 122-5 sur Légifrance : cite « L. 122-5 » sans numéro d’alinéa, sauf 1° (cercle de famille), 2° (copie privée), 3° (intérêt public) et 4° (parodie), qui sont stables.</p>`)}
` },

{ id: 'suite', n: '4', title: 'Droit de suite et régime des droits patrimoniaux', time: '15 min', html: `
<p class="muted">Section I, § 2, A, 2 et 3.</p>

<h3>2. Le droit de suite — ${A('L. 122-8')}</h3>
<p><b>Définition</b> : le droit, pour l’auteur d’une œuvre <b>graphique ou plastique</b>, de <b>participer au produit de toute vente</b> de son œuvre <b>après la première cession</b> opérée par lui-même ou ses ayants droit, lorsqu’intervient un <b>professionnel du marché de l’art</b> en tant que <b>vendeur, acheteur ou intermédiaire</b>.</p>
<p><b>Champ d’application</b> : uniquement les œuvres <b>graphiques et plastiques</b> originales — tableaux, dessins, sculptures, gravures, photographies…</p>
<p><b>Justification (équité)</b> : l’artiste qui vend avant d’être connu est privé de la <b>valorisation ultérieure</b> de son travail. Le droit de suite l’<b>associe</b> à cette plus-value — rares sont les artistes qui connaissent la gloire de leur vivant.</p>
<p><b>Limite</b> : ce droit n’est pas appliqué partout (il n’existe pas, par exemple, au niveau fédéral aux États-Unis).</p>
${fix(`<p><b>C’est le point le plus déformé de tes notes.</b> Tu as noté : « deux conditions cumulatives : revente au moins 3 ans après la vente par l’auteur, et prix au moins égal à 10 000 € » et « taux de 3 % ». Ce que prévoient les textes (L. 122-8 et sa partie réglementaire, recoupés sur plusieurs sources) :</p>
<ul>
<li><b>Seuil</b> : le droit de suite s’applique dès que le prix de vente atteint <b>750 €</b>.</li>
<li><b>« 3 ans / 10 000 € » est une exception, pas une condition</b> : le droit de suite <b>ne s’applique pas</b> lorsque le vendeur a acquis l’œuvre <b>directement de l’auteur moins de 3 ans</b> avant la revente <b>et</b> que le prix ne dépasse pas <b>10 000 €</b>.</li>
<li><b>Taux dégressif par tranches</b> : <b>4 %</b> jusqu’à 50 000 € ; <b>3 %</b> de 50 000 à 200 000 € ; <b>1 %</b> de 200 000 à 350 000 € ; <b>0,5 %</b> de 350 000 à 500 000 € ; <b>0,25 %</b> au-delà. Total <b>plafonné à 12 500 €</b> par vente.</li>
<li>Il est <b>à la charge du vendeur</b> ; le professionnel du marché de l’art est responsable du paiement.</li>
</ul>
<p>Le « 3 % » de tes notes est donc l’un des taux de la grille (ou le « ratio » simplifié donné à l’oral). <b>Conseil</b> : à l’examen, donne la règle légale et, si tu veux te couvrir, ajoute « (taux de 3 % indiqué en cours) ». Si tu peux, demande confirmation au prof.</p>`)}

<h3>3. Le régime des droits patrimoniaux</h3>
<h4>Limitation dans le temps — ${A('L. 123-1')}</h4>
<p>Les droits patrimoniaux (exploitation et suite) durent <b>toute la vie de l’auteur</b> et <b>70 ans après son décès</b>, au profit de ses ayants droit.</p>
<h4>« Domaine public »</h4>
<p>Passé ce délai, l’œuvre <b>tombe dans le domaine public</b> : la part patrimoniale du droit d’auteur est <b>purgée</b>. Chacun peut l’exploiter <b>librement et gratuitement</b>. Mais l’écoulement des 70 ans <b>ne touche pas au droit moral</b>, qui est perpétuel.</p>
${fix(`<p>Tes notes : « pour une œuvre <i>collective</i>, 70 ans après le décès du dernier co-auteur ». Il faut lire œuvre <b>de collaboration</b> : 70 ans après la mort du <b>dernier vivant des collaborateurs</b> (${A('L. 123-2')}). Pour une œuvre <b>collective</b>, <b>anonyme</b> ou <b>pseudonyme</b>, le délai de 70 ans court à compter du <b>1<sup>er</sup> janvier de l’année civile suivant la publication</b> (${A('L. 123-3')}) — logique : son titulaire est souvent une personne morale, qui ne meurt pas.</p>`)}
${plus(`<p>Le délai se calcule en années civiles pleines : l’année du décès « et les 70 années qui suivent ». Un auteur mort en 1955 → œuvre dans le domaine public le 1<sup>er</sup> janvier 2026.</p>`)}

<h4>Distinction de régime : exploitation / suite</h4>
<div class="tw"><table class="t">
<tr><th></th><th>Droit d’exploitation</th><th>Droit de suite</th></tr>
<tr><th>Cession</th><td><b>Aliénable</b> : cessible à titre <b>onéreux ou gratuit</b> (${A('L. 122-7')}), par des contrats qui délimitent le périmètre de l’exploitation autorisée.</td><td><b>Inaliénable</b> : la loi (${A('L. 122-8')}) l’interdit. Règle d’<b>ordre public</b> : l’auteur ne peut pas y <b>renoncer</b>.</td></tr>
<tr><th>Pourquoi ?</th><td>C’est la valeur économique de l’œuvre : elle doit pouvoir circuler.</td><td>Éviter qu’un auteur inconnu, sans valeur marchande, soit poussé par un <b>marchand d’art expérimenté</b> à y renoncer dès la première vente.</td></tr>
<tr><th>Durée</th><td colspan="2">Tous deux <b>temporaires</b> : vie de l’auteur + 70 ans (les notes disent « prescriptibles »).</td></tr>
</table></div>
${key(`<p>Classement à connaître par cœur : <b>exploitation</b> = aliénable + temporaire · <b>suite</b> = <b>in</b>aliénable + temporaire · <b>droit moral</b> = inaliénable + <b>perpétuel</b> + imprescriptible.</p>`)}
` },

{ id: 'moral', n: '5', title: 'Le droit moral de l’auteur', time: '25 min', html: `
<p class="muted">Section I, § 2, B : attributs et caractères du droit moral.</p>
<p><b>Principe</b> : le droit moral est la composante du droit d’auteur qui consacre l’<b>intimité de la relation entre l’auteur et son œuvre</b>. Il établit un lien <b>inaltérable par le temps</b> et par les personnes interposées. Conséquences : à la différence du droit d’exploitation, il <b>ne peut pas être cédé</b>, ni à titre onéreux ni à titre gratuit ; à la différence du droit de suite, il est <b>imprescriptible</b>.</p>
<p>${A('L. 121-1')} : <q>L’auteur jouit du droit au respect de son nom, de sa qualité et de son œuvre. Ce droit est attaché à sa personne. Il est perpétuel, inaliénable et imprescriptible. Il est transmissible à cause de mort aux héritiers de l’auteur.</q></p>
${tip(`<p>Les quatre attributs : <b>D-R-P-R</b> — <b>D</b>ivulgation, <b>R</b>epentir et retrait, <b>P</b>aternité, <b>R</b>espect de l’œuvre.</p>`)}

<h3>1. Les attributs du droit moral</h3>
<h4>a) Droit de divulgation — ${A('L. 121-2')}</h4>
<ul>
<li>L’auteur a <b>seul</b> le droit de décider de <b>rendre son œuvre publique ou non</b>. Droit absolu : nul ne peut l’obliger à publier. Il peut s’opposer à la publication <b>même après avoir sollicité un éditeur</b>.</li>
<li>Il détermine aussi le <b>procédé</b> et les <b>conditions</b> de la divulgation (sur quel support).</li>
<li>Le cessionnaire du droit d’exploitation (éditeur, producteur) <b>ne peut pas s’y opposer</b>.</li>
<li>En pratique, pour les œuvres littéraires : exigence d’un <b>« bon à publier »</b> signé par l’auteur, <b>en plus</b> du contrat d’édition.</li>
</ul>
${plus(`<p>Dans l’édition on parle plus couramment de <b>« bon à tirer » (BAT)</b> : c’est la même chose. Après la mort de l’auteur, le droit de divulgation est exercé par l’exécuteur testamentaire puis les héritiers, sous le contrôle du juge en cas d’<b>abus notoire</b> (${A('L. 121-3')}).</p>`)}

<h4>b) Droit de repentir et de retrait — ${A('L. 121-4')}</h4>
<ul>
<li><b>Repentir</b> : imposer au cessionnaire des <b>modifications</b> du contenu ou de la forme d’une œuvre <b>déjà publiée</b> (par exemple pour les nouveaux tirages). Les exemplaires déjà tirés continuent de circuler. Le cessionnaire ne peut pas s’y opposer.</li>
<li><b>Retrait</b> : exiger purement et simplement le <b>retrait de la circulation</b> de l’œuvre.</li>
<li><b>Condition</b> : l’auteur doit <b>indemniser préalablement</b> le cessionnaire (éditeur, producteur) du préjudice causé. Cette contrainte financière explique que ce droit soit <b>très rarement exercé</b>.</li>
</ul>
${fix(`<p>Le plan du prof indique « (CPI, art. L. 121-7) » pour le repentir et le retrait. Dans le code, le <b>droit commun</b> du repentir et du retrait est à l’article <b>L. 121-4</b> ; l’article <b>L. 121-7</b> est celui qui le <b>supprime pour l’auteur d’un logiciel</b> (ce que dit d’ailleurs le support de cours, page 2). Retiens les deux : L. 121-4 = principe ; L. 121-7 = exclusion pour le logiciel. Si le sujet reprend la référence du diaporama, tu sauras d’où elle vient.</p>`)}
${plus(`<p>L. 121-4 ajoute : si, après avoir exercé son droit, l’auteur décide de refaire publier l’œuvre, il doit l’offrir <b>par priorité</b> au cessionnaire d’origine, aux conditions d’origine.</p>`)}

<h4>c) Droit de paternité</h4>
<p>Consacré par la <b>Convention de Berne du 9 septembre 1886</b>, administrée par l’<b>OMPI</b> (Organisation mondiale de la propriété intellectuelle). Deux acceptions :</p>
<ul>
<li><b>Positive</b> : exiger que son <b>nom</b>, son prénom, ses <b>titres</b> et <b>qualités</b> soient associés à l’œuvre.</li>
<li><b>Négative</b> : exiger que son nom <b>ne soit pas</b> associé à l’œuvre — choix de l’<b>anonymat</b> ou du <b>pseudonyme</b>.</li>
</ul>
${fix(`<p>Tes notes écrivent « administrée par <i>OMI</i> » : c’est l’<b>OMPI</b> (l’OMI est l’Organisation maritime internationale). Complément : le droit moral figure à l’article <b>6 bis</b> de la Convention, introduit lors de la révision de Rome en 1928.</p>`)}

<h4>d) Droit au respect de l’œuvre</h4>
<p>Il permet à l’auteur d’imposer à <b>tous</b> les utilisateurs, <b>y compris les cessionnaires</b> du droit d’exploitation, le respect de l’<b>intégrité</b> de l’œuvre, et de s’opposer à toute <b>modification non consentie</b>. Trois visages :</p>
<ul>
<li>atteinte à la <b>forme</b> : modification unilatérale d’un texte par l’éditeur, <b>coupes</b> dans un film par une chaîne de télévision, <b>colorisation</b>… <i>Limite</i> : l’éditeur peut corriger les <b>fautes d’orthographe</b>, les <b>coquilles</b>, les <b>dates</b>, les <b>noms</b> de personnes existantes et connues ;</li>
<li>atteinte à l’<b>esprit</b> : une exploitation qui <b>dénature</b> ce que voulait l’auteur (contexte dégradant, détournement publicitaire…) ;</li>
<li>altération du <b>support</b> de l’œuvre (toile, bâtiment, sculpture).</li>
</ul>
<p><b>Atténuations</b> du droit au respect :</p>
<div class="tw"><table class="t">
<tr><th>Œuvres architecturales</th><td>Le droit de l’architecte <b>n’est pas absolu</b> : il doit se concilier avec le <b>droit du propriétaire</b> de l’immeuble (vocation utilitaire du bâtiment). Recherche d’un compromis.</td></tr>
<tr><th>Œuvre collective</th><td>La nécessité de <b>coordonner et harmoniser</b> les contributions limite le droit au respect de chaque contributeur.</td></tr>
<tr><th>Œuvre de fonctionnaire</th><td>${A('L. 121-7-1')} : l’agent ne peut s’opposer à la modification décidée <b>dans l’intérêt du service</b> si elle ne porte pas atteinte à son <b>honneur</b> ou à sa <b>réputation</b>.</td></tr>
<tr><th>Adaptation</th><td>La cession du droit d’adaptation <b>ne vaut pas renonciation</b> au droit au respect, mais l’adaptation au cinéma ou au théâtre implique de reconnaître <b>une certaine liberté à l’adaptateur</b>.</td></tr>
</table></div>
${fix(`<p>Le plan du prof indique « (CPI, art. L. 121-7-1) » pour le droit au respect de l’œuvre. Le fondement général est <b>L. 121-1</b> (« respect de son nom, de sa qualité et de son œuvre ») ; <b>L. 121-7-1</b> ne concerne que les <b>agents publics</b> (c’est une atténuation). Apprends les deux numéros avec leur rôle.</p>`)}
${plus(`<ul>
<li>Architecture : Cass. 1<sup>re</sup> civ., 7 janvier 1992 — la vocation utilitaire du bâtiment interdit à l’architecte d’imposer une <q>intangibilité absolue</q> de son œuvre.</li>
<li>Adaptation : Cass. 1<sup>re</sup> civ., 22 novembre 1966, <i>Dialogues des Carmélites</i> — <q>une certaine liberté</q> doit être reconnue à l’adaptateur.</li>
<li>Cass. 1<sup>re</sup> civ., 5 décembre 2006 : toute modification apportée à l’œuvre, même minime, porte atteinte au droit au respect.</li>
</ul>`)}

<h3>2. Les caractères du droit moral</h3>
<h4>Perpétuel, inaliénable, imprescriptible (${A('L. 121-1')})</h4>
<ul>
<li><b>Perpétuel</b> : il survit à l’auteur et à l’entrée de l’œuvre dans le domaine public.</li>
<li><b>Inaliénable</b> : ni cession, ni <b>renonciation</b> (abandon). Il est <b>indisponible</b>.</li>
<li><b>Imprescriptible</b> : il ne se perd pas par le non-usage.</li>
</ul>
${fix(`<p>Tes notes citent « Art. L. 123-1 » pour ces trois caractères : c’est <b>L. 121-1</b>. L. 123-1 est l’article sur la <b>durée des droits patrimoniaux</b> (70 ans). Erreur de numéro typique dans un QCM.</p>`)}
<h4>L’inaliénabilité est d’ordre public</h4>
<ul>
<li>Le droit moral protège l’auteur <b>même contre lui-même</b>.</li>
<li><b>Prête-plume</b> : l’auteur « de l’ombre » qui a signé un contrat de prête-plume peut <b>revendiquer plus tard sa paternité</b>.</li>
<li>Cour de cassation : <q>l’inaliénabilité du droit au respect de l’œuvre, principe d’ordre public, s’oppose à ce que l’auteur abandonne au cessionnaire, de façon préalable et générale, l’appréciation exclusive des utilisation, diffusion, adaptation, retrait, adjonction et changement auxquels il plairait à ce dernier de procéder</q>.</li>
<li>En revanche, l’auteur peut <b>valider a posteriori</b> une modification précise apportée par le cessionnaire. Cette validation l’empêche d’invoquer ensuite son droit au respect sur ce point.</li>
</ul>
${plus(`<p>La formule vient de Cass. 1<sup>re</sup> civ., <b>28 janvier 2003</b>, affaire <b>« On va fluncher »</b> (la chanson <i>On va s’aimer</i> détournée pour une publicité Flunch), confirmée par Cass. 1<sup>re</sup> civ., 2 avril 2009. Ce qui est interdit, c’est la renonciation <b>préalable et générale</b> ; ce qui est permis, c’est l’accord <b>ponctuel et éclairé</b>.</p>`)}
<h4>Transmission par la seule voie successorale</h4>
<p>Le droit moral ne se transmet <b>qu’à cause de mort</b> : aux héritiers, ou à un tiers désigné par <b>testament</b>. <b>Pas de transmission entre vifs</b> (« sans mort, pas de transmission »).</p>
<p>La jurisprudence lui reconnaît un caractère d’<b>ordre public international</b> : les héritiers d’un réalisateur américain ont pu s’opposer à la diffusion <b>en France</b> de la version <b>colorisée</b> d’un film tourné en noir et blanc.</p>
${fix(`<p>Tes notes : « L’auteur ne peut le transmettre que de son vivant » → c’est l’inverse : il ne se transmet <b>qu’à son décès</b>. Et « film réalisé à l’origine en noir et blanc en France » → le film est <b>américain</b> ; c’est sa <b>diffusion en France</b> (sur La Cinq) qui était en cause.</p>`)}
${plus(`<p>Cass. 1<sup>re</sup> civ., <b>28 mai 1991</b>, <b><i>Huston</i></b> (film <i>Asphalt Jungle</i> / <i>Quand la ville dort</i>, 1950, colorisé par Turner) : en France, <q>aucune atteinte ne peut être portée à l’intégrité d’une œuvre littéraire ou artistique, quel que soit l’État sur le territoire duquel cette œuvre a été divulguée pour la première fois</q> ; la personne qui en est l’auteur du seul fait de sa création est investie du droit moral — règles qualifiées de <b>lois d’application impérative</b>.</p>`)}
<h4>Caractère discrétionnaire</h4>
<ul>
<li>L’<b>auteur</b> exerce son droit moral de façon <b>discrétionnaire</b> : il n’a pas à se justifier, son choix n’est pas soumis à la critique (« pouvoir du monarque absolu »).</li>
<li>Les <b>héritiers</b>, eux, ne sont <b>pas à l’abri de l’abus</b> : leur exercice du droit moral peut être contrôlé en cas d’<b>abus notoire dans l’usage ou le non-usage du droit de divulgation</b> (${A('L. 121-3')}).</li>
</ul>
<h4>Intérêt de ces caractères impératifs</h4>
<p>Protéger l’<b>œuvre</b>, protéger l’<b>auteur</b> (y compris contre lui-même), mais <b>surtout protéger le public</b> dans son intérêt d’accéder à la <b>version originale</b> de l’œuvre.</p>
` },

{ id: 'titu', n: '6', title: 'Titularité et lien de subordination', time: '20 min', html: `
<p class="muted">Section II, § 1 (support « suite et fin », p. 1-3) : auteur salarié, journaliste, logiciel, fonctionnaire.</p>

<h3>Identifier le titulaire</h3>
<p>${A('L. 113-1')} : <q>La qualité d’auteur appartient, sauf preuve contraire, à celui ou à ceux sous le nom de qui l’œuvre est divulguée.</q></p>
<ul>
<li>C’est une <b>présomption simple</b> : elle peut être combattue par la <b>preuve contraire</b>.</li>
<li>Distinguer le <b>titulaire initial</b> (l’auteur, sur la tête de qui naît le droit) du <b>titulaire dérivé</b> (celui qui tient ses droits d’une <b>cession</b>).</li>
</ul>

<h3>A. L’auteur salarié</h3>
<p><b>Pourquoi la question se pose</b> : elle ne se posait pas pour les créations classiques (<b>peinture, sculpture, littérature, musique</b>). Elle se pose depuis que le droit d’auteur s’est étendu aux <b>arts appliqués</b>, aux <b>bases de données</b>, aux <b>logiciels</b>…</p>
<h4>1) Titularité initiale : le salarié</h4>
<ul>
<li>${A('L. 111-1, al. 3')} : l’existence d’un <b>contrat de travail n’emporte pas dérogation</b> à la jouissance du droit reconnu à l’auteur, même si l’œuvre est réalisée <b>en exécution</b> du contrat. La jurisprudence y veille.</li>
<li><b>Pas de cession automatique</b> à l’employeur : l’employeur n’est pas l’auteur. Pour exploiter, il doit conclure un <b>contrat de cession de droits distinct</b> du seul contrat de travail.</li>
</ul>
<h4>2) Les exceptions : cession automatique à l’employeur</h4>
<div class="tw"><table class="t">
<tr><th></th><th>Entreprises de presse</th><th>Logiciels</th></tr>
<tr><th>Texte</th><td>${A('L. 132-36')}</td><td>${A('L. 113-9')}</td></tr>
<tr><th>Règle</th><td>La convention liant le <b>journaliste</b> (contributeur <b>permanent ou occasionnel</b>) et l’employeur emporte, <b>sauf stipulation contraire</b>, <b>cession à titre exclusif</b> des droits d’exploitation des œuvres réalisées dans le cadre du titre de presse, <b>qu’elles soient ou non publiées</b>.</td><td><b>Sauf dispositions statutaires ou stipulations contraires</b>, les <b>droits patrimoniaux</b> sur les logiciels <b>et leur documentation</b>, créés par un ou plusieurs employés <b>dans l’exercice de leurs fonctions ou d’après les instructions de l’employeur</b>, sont <b>dévolus à l’employeur</b>, <b>seul habilité à les exercer</b>.</td></tr>
<tr><th>Contrepartie</th><td>Le <b>salaire</b> est la <b>seule contrepartie</b>, pendant une période fixée par <b>accord d’entreprise</b> ou, à défaut, par tout autre <b>accord collectif</b>.</td><td>Le salaire (pas de rémunération spéciale prévue).</td></tr>
<tr><th>Droit moral</th><td>Reste au journaliste.</td><td>Reste à l’employé, mais <b>restreint</b> (${A('L. 121-7')}).</td></tr>
</table></div>
${key(`<p><b>Logiciel</b> : le droit patrimonial est <b>dévolu</b> à l’employeur ; il <b>ne naît pas sur sa tête</b>. L’employé reste donc <b>titulaire initial</b> du droit d’auteur et conserve le <b>droit moral</b>.</p>`)}
<p><b>Droit moral restreint du salarié sur le logiciel</b> — ${A('L. 121-7')} :</p>
<ul>
<li>le <b>droit au respect</b> ne peut être invoqué que si la modification porte atteinte à son <b>honneur</b> ou à sa <b>réputation</b> (à prouver) ;</li>
<li>le <b>droit de repentir et de retrait</b> est <b>purement et simplement exclu</b>.</li>
</ul>
<p><b>Un droit d’auteur d’un genre particulier</b> : ces restrictions traduisent la spécificité de créateurs mus par le <b>lien de subordination</b>, qui ne disposent pas d’une grande liberté d’<b>initiative</b>.</p>
${trap(`<p>La dévolution de L. 113-9 ne joue que pour les <b>salariés</b> (et agents publics), dans l’exercice des fonctions ou sur instructions. Un <b>prestataire indépendant</b>, un freelance : pas de dévolution — il faut un <b>contrat de cession</b>. Et elle ne vise que les <b>logiciels et leur documentation</b>, pas le site web, les graphismes ou la base de données qui les accompagnent.</p>`)}
${plus(`<p>Depuis une ordonnance du 15 décembre 2021, un article L. 113-9-1 étend la dévolution aux logiciels créés par des <b>personnes accueillies par convention</b> (stagiaires, doctorants…) qui perçoivent une contrepartie et sont placées sous l’autorité d’un responsable de la structure. Les dispositions sur les journalistes viennent de la loi du 12 juin 2009.</p>`)}

<h3>B. L’auteur fonctionnaire</h3>
<h4>Situation antérieure</h4>
<p>Les dispositions de la PI <b>n’étaient pas applicables aux fonctionnaires</b>. <b>Avis du Conseil d’État du 21 novembre 1972, n° 309721, <i>OFRATEME</i></b> : l’Administration est investie des droits de l’auteur sur les œuvres <q>dont la création fait l’objet même du service</q>. En acceptant leurs fonctions, les fonctionnaires ont <b>mis leurs droits à la disposition du service</b> dans la mesure nécessaire à l’exercice de ces fonctions. L’avis semblait donner à l’Administration la <b>titularité initiale</b>.</p>
<h4>Situation actuelle</h4>
<ul>
<li><b>Titularité</b> — ${A('L. 111-1')} : le fonctionnaire créateur d’une œuvre dispose <b>seul</b> du droit d’auteur, qu’il soit agent de l’<b>État</b>, d’une <b>collectivité territoriale</b>, d’un <b>établissement public à caractère administratif</b>, d’une <b>autorité administrative indépendante</b> dotée de la personnalité morale ou de la <b>Banque de France</b>.</li>
<li><b>Droit patrimonial</b> — ${A('L. 131-3-1')} : <q>Dans la mesure <b>strictement nécessaire</b> à l’accomplissement d’une <b>mission de service public</b>, le droit d’exploitation d’une œuvre créée par un agent de l’État dans l’exercice de ses fonctions ou d’après les instructions reçues est, <b>dès la création</b>, cédé <b>de plein droit</b> à l’État.</q> La cession automatique est <b>limitée à la mission de service public</b> : elle ne couvre <b>pas les exploitations commerciales</b>.</li>
<li><b>Restrictions du droit moral</b> — ${A('L. 121-7-1')} : l’agent ne peut
  <ul><li>(<b>respect</b>) s’opposer à la modification décidée <b>dans l’intérêt du service</b> par l’autorité hiérarchique, si elle ne porte pas atteinte à son <b>honneur</b> ou à sa <b>réputation</b> ;</li>
  <li>(<b>repentir et retrait</b>) exercer ce droit, <b>sauf accord de l’autorité hiérarchique</b>.</li></ul></li>
<li><b>Exception</b> : ni la cession automatique ni les restrictions du droit moral ne s’appliquent aux agents dont la divulgation des œuvres <b>n’est soumise à aucun contrôle préalable de l’autorité hiérarchique</b>, en vertu de leur statut ou des règles régissant leurs fonctions. Exemple : les <b>enseignants-chercheurs</b>.</li>
</ul>
${tip(`<p>Compare les deux « repentir et retrait » restreints : <b>logiciel (L. 121-7)</b> → <b>exclu</b>, point. <b>Fonctionnaire (L. 121-7-1)</b> → possible <b>avec l’accord</b> de l’autorité hiérarchique. Le prof peut jouer sur cette nuance.</p>`)}
${plus(`<p>Le régime actuel vient de la loi <b>DADVSI du 1<sup>er</sup> août 2006</b>. Pour l’<b>exploitation commerciale</b>, l’État ne dispose envers son agent que d’un <b>droit de préférence</b> (L. 131-3-1, al. 2). L’article L. 131-3-2 étend ce régime aux collectivités territoriales, établissements publics administratifs, AAI et Banque de France.</p>`)}
` },

{ id: 'plural', n: '7', title: 'Titularité et pluralité d’auteurs', time: '20 min', html: `
<p class="muted">Section II, § 2 (support « suite et fin », p. 4-5) : collaboration, collective, composite — ${A('L. 113-2')}.</p>

<h3>A. L’œuvre de collaboration</h3>
<p>${A('L. 113-2, al. 1')} : œuvre <q>à la création de laquelle ont concouru plusieurs personnes physiques</q>. Tous ceux qui ont contribué à la création sont <b>coauteurs</b>.</p>
<p><b>Exemple type : l’œuvre audiovisuelle</b> (film, série). La loi (${A('L. 113-7')}) considère comme coauteurs : le <b>réalisateur</b>, le <b>scénariste</b>, l’<b>adaptateur</b>, le <b>dialoguiste</b> et le <b>compositeur</b> (de la musique <b>spécialement composée</b> pour le film). <b>Liste non limitative</b> : tout autre intervenant peut revendiquer la qualité de coauteur en prouvant sa <b>contribution créative</b>.</p>
<p><b>Copropriété</b> — ${A('L. 113-3')} : l’œuvre de collaboration est <q>la propriété commune des coauteurs</q>, qui <q>doivent exercer leurs droits d’un commun accord</q>. En plus de sa part de cette propriété collective, <b>chaque coauteur a un droit d’auteur propre sur sa seule contribution</b> (le scénariste sur le scénario, le compositeur sur la musique…).</p>
<p><b>Présomption de cession au producteur</b> — ${A('L. 132-24')} : par dérogation à l’exigence de délimitation précise des droits cédés (interprétation stricte des contrats d’exploitation), <q>le contrat qui lie le producteur aux auteurs d’une œuvre audiovisuelle, <b>autres que l’auteur de la composition musicale avec ou sans paroles</b>, emporte, <b>sauf clause contraire</b>, cession au profit du producteur des droits exclusifs d’exploitation de l’œuvre audiovisuelle</q>.</p>
${fix(`<p>Le support cite « l’article L. 131-1 » pour l’exigence de détermination du périmètre des droits cédés. Dans le code, cette exigence (mention distincte de chaque droit cédé ; domaine d’exploitation délimité quant à son <b>étendue</b>, sa <b>destination</b>, le <b>lieu</b> et la <b>durée</b>) figure à l’article <b>L. 131-3</b> ; L. 131-1 pose, lui, la nullité de la <b>cession globale des œuvres futures</b>. Retiens le principe ; si tu cites un numéro, tu peux écrire « art. L. 131-1 et s. ».</p>`)}
${trap(`<p>La présomption de L. 132-24 <b>exclut le compositeur</b> de la musique (ses droits sont gérés collectivement, par la SACEM) et ne joue que <b>sauf clause contraire</b>. Autre piège : dans une collaboration, « plusieurs personnes <b>physiques</b> » — une société ne peut pas être coauteur.</p>`)}
${plus(`<p>L. 113-3 ajoute : en cas de <b>désaccord</b>, il appartient à la <b>juridiction civile</b> de statuer ; et lorsque les contributions relèvent de <b>genres différents</b>, chacun peut exploiter séparément la sienne, <b>sans porter préjudice à l’exploitation de l’œuvre commune</b>. Durée : 70 ans après le décès du <b>dernier vivant</b> des collaborateurs (L. 123-2).</p>`)}

<h3>B. L’œuvre collective</h3>
<p>${A('L. 113-2, al. 3')} : <q>Est dite collective l’œuvre créée sur l’<b>initiative</b> d’une personne physique ou morale qui l’<b>édite</b>, la <b>publie</b> et la <b>divulgue</b> sous sa <b>direction</b> et son <b>nom</b> et dans laquelle la contribution personnelle des divers auteurs participant à son élaboration <b>se fond dans l’ensemble</b> en vue duquel elle est conçue, <b>sans qu’il soit possible d’attribuer à chacun d’eux un droit distinct sur l’ensemble réalisé</b>.</q></p>
<p><b>Deux caractéristiques</b> :</p>
<ul>
<li><b>initiative et direction</b> : le rôle du <b>coordinateur</b>, personne physique ou morale ;</li>
<li><b>fusion</b> des contributions individuelles en un seul ensemble <b>indistinct</b>.</li>
</ul>
<p><b>Terrain d’élection</b> : <b>dictionnaires, encyclopédies, journaux</b> — œuvres pour lesquelles la propriété commune est matériellement impossible (contributeurs nombreux, concertation très faible).</p>
<p><b>Titularité</b> — ${A('L. 113-5')} : <q>L’œuvre collective est, sauf preuve contraire, la propriété de la personne physique ou morale sous le nom de laquelle elle est divulguée. <b>Cette personne est investie des droits de l’auteur.</b></q></p>
<ul>
<li>Ce régime <b>avantage les entreprises</b>, qui y recourent au-delà de son champ d’origine — un <b>dévoiement</b>. Elles se voient reconnaître <b>dès l’origine</b> les droits patrimoniaux sur l’ensemble, ce qui les <b>dispense de tout contrat de cession</b>.</li>
<li>Mieux : elles se voient aussi attribuer le <b>droit moral</b> — <b>Cass. 1<sup>re</sup> civ., 22 mars 2012, n° 11-10.132</b>.</li>
<li>C’est <b>la seule hypothèse où le droit d’auteur ne naît pas sur la tête de l’auteur, mais sur celle de l’investisseur</b> — un <b>non-sens</b> au regard de la définition de l’œuvre de l’esprit.</li>
</ul>

<h3>C. L’œuvre composite</h3>
<p>${A('L. 113-2, al. 2')} : <q>l’œuvre nouvelle à laquelle est incorporée une œuvre préexistante <b>sans la collaboration de l’auteur de cette dernière</b></q>. La doctrine parle d’<b>œuvre dérivée</b>.</p>
<ul>
<li>Ce n’est pas vraiment une œuvre « à plusieurs » : c’est une <b>succession dans le temps</b> de processus créatifs d’auteurs différents. La dernière œuvre <b>se greffe</b> sur la précédente.</li>
<li>L’œuvre composite est la <b>propriété exclusive du dernier auteur</b>, qui en est le <b>seul auteur</b>.</li>
<li><b>Mais</b> il doit <b>impérativement obtenir au préalable l’autorisation</b> de l’auteur de l’œuvre première dont il reprend des <b>éléments formels</b>. À défaut, il ne peut exercer ses droits et s’expose à des poursuites (plagiat / contrefaçon).</li>
<li><b>Champ de prédilection</b> : la <b>production musicale</b> (sample, remix, reprise arrangée) ; aussi traduction, adaptation, anthologie.</li>
</ul>
${plus(`<p>${A('L. 113-4')} : <q>L’œuvre composite est la propriété de l’auteur qui l’a réalisée, sous réserve des droits de l’auteur de l’œuvre préexistante.</q> Si l’œuvre première est tombée dans le <b>domaine public</b>, aucune autorisation patrimoniale n’est requise — mais le <b>droit moral</b> de l’auteur d’origine (perpétuel) doit toujours être respecté.</p>`)}

<h3>Le tableau qui tombe</h3>
<div class="tw"><table class="t">
<tr><th></th><th>Collaboration</th><th>Collective</th><th>Composite</th></tr>
<tr><th>Critère</th><td>Concours de plusieurs <b>personnes physiques</b>, concertation</td><td><b>Initiative et direction</b> d’une personne (physique ou <b>morale</b>) ; contributions <b>fondues</b></td><td>Incorporation d’une œuvre <b>préexistante</b>, <b>sans collaboration</b> de son auteur</td></tr>
<tr><th>Titulaire</th><td>Les <b>coauteurs</b>, en propriété commune</td><td>La personne <b>sous le nom de laquelle</b> elle est divulguée</td><td>Le <b>dernier auteur</b>, seul</td></tr>
<tr><th>Exercice</th><td><b>Commun accord</b> (+ droit propre sur sa contribution)</td><td>Le promoteur seul, y compris le <b>droit moral</b> (2012)</td><td>Sous réserve de l’<b>autorisation préalable</b> du premier auteur</td></tr>
<tr><th>Textes</th><td>L. 113-2 al. 1, L. 113-3, L. 113-7, L. 132-24</td><td>L. 113-2 al. 3, L. 113-5</td><td>L. 113-2 al. 2, L. 113-4</td></tr>
<tr><th>Exemples</th><td>Film, série, chanson (paroles + musique), BD à deux</td><td>Dictionnaire, encyclopédie, journal</td><td>Traduction, adaptation, sample musical</td></tr>
</table></div>
` }
];
