const forest_area = 0.5
/**
 * @typedef {{term:string, definition: string, synonyms: string[]}} Definition
 */
// { term: '', definition: ``, synonyms: [] },
/**
 * @type {Definition[]}
 */
const definitions = [
    { term: 'License', definition: `the terms and conditions for use, reproduction, and distribution as defined by
    Sections 1 through 9 of this document.`, synonyms: [] },
    { term: 'Licensor', definition: `the copyright owner or entity authorized by the copyright owner that is
    granting the License.`, synonyms: [] },
    { term: 'Legal Entity', definition: `the union of the acting entity and all other entities that control, are
    controlled by, or are under common control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the direction or management of such
    entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.`, synonyms: [] },
    { term: 'You', definition: `an individual or Legal Entity exercising permissions granted by this
    License.`, synonyms: [ 'Your' ] },
    { term: 'Source', definition: `the preferred form for making modifications, including but not limited to
    the software source code, documentation source, and configuration files.`, synonyms: [] },
    { term: 'Object', definition: `any form resulting from mechanical transformation or translation of a
    Source form, including but not limited to compiled object code, generated documentation, and
    conversions to other media types.`, synonyms: [] },
    { term: 'Work', definition: `the work of authorship, whether in Source or Object form, made available under the
    License, as indicated by a copyright notice that is included in or attached to the work (an example
    is provided in the Appendix below).`, synonyms: [] },
    { term: 'Derivative Works', definition: `any work, whether in Source or Object form, that is based on (or
        derived from) the Work and for which the editorial revisions, annotations, elaborations, or other
        modifications represent, as a whole, an original work of authorship. For the purposes of this
        License, Derivative Works must not include works that remain separable from, or merely link (or
        bind by name) to the interfaces of, the Work and Derivative Works thereof.`, synonyms: [] },
    { term: 'Contribution', definition: `any work of authorship, including the original version of the Work and any
    modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted
    to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity
    authorized to submit on behalf of the copyright owner. For the purposes of this definition,
    "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or
    its representatives, including but not limited to communication on electronic mailing lists, source
    code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor
    for the purpose of discussing and improving the Work, but excluding communication that is
    conspicuously marked or otherwise designated in writing by the copyright owner as "Not a
    Contribution."`, synonyms: [] },
    { term: 'Contributor', definition: `Licensor and any individual or Legal Entity on behalf of whom a
    Contribution has been received by Licensor and subsequently incorporated within the Work.`, synonyms: [] },
    { term: 'Forest', definition: `${forest_area} or more hectares of trees that were either planted more than 50 years ago
    or were not planted by humans or human made equipment.`, synonyms: [ 'Forests' ] },
    { term: 'Deforestation', definition: `the clearing, burning or destruction of ${forest_area} or more hectares of forests
    within a 1 year period.`, synonyms: [] },
]

/**
 * @typedef {{text: string, items?: Item[], bulleted?: boolean}} Item
 */

/**
 * @param {string[]} points
 * @returns {Item[]}
 */
const bullet = points => points.map(text => ({text, bulleted: true}))
/**
 * @type {Item[]}
 */
const terms_of_redistribution = [
    { text: `You must give any other recipients of the Work or Derivative Works a copy of this License` },
    { text: `You must cause any modified files to carry prominent notices stating that You changed the
    files` },
    { text: `You must retain, in the Source form of any Derivative Works that You distribute, all copyright,
    patent, trademark, and attribution notices from the Source form of the Work, excluding those
    notices that do not pertain to any part of the Derivative Works.` },
    { text: `Neither the name of the copyright holder nor the names of its contributors may be used to endorse
    or promote products derived from this software without specific prior written permission` },
    { text: `This software must not be used by any organisation, website, product, or service that`, items: [
        { text: `promotes, lobbies for or derives a majority of income from`, items: [
            { text: `**abuses of human rights**`, items: bullet([
                'human trafficking',
                'sex trafficking',
                'slavery or indentured servitude',
                'discrimination based on age, gender, gender identity, race, sexuality, religion, nationality',
                'hate speech',
            ]) },
            { text: `**environmental destruction**`, items: bullet([
                'the extraction or sale of fossil fuels',
                `the destruction of habitats for threatened or endangered species,
                including through deforestation or burning of forests`,
                'the abuse, inhumane killing or neglect of animals under human control',
                'industrial processes that generate waste products that threaten life',
            ]) },
            { text: `**conflict and war**`, items: bullet([
                'warfare',
                'war crimes',
                'weapons manufacturing',
                'unprovoked violence',
            ]) },
            { text: `**addictive or destructive products and services**`, items: bullet([
                'gambling',
                'tabaco',
                'products that encourage adversely addictive behaviours',
            ]) },
        ] },
        { text: `dissuades, lobbies against, or derives a majority of income from actions that
        discourage or frustrate`, items: bullet([
            'peace',
            `access to the rights set out in the
            [Universal Declaration of Human Rights](./documents/UDHR.md) and the
            [Convention on the Rights of the Child](./documents/CRC.md)`,
            'peaceful assembly and association (including worker associations)',
            'a sustainable environment',
            'democratic processes',
        ]) },
    ] },
    { text: `If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative
    Works that You distribute must include a readable copy of the attribution notices contained
    within such NOTICE file, excluding those notices that do not pertain to any part of the
    Derivative Works, in at least one of the following places: within a NOTICE text file
    distributed as part of the Derivative Works; within the Source form or documentation, if
    provided along with the Derivative Works; or, within a display generated by the Derivative
    Works, if and wherever such third-party notices normally appear. The contents of the NOTICE
    file are for informational purposes only and do not modify the License. You may add Your own
    attribution notices within Derivative Works that You distribute, alongside or as an addendum to
    the NOTICE text from the Work, provided that such additional attribution notices cannot be
    construed as modifying the License.` },
]

const data = {
    license_name: 'Do No Harm',
    version: {
        major: 0,
        minor: 3,
        month: 'July',
        year: 2022,
    },
    repo_url: 'https://github.com/raisely/NoHarm',
    actions: [
        'use',
        'reproduction',
        'distribution',
    ],
    type_of_license: {
        general: [
            'perpetual',
            'worldwide',
            'non-exclusive',
            'no-charge',
            'royalty-free',
            'irrevocable',
        ],
        patent: [
            'perpetual',
            'worldwide',
            'non-exclusive',
            'no-charge',
            'royalty-free',
            'irrevocable (except as stated in this section)',
        ],
    },
    permissions: {
        general:[
            'reproduce',
            'prepare Derivative Works of',
            'publicly display',
            'publicly perform',
            'sublicense',
            'distribute',
        ],
        patent: [
            'make',
            'have made',
            'use',
            'offer to sell',
            'sell',
            'import',
            'otherwise transfer',
        ],
    },
    warranties: {
        conditions: [
            'title',
            'non-infringement',
            'merchantability',
            'fitness for a particular purpose',
        ],
        damages: [
            'direct',
            'indirect',
            'special',
            'incidental',
            'consequential',
        ],
        assurances: [
            'acceptance of support',
            'warranty',
            'indemnity',
            'other liability obligations',
            'rights consistent with this License',
        ],
    },
    definitions,
    terms_of_redistribution,
}

module.exports = data