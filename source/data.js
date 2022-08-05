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
    type_of_license: [
        'perpetual',
        'worldwide',
        'non-exclusive',
        'no-charge',
        'royalty-free',
        'irrevocable',
    ],
    permissions: [
        'reproduce',
        'prepare Derivative Works of',
        'publicly display',
        'publicly perform',
        'sublicense',
        'distribute',
    ],
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
}

module.exports = data