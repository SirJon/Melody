import { getNode } from "../../../utils/getNode/getNode";
import { HTMLpopupBuy } from "../HTMLpopupBuy";
import { HTMLpopupPartner } from "../HTMLpopupPartner"
import { HTMLpopupCertificate } from "../HTMLpopupCertificate";
import { HTMLpopupEquipment } from "../HTMLpopupEquipment";
import { HTMLpopupPhoto } from "../HTMLpopupPhoto";
import { HTMLpopupVideo } from "../HTMLpopupVideo";
import { HTMLpopupUserAgreement } from "../HTMLpopupUserAgreement";
import { HTMLpopupPrivacyPolicy } from "../HTMLpopupPrivacyPolicy";

export const nodePopupBuy = getNode(HTMLpopupBuy);
export const nodePopupPartner = getNode(HTMLpopupPartner);
export const nodePopupCertificate = getNode(HTMLpopupCertificate);
export const nodePopupEquipment = getNode(HTMLpopupEquipment);
export const nodePopupGalary = getNode(HTMLpopupPhoto);
export const nodePopupVideo = getNode(HTMLpopupVideo);
export const nodePopupUserAgreement = getNode(HTMLpopupUserAgreement);
export const nodePopupPrivacyPolicy = getNode(HTMLpopupPrivacyPolicy);