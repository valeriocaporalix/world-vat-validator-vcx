//EU Countries
const austria = /(AT)U[0-9]{8}/;
const belgium = /(BE)0[0-9]{9}/;
const bulgaria = /(BG)[0-9]{9,10}/;
const croatia = /(HR)[0-9]{11}/;
const cyprus = /(CY)[0-9]{8}[A-Z]/;
const czechRepublic = /(CZ)[0-9]{8,10}/;
const denmark = /(DK)[0-9]{8}/;
const estonia = /(EE)?[0-9]{9}/;
const finland = /(FI)[0-9]{8}/;
const france = /(FR)[0-9A-Z]{2}[0-9]{9}/;
const germany = /(DE)[0-9]{9}/;
const greece = /(EL|GR)?[0-9]{9}/;
const hungary = /(HU)[0-9]{8}/;
const ireland = /((IE)?[0-9]{7}[A-Z]{1,2})|((IE)?[0-9][A-Z][0-9]{5}[A-Z])/;
const italy = /(IT)?[0-9]{11}/;
const latvia = /(LV)?[0-9]{11}/;
const lithuania = /(LT)?([0-9]{9}|[0-9]{12})/;
const luxembourg = /(LU)?[0-9]{8}/;
const malta = /(MT)?[0-9]{8}/;
const netherlands = /(NL)[0-9]{9}B[0-9]{2}/;
const poland = /(PL)?[0-9]{10}/;
const portugal = /(PT)?[0-9]{9}/;
const romania = /(RO)?[0-9]{2,10}/;
const slovakia = /(SK)[0-9]{10}/;
const slovenia = /(SI)[0-9]{8}/;
const spain = /(ES)[0-9A-Z][0-9]{7}[09-A-Z]/;
const sweden = /(SE)?[0-9]{12}/;
const europeanCompany = /(EU)[0-9A-Z]{9}/;

// non-EU Countries
const albania = /(J|K|L)[0-9A-Z]{8}[A-Z]/;
const northMacedonia = /(MK)[0-9]{13}/;
const australia = /(AU)?[0-9]{11}/;
const belarus = /(BY)?[0-9]{9}/;
const canada = /(CA)?[0-9A-Z]{9}/;
const iceland = /(IS)?[0-9A-Z]{5,6}/;
const india = /(IN)?[0-9]{15}/;
const indonesia = /(ID)?[0-9]{15}/;
const israel = /(IL)?[0-9]{9}/;
const kazakhstan = /(KZ)?[0-9]{12}/;
const newZeland = /(NZ)?[0-9]{9}/;
const nigeria = /(NG)?[0-9]{8}-[0-9]{4}/;
const norway = /(NO)?[0-9]{9}(MVA)?/;
const philippines = /(PH)?[0-9]{12}/;
const russia = /(RU)?[0-9]{10,12}/;
const sanMarino = /(SM)?[0-9]{5}/;
const saudiArabia = /(SA)?[0-9]{15}/;
const serbia = /(RS)?[0-9]{9}/;
const switzerland =
  /(CHE)(-)?(([0-9]{9})|([0-9]{3}.[0-9]{3}.[0-9]{3}))\s?(MWST|IVA|TVA)/;
const turkey = /(TR)?[0-9]{10}/;
const ukraine = /(UA)?[0-9]{12}/;
const unitedKindom = /(GB|XI)([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})/;
const uzbekistan = /(UZ)?[0-9]{9}/;

// Latin American Countries
const argentina = /(AR)?[0-9]{11}/;
const bolivia = /(BO)?[0-9]{7}/;
const brazil =
  /(BR)?(([0-9]{14})|([0-9]{2}.[0-9]{3}.[0-9]{3}[/][0-9]{4}-[0-9]{2})|([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))/;
const chile = /(CL)?[0-9]{8}-[0-9K]/;
const colombia = /(CO)?[0-9]{10}/;
const costaRica = /(CR)?[0-9]{9,12}/;
const ecuador = /(EC)?[0-9]{13}/;
const elSalvador = /(SV)?(([0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9])|([0-9]{14}))/;
const guatemala = /(GT)?(([0-9]{7}-[0-9])|([0-9]{8}))/;
const honduras = /(HN)?[0-9A-Z]{5,15}/;
const mexico =
  /(MX)?(([0-9A-Z]{4}[0-9]{6}[0-9A-Z]{3})|([0-9A-Z]{3}[0-9]{6}[0-9A-Z]{3}))/;
const nicaragua = /(NI)?[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]/;
const panama = /(PA)?[0-9A-Z]{5,15}/;
const paraguay = /(PY)?[0-9]{6,8}-[0-9]/;
const peru = /(PE)?[0-9]{11}/;
const dominicanRepublic =
  /(DO)?(([0-9]{9,11})|([0-9]{3}-[0-9]{7}-[0-9])|([0-9]-[0-9]{2}-[0-9]{5}-[0-9]))/;
const uruguay = /(UY)?[0-9]{12}/;
const venezuela = /(VE)?(((J|G|V|E)-[0-9]{9})|((J|G|V|E)-[0-9]{8}-[0-9]))/;

module.exports = {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czechRepublic,
  denmark,
  estonia,
  finland,
  france,
  germany,
  greece,
  hungary,
  ireland,
  italy,
  latvia,
  lithuania,
  luxembourg,
  malta,
  netherlands,
  poland,
  portugal,
  romania,
  slovakia,
  slovenia,
  spain,
  sweden,
  albania,
  northMacedonia,
  australia,
  belarus,
  canada,
  iceland,
  india,
  indonesia,
  israel,
  kazakhstan,
  newZeland,
  nigeria,
  norway,
  philippines,
  russia,
  sanMarino,
  saudiArabia,
  serbia,
  switzerland,
  turkey,
  ukraine,
  unitedKindom,
  uzbekistan,
  argentina,
  bolivia,
  brazil,
  chile,
  colombia,
  costaRica,
  ecuador,
  elSalvador,
  guatemala,
  honduras,
  mexico,
  nicaragua,
  panama,
  paraguay,
  peru,
  dominicanRepublic,
  uruguay,
  venezuela,
  europeanCompany,
};
