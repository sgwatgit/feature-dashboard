/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./FeatureDashboard.Web/Pages/ApplicationEnvironments/application-environments.ts":
/*!****************************************************************************************!*\
  !*** ./FeatureDashboard.Web/Pages/ApplicationEnvironments/application-environments.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function run() {
  var log = function log(msg) {
    return console.log("This is from application-environments.ts : ".concat(msg));
  };

  log('test');
}

function ready($) {}

exports.applicationEnvironmentsModule = {
  run: run,
  ready: ready
};

/***/ }),

/***/ "./FeatureDashboard.Web/Pages/Applications/applications.ts":
/*!*****************************************************************!*\
  !*** ./FeatureDashboard.Web/Pages/Applications/applications.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function run() {
  console.log('in-run');
}

function ready($) {
  if (!$) {
    return;
  }

  var users = $('.users');

  if (!users) {
    return;
  }

  users.css('background-color', 'red');
}

exports.applicationsModule = {
  run: run,
  ready: ready
};

/***/ }),

/***/ "./FeatureDashboard.Web/app.ts":
/*!*************************************!*\
  !*** ./FeatureDashboard.Web/app.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./styles.scss */ "./FeatureDashboard.Web/styles.scss");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! ./font-awesome-registration */ "./FeatureDashboard.Web/font-awesome-registration.ts");

var application_environments_1 = __webpack_require__(/*! ./Pages/ApplicationEnvironments/application-environments */ "./FeatureDashboard.Web/Pages/ApplicationEnvironments/application-environments.ts");

var applications_1 = __webpack_require__(/*! ./Pages/Applications/applications */ "./FeatureDashboard.Web/Pages/Applications/applications.ts");

application_environments_1.applicationEnvironmentsModule.run();
applications_1.applicationsModule.run();
$(function () {
  application_environments_1.applicationEnvironmentsModule.ready($);
  applications_1.applicationsModule.ready($);
});

/***/ }),

/***/ "./FeatureDashboard.Web/font-awesome-registration.ts":
/*!***********************************************************!*\
  !*** ./FeatureDashboard.Web/font-awesome-registration.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var fontawesome_1 = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");

var _1 = __webpack_require__(/*! @fortawesome/fontawesome-pro-regular/ */ "./node_modules/@fortawesome/fontawesome-pro-regular/index.es.js");

fontawesome_1.default.library.add(_1.faPlus, _1.faCircle);

/***/ }),

/***/ "./FeatureDashboard.Web/styles.scss":
/*!******************************************!*\
  !*** ./FeatureDashboard.Web/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-pro-regular/index.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-pro-regular/index.es.js ***!
  \***********************************************************************/
/*! exports provided: prefix, faAddressBook, faAddressCard, faAdjust, faAlarmClock, faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAllergies, faAmbulance, faAmericanSignLanguageInterpreting, faAnchor, faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faArchive, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faArrowAltDown, faArrowAltFromBottom, faArrowAltFromLeft, faArrowAltFromRight, faArrowAltFromTop, faArrowAltLeft, faArrowAltRight, faArrowAltSquareDown, faArrowAltSquareLeft, faArrowAltSquareRight, faArrowAltSquareUp, faArrowAltToBottom, faArrowAltToLeft, faArrowAltToRight, faArrowAltToTop, faArrowAltUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowDown, faArrowFromBottom, faArrowFromLeft, faArrowFromRight, faArrowFromTop, faArrowLeft, faArrowRight, faArrowSquareDown, faArrowSquareLeft, faArrowSquareRight, faArrowSquareUp, faArrowToBottom, faArrowToLeft, faArrowToRight, faArrowToTop, faArrowUp, faArrows, faArrowsAlt, faArrowsAltH, faArrowsAltV, faArrowsH, faArrowsV, faAssistiveListeningSystems, faAsterisk, faAt, faAudioDescription, faBackward, faBadge, faBadgeCheck, faBalanceScale, faBan, faBandAid, faBarcode, faBarcodeAlt, faBarcodeRead, faBarcodeScan, faBars, faBaseball, faBaseballBall, faBasketballBall, faBasketballHoop, faBath, faBatteryBolt, faBatteryEmpty, faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatterySlash, faBatteryThreeQuarters, faBed, faBeer, faBell, faBellSlash, faBicycle, faBinoculars, faBirthdayCake, faBlind, faBold, faBolt, faBomb, faBook, faBookmark, faBowlingBall, faBowlingPins, faBox, faBoxCheck, faBoxes, faBoxingGlove, faBraille, faBriefcase, faBriefcaseMedical, faBrowser, faBug, faBuilding, faBullhorn, faBullseye, faBurn, faBus, faCalculator, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarEdit, faCalendarExclamation, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCamera, faCameraAlt, faCameraRetro, faCapsules, faCar, faCaretCircleDown, faCaretCircleLeft, faCaretCircleRight, faCaretCircleUp, faCaretDown, faCaretLeft, faCaretRight, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faCaretUp, faCartArrowDown, faCartPlus, faCertificate, faChartArea, faChartBar, faChartLine, faChartPie, faCheck, faCheckCircle, faCheckSquare, faChess, faChessBishop, faChessBishopAlt, faChessBoard, faChessClock, faChessClockAlt, faChessKing, faChessKingAlt, faChessKnight, faChessKnightAlt, faChessPawn, faChessPawnAlt, faChessQueen, faChessQueenAlt, faChessRook, faChessRookAlt, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faChevronDoubleDown, faChevronDoubleLeft, faChevronDoubleRight, faChevronDoubleUp, faChevronDown, faChevronLeft, faChevronRight, faChevronSquareDown, faChevronSquareLeft, faChevronSquareRight, faChevronSquareUp, faChevronUp, faChild, faCircle, faCircleNotch, faClipboard, faClipboardCheck, faClipboardList, faClock, faClone, faClosedCaptioning, faCloud, faCloudDownload, faCloudDownloadAlt, faCloudUpload, faCloudUploadAlt, faClub, faCode, faCodeBranch, faCodeCommit, faCodeMerge, faCoffee, faCog, faCogs, faColumns, faComment, faCommentAlt, faComments, faCompass, faCompress, faCompressAlt, faCompressWide, faConveyorBelt, faConveyorBeltAlt, faCopy, faCopyright, faCreditCard, faCreditCardBlank, faCreditCardFront, faCricket, faCrop, faCrosshairs, faCube, faCubes, faCurling, faCut, faDatabase, faDeaf, faDesktop, faDesktopAlt, faDiagnoses, faDiamond, faDna, faDollarSign, faDolly, faDollyEmpty, faDollyFlatbed, faDollyFlatbedAlt, faDollyFlatbedEmpty, faDotCircle, faDownload, faDumbbell, faEdit, faEject, faEllipsisH, faEllipsisHAlt, faEllipsisV, faEllipsisVAlt, faEnvelope, faEnvelopeOpen, faEnvelopeSquare, faEraser, faEuroSign, faExchange, faExchangeAlt, faExclamation, faExclamationCircle, faExclamationSquare, faExclamationTriangle, faExpand, faExpandAlt, faExpandArrows, faExpandArrowsAlt, faExpandWide, faExternalLink, faExternalLinkAlt, faExternalLinkSquare, faExternalLinkSquareAlt, faEye, faEyeDropper, faEyeSlash, faFastBackward, faFastForward, faFax, faFemale, faFieldHockey, faFighterJet, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCheck, faFileCode, faFileEdit, faFileExcel, faFileExclamation, faFileImage, faFileMedical, faFileMedicalAlt, faFileMinus, faFilePdf, faFilePlus, faFilePowerpoint, faFileTimes, faFileVideo, faFileWord, faFilm, faFilmAlt, faFilter, faFire, faFireExtinguisher, faFirstAid, faFlag, faFlagCheckered, faFlask, faFolder, faFolderOpen, faFont, faFootballBall, faFootballHelmet, faForklift, faForward, faFrown, faFutbol, faGamepad, faGavel, faGem, faGenderless, faGift, faGlassMartini, faGlobe, faGolfBall, faGolfClub, faGraduationCap, faHSquare, faH1, faH2, faH3, faHandHoldingBox, faHandLizard, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandReceiving, faHandRock, faHandScissors, faHandSpock, faHandshake, faHashtag, faHdd, faHeading, faHeadphones, faHeart, faHeartbeat, faHexagon, faHistory, faHockeyPuck, faHockeySticks, faHome, faHospital, faHospitalAlt, faHospitalSymbol, faHourglass, faHourglassEnd, faHourglassHalf, faHourglassStart, faICursor, faIdBadge, faIdCard, faIdCardAlt, faImage, faImages, faInbox, faInboxIn, faInboxOut, faIndent, faIndustry, faIndustryAlt, faInfo, faInfoCircle, faInfoSquare, faInventory, faItalic, faJackOLantern, faKey, faKeyboard, faLanguage, faLaptop, faLeaf, faLemon, faLevelDown, faLevelDownAlt, faLevelUp, faLevelUpAlt, faLifeRing, faLightbulb, faLink, faLiraSign, faList, faListAlt, faListOl, faListUl, faLocationArrow, faLock, faLockAlt, faLockOpen, faLockOpenAlt, faLongArrowAltDown, faLongArrowAltLeft, faLongArrowAltRight, faLongArrowAltUp, faLongArrowDown, faLongArrowLeft, faLongArrowRight, faLongArrowUp, faLowVision, faLuchador, faMagic, faMagnet, faMale, faMap, faMapMarker, faMapMarkerAlt, faMapPin, faMapSigns, faMars, faMarsDouble, faMarsStroke, faMarsStrokeH, faMarsStrokeV, faMedkit, faMeh, faMercury, faMicrochip, faMicrophone, faMicrophoneAlt, faMicrophoneSlash, faMinus, faMinusCircle, faMinusHexagon, faMinusOctagon, faMinusSquare, faMobile, faMobileAlt, faMobileAndroid, faMobileAndroidAlt, faMoneyBill, faMoneyBillAlt, faMoon, faMotorcycle, faMousePointer, faMusic, faNeuter, faNewspaper, faNotesMedical, faObjectGroup, faObjectUngroup, faOctagon, faOutdent, faPaintBrush, faPallet, faPalletAlt, faPaperPlane, faPaperclip, faParagraph, faPaste, faPause, faPauseCircle, faPaw, faPen, faPenAlt, faPenSquare, faPencil, faPencilAlt, faPennant, faPercent, faPhone, faPhoneSlash, faPhoneSquare, faPhoneVolume, faPills, faPlane, faPlaneAlt, faPlay, faPlayCircle, faPlug, faPlus, faPlusCircle, faPlusHexagon, faPlusOctagon, faPlusSquare, faPodcast, faPoo, faPortrait, faPoundSign, faPowerOff, faPrescriptionBottle, faPrescriptionBottleAlt, faPrint, faProcedures, faPuzzlePiece, faQrcode, faQuestion, faQuestionCircle, faQuestionSquare, faQuidditch, faQuoteLeft, faQuoteRight, faRacquet, faRandom, faRectangleLandscape, faRectanglePortrait, faRectangleWide, faRecycle, faRedo, faRedoAlt, faRegistered, faRepeat, faRepeat1, faRepeat1Alt, faRepeatAlt, faReply, faReplyAll, faRetweet, faRetweetAlt, faRoad, faRocket, faRss, faRssSquare, faRubleSign, faRupeeSign, faSave, faScanner, faScannerKeyboard, faScannerTouchscreen, faScrubber, faSearch, faSearchMinus, faSearchPlus, faServer, faShare, faShareAll, faShareAlt, faShareAltSquare, faShareSquare, faShekelSign, faShield, faShieldAlt, faShieldCheck, faShip, faShippingFast, faShippingTimed, faShoppingBag, faShoppingBasket, faShoppingCart, faShower, faShuttlecock, faSignIn, faSignInAlt, faSignLanguage, faSignOut, faSignOutAlt, faSignal, faSitemap, faSlidersH, faSlidersHSquare, faSlidersV, faSlidersVSquare, faSmile, faSmoking, faSnowflake, faSort, faSortAlphaDown, faSortAlphaUp, faSortAmountDown, faSortAmountUp, faSortDown, faSortNumericDown, faSortNumericUp, faSortUp, faSpaceShuttle, faSpade, faSpinner, faSpinnerThird, faSquare, faSquareFull, faStar, faStarExclamation, faStarHalf, faStepBackward, faStepForward, faStethoscope, faStickyNote, faStop, faStopCircle, faStopwatch, faStreetView, faStrikethrough, faSubscript, faSubway, faSuitcase, faSun, faSuperscript, faSync, faSyncAlt, faSyringe, faTable, faTableTennis, faTablet, faTabletAlt, faTabletAndroid, faTabletAndroidAlt, faTabletRugged, faTablets, faTachometer, faTachometerAlt, faTag, faTags, faTasks, faTaxi, faTennisBall, faTerminal, faTextHeight, faTextWidth, faTh, faThLarge, faThList, faThermometer, faThermometerEmpty, faThermometerFull, faThermometerHalf, faThermometerQuarter, faThermometerThreeQuarters, faThumbsDown, faThumbsUp, faThumbtack, faTicket, faTicketAlt, faTimes, faTimesCircle, faTimesHexagon, faTimesOctagon, faTimesSquare, faTint, faToggleOff, faToggleOn, faTrademark, faTrain, faTransgender, faTransgenderAlt, faTrash, faTrashAlt, faTree, faTreeAlt, faTriangle, faTrophy, faTrophyAlt, faTruck, faTty, faTv, faTvRetro, faUmbrella, faUnderline, faUndo, faUndoAlt, faUniversalAccess, faUniversity, faUnlink, faUnlock, faUnlockAlt, faUpload, faUsdCircle, faUsdSquare, faUser, faUserAlt, faUserCircle, faUserMd, faUserPlus, faUserSecret, faUserTimes, faUsers, faUtensilFork, faUtensilKnife, faUtensilSpoon, faUtensils, faUtensilsAlt, faVenus, faVenusDouble, faVenusMars, faVial, faVials, faVideo, faVolleyballBall, faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp, faWarehouse, faWarehouseAlt, faWatch, faWeight, faWheelchair, faWhistle, faWifi, faWindow, faWindowAlt, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore, faWonSign, faWrench, faXRay, faYenSign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressBook", function() { return faAddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAddressCard", function() { return faAddressCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAdjust", function() { return faAdjust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAlarmClock", function() { return faAlarmClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAlignCenter", function() { return faAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAlignJustify", function() { return faAlignJustify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAlignLeft", function() { return faAlignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAlignRight", function() { return faAlignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAllergies", function() { return faAllergies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAmbulance", function() { return faAmbulance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAmericanSignLanguageInterpreting", function() { return faAmericanSignLanguageInterpreting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAnchor", function() { return faAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleDoubleDown", function() { return faAngleDoubleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleDoubleLeft", function() { return faAngleDoubleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleDoubleRight", function() { return faAngleDoubleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleDoubleUp", function() { return faAngleDoubleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleDown", function() { return faAngleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleLeft", function() { return faAngleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleRight", function() { return faAngleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAngleUp", function() { return faAngleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArchive", function() { return faArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleDown", function() { return faArrowAltCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleLeft", function() { return faArrowAltCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleRight", function() { return faArrowAltCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltCircleUp", function() { return faArrowAltCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltDown", function() { return faArrowAltDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltFromBottom", function() { return faArrowAltFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltFromLeft", function() { return faArrowAltFromLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltFromRight", function() { return faArrowAltFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltFromTop", function() { return faArrowAltFromTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltLeft", function() { return faArrowAltLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltRight", function() { return faArrowAltRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltSquareDown", function() { return faArrowAltSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltSquareLeft", function() { return faArrowAltSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltSquareRight", function() { return faArrowAltSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltSquareUp", function() { return faArrowAltSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltToBottom", function() { return faArrowAltToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltToLeft", function() { return faArrowAltToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltToRight", function() { return faArrowAltToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltToTop", function() { return faArrowAltToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowAltUp", function() { return faArrowAltUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowCircleDown", function() { return faArrowCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowCircleLeft", function() { return faArrowCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowCircleRight", function() { return faArrowCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowCircleUp", function() { return faArrowCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowDown", function() { return faArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowFromBottom", function() { return faArrowFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowFromLeft", function() { return faArrowFromLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowFromRight", function() { return faArrowFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowFromTop", function() { return faArrowFromTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowLeft", function() { return faArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowRight", function() { return faArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowSquareDown", function() { return faArrowSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowSquareLeft", function() { return faArrowSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowSquareRight", function() { return faArrowSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowSquareUp", function() { return faArrowSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowToBottom", function() { return faArrowToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowToLeft", function() { return faArrowToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowToRight", function() { return faArrowToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowToTop", function() { return faArrowToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowUp", function() { return faArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrows", function() { return faArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowsAlt", function() { return faArrowsAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowsAltH", function() { return faArrowsAltH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowsAltV", function() { return faArrowsAltV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowsH", function() { return faArrowsH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faArrowsV", function() { return faArrowsV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAssistiveListeningSystems", function() { return faAssistiveListeningSystems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAsterisk", function() { return faAsterisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAt", function() { return faAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faAudioDescription", function() { return faAudioDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBackward", function() { return faBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBadge", function() { return faBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBadgeCheck", function() { return faBadgeCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBalanceScale", function() { return faBalanceScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBan", function() { return faBan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBandAid", function() { return faBandAid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBarcode", function() { return faBarcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBarcodeAlt", function() { return faBarcodeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBarcodeRead", function() { return faBarcodeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBarcodeScan", function() { return faBarcodeScan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBars", function() { return faBars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBaseball", function() { return faBaseball; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBaseballBall", function() { return faBaseballBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBasketballBall", function() { return faBasketballBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBasketballHoop", function() { return faBasketballHoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBath", function() { return faBath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryBolt", function() { return faBatteryBolt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryEmpty", function() { return faBatteryEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryFull", function() { return faBatteryFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryHalf", function() { return faBatteryHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryQuarter", function() { return faBatteryQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatterySlash", function() { return faBatterySlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBatteryThreeQuarters", function() { return faBatteryThreeQuarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBed", function() { return faBed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBeer", function() { return faBeer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBell", function() { return faBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBellSlash", function() { return faBellSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBicycle", function() { return faBicycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBinoculars", function() { return faBinoculars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBirthdayCake", function() { return faBirthdayCake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBlind", function() { return faBlind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBold", function() { return faBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBolt", function() { return faBolt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBomb", function() { return faBomb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBook", function() { return faBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBookmark", function() { return faBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBowlingBall", function() { return faBowlingBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBowlingPins", function() { return faBowlingPins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBox", function() { return faBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBoxCheck", function() { return faBoxCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBoxes", function() { return faBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBoxingGlove", function() { return faBoxingGlove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBraille", function() { return faBraille; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBriefcase", function() { return faBriefcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBriefcaseMedical", function() { return faBriefcaseMedical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBrowser", function() { return faBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBug", function() { return faBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBuilding", function() { return faBuilding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBullhorn", function() { return faBullhorn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBullseye", function() { return faBullseye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBurn", function() { return faBurn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faBus", function() { return faBus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalculator", function() { return faCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendar", function() { return faCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarAlt", function() { return faCalendarAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarCheck", function() { return faCalendarCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarEdit", function() { return faCalendarEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarExclamation", function() { return faCalendarExclamation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarMinus", function() { return faCalendarMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarPlus", function() { return faCalendarPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCalendarTimes", function() { return faCalendarTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCamera", function() { return faCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCameraAlt", function() { return faCameraAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCameraRetro", function() { return faCameraRetro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCapsules", function() { return faCapsules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCar", function() { return faCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretCircleDown", function() { return faCaretCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretCircleLeft", function() { return faCaretCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretCircleRight", function() { return faCaretCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretCircleUp", function() { return faCaretCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretDown", function() { return faCaretDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretLeft", function() { return faCaretLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretRight", function() { return faCaretRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareDown", function() { return faCaretSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareLeft", function() { return faCaretSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareRight", function() { return faCaretSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretSquareUp", function() { return faCaretSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCaretUp", function() { return faCaretUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCartArrowDown", function() { return faCartArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCartPlus", function() { return faCartPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCertificate", function() { return faCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartArea", function() { return faChartArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartBar", function() { return faChartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartLine", function() { return faChartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChartPie", function() { return faChartPie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheck", function() { return faCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckCircle", function() { return faCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCheckSquare", function() { return faCheckSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChess", function() { return faChess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessBishop", function() { return faChessBishop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessBishopAlt", function() { return faChessBishopAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessBoard", function() { return faChessBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessClock", function() { return faChessClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessClockAlt", function() { return faChessClockAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessKing", function() { return faChessKing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessKingAlt", function() { return faChessKingAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessKnight", function() { return faChessKnight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessKnightAlt", function() { return faChessKnightAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessPawn", function() { return faChessPawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessPawnAlt", function() { return faChessPawnAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessQueen", function() { return faChessQueen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessQueenAlt", function() { return faChessQueenAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessRook", function() { return faChessRook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChessRookAlt", function() { return faChessRookAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronCircleDown", function() { return faChevronCircleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronCircleLeft", function() { return faChevronCircleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronCircleRight", function() { return faChevronCircleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronCircleUp", function() { return faChevronCircleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronDoubleDown", function() { return faChevronDoubleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronDoubleLeft", function() { return faChevronDoubleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronDoubleRight", function() { return faChevronDoubleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronDoubleUp", function() { return faChevronDoubleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronDown", function() { return faChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronLeft", function() { return faChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronRight", function() { return faChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronSquareDown", function() { return faChevronSquareDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronSquareLeft", function() { return faChevronSquareLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronSquareRight", function() { return faChevronSquareRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronSquareUp", function() { return faChevronSquareUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChevronUp", function() { return faChevronUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faChild", function() { return faChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCircle", function() { return faCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCircleNotch", function() { return faCircleNotch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClipboard", function() { return faClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClipboardCheck", function() { return faClipboardCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClipboardList", function() { return faClipboardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClock", function() { return faClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClone", function() { return faClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClosedCaptioning", function() { return faClosedCaptioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCloud", function() { return faCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCloudDownload", function() { return faCloudDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCloudDownloadAlt", function() { return faCloudDownloadAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCloudUpload", function() { return faCloudUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCloudUploadAlt", function() { return faCloudUploadAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faClub", function() { return faClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCode", function() { return faCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCodeBranch", function() { return faCodeBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCodeCommit", function() { return faCodeCommit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCodeMerge", function() { return faCodeMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCoffee", function() { return faCoffee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCog", function() { return faCog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCogs", function() { return faCogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faColumns", function() { return faColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComment", function() { return faComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCommentAlt", function() { return faCommentAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faComments", function() { return faComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompass", function() { return faCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompress", function() { return faCompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompressAlt", function() { return faCompressAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCompressWide", function() { return faCompressWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faConveyorBelt", function() { return faConveyorBelt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faConveyorBeltAlt", function() { return faConveyorBeltAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopy", function() { return faCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCopyright", function() { return faCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCreditCard", function() { return faCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCreditCardBlank", function() { return faCreditCardBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCreditCardFront", function() { return faCreditCardFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCricket", function() { return faCricket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCrop", function() { return faCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCrosshairs", function() { return faCrosshairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCube", function() { return faCube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCubes", function() { return faCubes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCurling", function() { return faCurling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faCut", function() { return faCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDatabase", function() { return faDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDeaf", function() { return faDeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDesktop", function() { return faDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDesktopAlt", function() { return faDesktopAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDiagnoses", function() { return faDiagnoses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDiamond", function() { return faDiamond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDna", function() { return faDna; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDollarSign", function() { return faDollarSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDolly", function() { return faDolly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDollyEmpty", function() { return faDollyEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDollyFlatbed", function() { return faDollyFlatbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDollyFlatbedAlt", function() { return faDollyFlatbedAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDollyFlatbedEmpty", function() { return faDollyFlatbedEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDotCircle", function() { return faDotCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDownload", function() { return faDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faDumbbell", function() { return faDumbbell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEdit", function() { return faEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEject", function() { return faEject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEllipsisH", function() { return faEllipsisH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEllipsisHAlt", function() { return faEllipsisHAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEllipsisV", function() { return faEllipsisV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEllipsisVAlt", function() { return faEllipsisVAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelope", function() { return faEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelopeOpen", function() { return faEnvelopeOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEnvelopeSquare", function() { return faEnvelopeSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEraser", function() { return faEraser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEuroSign", function() { return faEuroSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExchange", function() { return faExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExchangeAlt", function() { return faExchangeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExclamation", function() { return faExclamation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExclamationCircle", function() { return faExclamationCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExclamationSquare", function() { return faExclamationSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExclamationTriangle", function() { return faExclamationTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExpand", function() { return faExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExpandAlt", function() { return faExpandAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExpandArrows", function() { return faExpandArrows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExpandArrowsAlt", function() { return faExpandArrowsAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExpandWide", function() { return faExpandWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExternalLink", function() { return faExternalLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExternalLinkAlt", function() { return faExternalLinkAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExternalLinkSquare", function() { return faExternalLinkSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faExternalLinkSquareAlt", function() { return faExternalLinkSquareAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEye", function() { return faEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEyeDropper", function() { return faEyeDropper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faEyeSlash", function() { return faEyeSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFastBackward", function() { return faFastBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFastForward", function() { return faFastForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFax", function() { return faFax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFemale", function() { return faFemale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFieldHockey", function() { return faFieldHockey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFighterJet", function() { return faFighterJet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFile", function() { return faFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAlt", function() { return faFileAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileArchive", function() { return faFileArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileAudio", function() { return faFileAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileCheck", function() { return faFileCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileCode", function() { return faFileCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileEdit", function() { return faFileEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileExcel", function() { return faFileExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileExclamation", function() { return faFileExclamation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileImage", function() { return faFileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileMedical", function() { return faFileMedical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileMedicalAlt", function() { return faFileMedicalAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileMinus", function() { return faFileMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePdf", function() { return faFilePdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePlus", function() { return faFilePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilePowerpoint", function() { return faFilePowerpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileTimes", function() { return faFileTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileVideo", function() { return faFileVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFileWord", function() { return faFileWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilm", function() { return faFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilmAlt", function() { return faFilmAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFilter", function() { return faFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFire", function() { return faFire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFireExtinguisher", function() { return faFireExtinguisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFirstAid", function() { return faFirstAid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlag", function() { return faFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlagCheckered", function() { return faFlagCheckered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFlask", function() { return faFlask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolder", function() { return faFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFolderOpen", function() { return faFolderOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFont", function() { return faFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFootballBall", function() { return faFootballBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFootballHelmet", function() { return faFootballHelmet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faForklift", function() { return faForklift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faForward", function() { return faForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFrown", function() { return faFrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faFutbol", function() { return faFutbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGamepad", function() { return faGamepad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGavel", function() { return faGavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGem", function() { return faGem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGenderless", function() { return faGenderless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGift", function() { return faGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGlassMartini", function() { return faGlassMartini; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGlobe", function() { return faGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGolfBall", function() { return faGolfBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGolfClub", function() { return faGolfClub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faGraduationCap", function() { return faGraduationCap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHSquare", function() { return faHSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faH1", function() { return faH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faH2", function() { return faH2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faH3", function() { return faH3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandHoldingBox", function() { return faHandHoldingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandLizard", function() { return faHandLizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPaper", function() { return faHandPaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPeace", function() { return faHandPeace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointDown", function() { return faHandPointDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointLeft", function() { return faHandPointLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointRight", function() { return faHandPointRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointUp", function() { return faHandPointUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandPointer", function() { return faHandPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandReceiving", function() { return faHandReceiving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandRock", function() { return faHandRock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandScissors", function() { return faHandScissors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandSpock", function() { return faHandSpock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHandshake", function() { return faHandshake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHashtag", function() { return faHashtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHdd", function() { return faHdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeading", function() { return faHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeadphones", function() { return faHeadphones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeart", function() { return faHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHeartbeat", function() { return faHeartbeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHexagon", function() { return faHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHistory", function() { return faHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHockeyPuck", function() { return faHockeyPuck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHockeySticks", function() { return faHockeySticks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHome", function() { return faHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHospital", function() { return faHospital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHospitalAlt", function() { return faHospitalAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHospitalSymbol", function() { return faHospitalSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglass", function() { return faHourglass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglassEnd", function() { return faHourglassEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglassHalf", function() { return faHourglassHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faHourglassStart", function() { return faHourglassStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faICursor", function() { return faICursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdBadge", function() { return faIdBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdCard", function() { return faIdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIdCardAlt", function() { return faIdCardAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImage", function() { return faImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faImages", function() { return faImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInbox", function() { return faInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInboxIn", function() { return faInboxIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInboxOut", function() { return faInboxOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIndent", function() { return faIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIndustry", function() { return faIndustry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faIndustryAlt", function() { return faIndustryAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInfo", function() { return faInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInfoCircle", function() { return faInfoCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInfoSquare", function() { return faInfoSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faInventory", function() { return faInventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faItalic", function() { return faItalic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faJackOLantern", function() { return faJackOLantern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKey", function() { return faKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faKeyboard", function() { return faKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLanguage", function() { return faLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLaptop", function() { return faLaptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLeaf", function() { return faLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLemon", function() { return faLemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLevelDown", function() { return faLevelDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLevelDownAlt", function() { return faLevelDownAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLevelUp", function() { return faLevelUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLevelUpAlt", function() { return faLevelUpAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLifeRing", function() { return faLifeRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLightbulb", function() { return faLightbulb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLink", function() { return faLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLiraSign", function() { return faLiraSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faList", function() { return faList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faListAlt", function() { return faListAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faListOl", function() { return faListOl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faListUl", function() { return faListUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLocationArrow", function() { return faLocationArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLock", function() { return faLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLockAlt", function() { return faLockAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLockOpen", function() { return faLockOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLockOpenAlt", function() { return faLockOpenAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowAltDown", function() { return faLongArrowAltDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowAltLeft", function() { return faLongArrowAltLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowAltRight", function() { return faLongArrowAltRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowAltUp", function() { return faLongArrowAltUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowDown", function() { return faLongArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowLeft", function() { return faLongArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowRight", function() { return faLongArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLongArrowUp", function() { return faLongArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLowVision", function() { return faLowVision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faLuchador", function() { return faLuchador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMagic", function() { return faMagic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMagnet", function() { return faMagnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMale", function() { return faMale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMap", function() { return faMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMapMarker", function() { return faMapMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMapMarkerAlt", function() { return faMapMarkerAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMapPin", function() { return faMapPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMapSigns", function() { return faMapSigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMars", function() { return faMars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMarsDouble", function() { return faMarsDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMarsStroke", function() { return faMarsStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMarsStrokeH", function() { return faMarsStrokeH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMarsStrokeV", function() { return faMarsStrokeV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMedkit", function() { return faMedkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMeh", function() { return faMeh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMercury", function() { return faMercury; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMicrochip", function() { return faMicrochip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMicrophone", function() { return faMicrophone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMicrophoneAlt", function() { return faMicrophoneAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMicrophoneSlash", function() { return faMicrophoneSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinus", function() { return faMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusCircle", function() { return faMinusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusHexagon", function() { return faMinusHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusOctagon", function() { return faMinusOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMinusSquare", function() { return faMinusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMobile", function() { return faMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMobileAlt", function() { return faMobileAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMobileAndroid", function() { return faMobileAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMobileAndroidAlt", function() { return faMobileAndroidAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoneyBill", function() { return faMoneyBill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoneyBillAlt", function() { return faMoneyBillAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMoon", function() { return faMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMotorcycle", function() { return faMotorcycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMousePointer", function() { return faMousePointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faMusic", function() { return faMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faNeuter", function() { return faNeuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faNewspaper", function() { return faNewspaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faNotesMedical", function() { return faNotesMedical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectGroup", function() { return faObjectGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faObjectUngroup", function() { return faObjectUngroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faOctagon", function() { return faOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faOutdent", function() { return faOutdent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaintBrush", function() { return faPaintBrush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPallet", function() { return faPallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPalletAlt", function() { return faPalletAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaperPlane", function() { return faPaperPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaperclip", function() { return faPaperclip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faParagraph", function() { return faParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaste", function() { return faPaste; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPause", function() { return faPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPauseCircle", function() { return faPauseCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPaw", function() { return faPaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPen", function() { return faPen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPenAlt", function() { return faPenAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPenSquare", function() { return faPenSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPencil", function() { return faPencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPencilAlt", function() { return faPencilAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPennant", function() { return faPennant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPercent", function() { return faPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPhone", function() { return faPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPhoneSlash", function() { return faPhoneSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPhoneSquare", function() { return faPhoneSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPhoneVolume", function() { return faPhoneVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPills", function() { return faPills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlane", function() { return faPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlaneAlt", function() { return faPlaneAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlay", function() { return faPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlayCircle", function() { return faPlayCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlug", function() { return faPlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlus", function() { return faPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusCircle", function() { return faPlusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusHexagon", function() { return faPlusHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusOctagon", function() { return faPlusOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPlusSquare", function() { return faPlusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPodcast", function() { return faPodcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPoo", function() { return faPoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPortrait", function() { return faPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPoundSign", function() { return faPoundSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPowerOff", function() { return faPowerOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPrescriptionBottle", function() { return faPrescriptionBottle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPrescriptionBottleAlt", function() { return faPrescriptionBottleAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPrint", function() { return faPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faProcedures", function() { return faProcedures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faPuzzlePiece", function() { return faPuzzlePiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQrcode", function() { return faQrcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuestion", function() { return faQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuestionCircle", function() { return faQuestionCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuestionSquare", function() { return faQuestionSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuidditch", function() { return faQuidditch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuoteLeft", function() { return faQuoteLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faQuoteRight", function() { return faQuoteRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRacquet", function() { return faRacquet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRandom", function() { return faRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRectangleLandscape", function() { return faRectangleLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRectanglePortrait", function() { return faRectanglePortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRectangleWide", function() { return faRectangleWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRecycle", function() { return faRecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRedo", function() { return faRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRedoAlt", function() { return faRedoAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRegistered", function() { return faRegistered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRepeat", function() { return faRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRepeat1", function() { return faRepeat1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRepeat1Alt", function() { return faRepeat1Alt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRepeatAlt", function() { return faRepeatAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faReply", function() { return faReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faReplyAll", function() { return faReplyAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRetweet", function() { return faRetweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRetweetAlt", function() { return faRetweetAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRoad", function() { return faRoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRocket", function() { return faRocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRss", function() { return faRss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRssSquare", function() { return faRssSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRubleSign", function() { return faRubleSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faRupeeSign", function() { return faRupeeSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSave", function() { return faSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faScanner", function() { return faScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faScannerKeyboard", function() { return faScannerKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faScannerTouchscreen", function() { return faScannerTouchscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faScrubber", function() { return faScrubber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSearch", function() { return faSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSearchMinus", function() { return faSearchMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSearchPlus", function() { return faSearchPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faServer", function() { return faServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShare", function() { return faShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareAll", function() { return faShareAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareAlt", function() { return faShareAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareAltSquare", function() { return faShareAltSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShareSquare", function() { return faShareSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShekelSign", function() { return faShekelSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShield", function() { return faShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShieldAlt", function() { return faShieldAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShieldCheck", function() { return faShieldCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShip", function() { return faShip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShippingFast", function() { return faShippingFast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShippingTimed", function() { return faShippingTimed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShoppingBag", function() { return faShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShoppingBasket", function() { return faShoppingBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShoppingCart", function() { return faShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShower", function() { return faShower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faShuttlecock", function() { return faShuttlecock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignIn", function() { return faSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignInAlt", function() { return faSignInAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignLanguage", function() { return faSignLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignOut", function() { return faSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignOutAlt", function() { return faSignOutAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSignal", function() { return faSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSitemap", function() { return faSitemap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSlidersH", function() { return faSlidersH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSlidersHSquare", function() { return faSlidersHSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSlidersV", function() { return faSlidersV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSlidersVSquare", function() { return faSlidersVSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmile", function() { return faSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSmoking", function() { return faSmoking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSnowflake", function() { return faSnowflake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSort", function() { return faSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortAlphaDown", function() { return faSortAlphaDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortAlphaUp", function() { return faSortAlphaUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortAmountDown", function() { return faSortAmountDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortAmountUp", function() { return faSortAmountUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortDown", function() { return faSortDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortNumericDown", function() { return faSortNumericDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortNumericUp", function() { return faSortNumericUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSortUp", function() { return faSortUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSpaceShuttle", function() { return faSpaceShuttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSpade", function() { return faSpade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSpinner", function() { return faSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSpinnerThird", function() { return faSpinnerThird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSquare", function() { return faSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSquareFull", function() { return faSquareFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStar", function() { return faStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStarExclamation", function() { return faStarExclamation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStarHalf", function() { return faStarHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStepBackward", function() { return faStepBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStepForward", function() { return faStepForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStethoscope", function() { return faStethoscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStickyNote", function() { return faStickyNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStop", function() { return faStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStopCircle", function() { return faStopCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStopwatch", function() { return faStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStreetView", function() { return faStreetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faStrikethrough", function() { return faStrikethrough; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSubscript", function() { return faSubscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSubway", function() { return faSubway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSuitcase", function() { return faSuitcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSun", function() { return faSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSuperscript", function() { return faSuperscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSync", function() { return faSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSyncAlt", function() { return faSyncAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faSyringe", function() { return faSyringe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTable", function() { return faTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTableTennis", function() { return faTableTennis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTablet", function() { return faTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTabletAlt", function() { return faTabletAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTabletAndroid", function() { return faTabletAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTabletAndroidAlt", function() { return faTabletAndroidAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTabletRugged", function() { return faTabletRugged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTablets", function() { return faTablets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTachometer", function() { return faTachometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTachometerAlt", function() { return faTachometerAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTag", function() { return faTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTags", function() { return faTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTasks", function() { return faTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTaxi", function() { return faTaxi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTennisBall", function() { return faTennisBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTerminal", function() { return faTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTextHeight", function() { return faTextHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTextWidth", function() { return faTextWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTh", function() { return faTh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThLarge", function() { return faThLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThList", function() { return faThList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometer", function() { return faThermometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometerEmpty", function() { return faThermometerEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometerFull", function() { return faThermometerFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometerHalf", function() { return faThermometerHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometerQuarter", function() { return faThermometerQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThermometerThreeQuarters", function() { return faThermometerThreeQuarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsDown", function() { return faThumbsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbsUp", function() { return faThumbsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faThumbtack", function() { return faThumbtack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTicket", function() { return faTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTicketAlt", function() { return faTicketAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimes", function() { return faTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesCircle", function() { return faTimesCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesHexagon", function() { return faTimesHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesOctagon", function() { return faTimesOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTimesSquare", function() { return faTimesSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTint", function() { return faTint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faToggleOff", function() { return faToggleOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faToggleOn", function() { return faToggleOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrademark", function() { return faTrademark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrain", function() { return faTrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTransgender", function() { return faTransgender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTransgenderAlt", function() { return faTransgenderAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrash", function() { return faTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrashAlt", function() { return faTrashAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTree", function() { return faTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTreeAlt", function() { return faTreeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTriangle", function() { return faTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrophy", function() { return faTrophy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTrophyAlt", function() { return faTrophyAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTruck", function() { return faTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTty", function() { return faTty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTv", function() { return faTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faTvRetro", function() { return faTvRetro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUmbrella", function() { return faUmbrella; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUnderline", function() { return faUnderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUndo", function() { return faUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUndoAlt", function() { return faUndoAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUniversalAccess", function() { return faUniversalAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUniversity", function() { return faUniversity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUnlink", function() { return faUnlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUnlock", function() { return faUnlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUnlockAlt", function() { return faUnlockAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUpload", function() { return faUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUsdCircle", function() { return faUsdCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUsdSquare", function() { return faUsdSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUser", function() { return faUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserAlt", function() { return faUserAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserCircle", function() { return faUserCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserMd", function() { return faUserMd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserPlus", function() { return faUserPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserSecret", function() { return faUserSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUserTimes", function() { return faUserTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUsers", function() { return faUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUtensilFork", function() { return faUtensilFork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUtensilKnife", function() { return faUtensilKnife; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUtensilSpoon", function() { return faUtensilSpoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUtensils", function() { return faUtensils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faUtensilsAlt", function() { return faUtensilsAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVenus", function() { return faVenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVenusDouble", function() { return faVenusDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVenusMars", function() { return faVenusMars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVial", function() { return faVial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVials", function() { return faVials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVideo", function() { return faVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVolleyballBall", function() { return faVolleyballBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVolumeDown", function() { return faVolumeDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVolumeMute", function() { return faVolumeMute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVolumeOff", function() { return faVolumeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faVolumeUp", function() { return faVolumeUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWarehouse", function() { return faWarehouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWarehouseAlt", function() { return faWarehouseAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWatch", function() { return faWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWeight", function() { return faWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWheelchair", function() { return faWheelchair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWhistle", function() { return faWhistle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWifi", function() { return faWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindow", function() { return faWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowAlt", function() { return faWindowAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowClose", function() { return faWindowClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMaximize", function() { return faWindowMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowMinimize", function() { return faWindowMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWindowRestore", function() { return faWindowRestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWonSign", function() { return faWonSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faWrench", function() { return faWrench; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faXRay", function() { return faXRay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faYenSign", function() { return faYenSign; });
/*!
 * Font Awesome Pro 5.0.8 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
var _WINDOW = {};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;





var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';







var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);



var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var prefix = "far";
var faAddressBook = { prefix: 'far', iconName: 'address-book', icon: [448, 512, [], "f2b9", "M436 160c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20zm-74 304H54a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v404a6 6 0 0 1-6 6zM128 208c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm208 133.477V360c0 13.255-10.745 24-24 24H104c-13.255 0-24-10.745-24-24v-18.523c0-22.026 14.99-41.225 36.358-46.567l35.657-8.914c29.101 20.932 74.509 26.945 111.97 0l35.657 8.914C321.01 300.252 336 319.452 336 341.477z"] };
var faAddressCard = { prefix: 'far', iconName: 'address-card', icon: [512, 512, [], "f2bb", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zm-54-176H300c-6.627 0-12-5.373-12-12v-16c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12zm0 72H300c-6.627 0-12-5.373-12-12v-16c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12zM176 160c33.137 0 60 26.863 60 60s-26.863 60-60 60-60-26.863-60-60 26.863-60 60-60zm68.731 125.183l-26.742-6.686c-28.096 20.209-62.152 15.699-83.978 0l-26.742 6.686C91.243 289.189 80 303.589 80 320.108V334c0 9.941 8.059 18 18 18h156c9.941 0 18-8.059 18-18v-13.892c0-16.519-11.243-30.919-27.269-34.925z"] };
var faAdjust = { prefix: 'far', iconName: 'adjust', icon: [512, 512, [], "f042", "M256 56c110.549 0 200 89.468 200 200 0 110.549-89.468 200-200 200-110.549 0-200-89.468-200-200 0-110.549 89.468-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 96c-83.947 0-152 68.053-152 152s68.053 152 152 152V104z"] };
var faAlarmClock = { prefix: 'far', iconName: 'alarm-clock', icon: [512, 512, [], "f34e", "M459.7 194.6C482 174.1 496 144.7 496 112 496 50.1 445.9 0 384 0c-45.3 0-84.3 26.8-101.9 65.5-17.3-2-34.9-2-52.2 0C212.3 26.8 173.3 0 128 0 66.1 0 16 50.1 16 112c0 32.7 14 62.1 36.3 82.6C39.3 223 32 254.7 32 288c0 53.2 18.6 102.1 49.5 140.5L39 471c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 33.9 0l42.5-42.5c81.5 65.7 198.7 66.4 281 0L439 505c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.4-24.6 0-33.9l-42.5-42.5c31-38.4 49.5-87.3 49.5-140.5.1-33.4-7.2-65.1-20.2-93.5zM384 48c35.3 0 64 28.7 64 64 0 15.1-5.3 29-14 39.9-26.2-34.2-62-60.6-103.3-75.2C342.1 59.4 361.7 48 384 48zM64 112c0-35.3 28.7-64 64-64 22.3 0 41.9 11.4 53.4 28.7-41.4 14.6-77.2 41-103.3 75.2C69.3 141 64 127.1 64 112zm192 352c-97.3 0-176-78.7-176-176 0-97 78.4-176 176-176 97.4 0 176 78.8 176 176 0 97.3-78.7 176-176 176zm46.2-95.7l-69-47.5c-3.3-2.2-5.2-5.9-5.2-9.9V180c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v107.7l50 34.4c5.5 3.8 6.8 11.2 3.1 16.7L319 365.2c-3.8 5.4-11.3 6.8-16.8 3.1z"] };
var faAlignCenter = { prefix: 'far', iconName: 'align-center', icon: [448, 512, [], "f037", "M352 48v32c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12V48c0-6.627 5.373-12 12-12h232c6.627 0 12 5.373 12 12zM12 220h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm0 256h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm328-184H108c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12z"] };
var faAlignJustify = { prefix: 'far', iconName: 'align-justify', icon: [448, 512, [], "f039", "M0 80V48c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12H12C5.373 92 0 86.627 0 80zm12 140h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm0 256h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm0-128h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12z"] };
var faAlignLeft = { prefix: 'far', iconName: 'align-left', icon: [448, 512, [], "f036", "M288 48v32c0 6.627-5.373 12-12 12H12C5.373 92 0 86.627 0 80V48c0-6.627 5.373-12 12-12h264c6.627 0 12 5.373 12 12zM12 220h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm0 256h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm264-184H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h264c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12z"] };
var faAlignRight = { prefix: 'far', iconName: 'align-right', icon: [448, 512, [], "f038", "M160 80V48c0-6.627 5.373-12 12-12h264c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zM12 220h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm0 256h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm160-128h264c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12z"] };
var faAllergies = { prefix: 'far', iconName: 'allergies', icon: [480, 512, [], "f461", "M256 304c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-64-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm64 112c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm152-288c-2.7 0-5.4.2-8 .4V104c0-39.7-32.3-72-72-72-6.4 0-12.7.8-18.6 2.4C296.7 13.8 273.9 0 248 0s-48.7 13.8-61.4 34.4c-5.9-1.6-12.2-2.4-18.6-2.4-39.7 0-72 32.3-72 72v92.1c-10.5-3.7-38.1-10.2-65.3 8.9C-1.8 227.8-9.8 272.8 13 305.3l113.5 171c14.9 22.4 39.8 35.7 66.6 35.7h180.6c38 0 71-27 78.5-64.3l20.6-103.2c4.7-23.7 7.1-48 7.1-72.2V184c.1-39.7-32.2-72-71.9-72zm24 160.3c0 21.1-2.1 42.1-6.2 62.8l-20.6 103.2c-3 15-16.1 25.7-31.4 25.7H193.1c-10.7 0-20.7-5.4-26.7-14.3L52.3 277.8c-18-25.7 20.7-54.1 39.3-27.5l37.8 54.4c4.5 6.5 14.6 3.2 14.6-4.6V104c0-31.8 48-31.7 48 0v144c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V72c0-31.8 48-31.7 48 0v176c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V104c0-31.8 48-31.7 48 0v144c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-64c0-31.8 48-31.7 48 0v88.3zM192 368c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm192-80c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-32 112c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-32-64c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"] };
var faAmbulance = { prefix: 'far', iconName: 'ambulance', icon: [640, 512, [], "f0f9", "M296 160h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm328 208h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"] };
var faAmericanSignLanguageInterpreting = { prefix: 'far', iconName: 'american-sign-language-interpreting', icon: [640, 512, [], "f2a3", "M635.124 210.818c-.06-.124-40.19-80.369-40.19-80.369-11.371-22.737-39.883-33.58-64.432-21.309l-.048.024-51.577 25.889s-76.369-7.04-77.356-7.04c-18.703 0-36.638 4.3-52.695 12.51-6.622-8.822-14.274-14.06-23.49-18.275 11.395-35.618-14.806-73.459-53.504-73.192C268.554 22.553 245.872 0 216.271 0a56.096 56.096 0 0 0-35.654 12.824c-45.389 37.273-74.398 89.592-82.391 146.56l-29.668 53.507s-44.692 25.442-44.809 25.51C2.06 251.113-6.128 278.463 4.874 301.198c.061.125 40.19 80.371 40.19 80.371 11.462 22.914 40.052 33.495 64.433 21.309l.048-.024 51.594-25.897c76.879 7.049 76.948 7.049 78.84 7.049 18.074 0 35.583-4.459 51.181-12.527 6.627 8.835 14.283 14.074 23.502 18.292-11.848 37.033 17.128 73.849 53.528 73.376C371.632 490.225 394.936 512 423.76 512c13.008 0 25.656-4.549 35.633-12.814 45.384-37.273 74.388-89.591 82.38-146.551l29.668-53.507s44.692-25.442 44.808-25.51c21.692-12.713 29.88-40.065 18.875-62.8zm-338.089-22.229c-19.901-9.937-43.4-11.344-64.482-3.866-8.425 2.989-6.285 15.54 2.675 15.54 32.401 0 57.19 14.542 69.807 40.956 9.012 18.801-19.759 32.856-28.81 13.633l-.052-.107c-6.857-14.022-20.727-22.734-36.194-22.734-22.061 0-40.008 17.943-40.008 39.999 0 24.706 20.767 39.999 40.008 39.999 15.468 0 29.337-8.711 36.194-22.734l.052-.106c9.052-19.227 37.818-5.16 28.805 13.642-11.909 24.935-37.3 41.079-64.747 41.196-4.601-.388-62.246-5.666-84.596-7.716a7.973 7.973 0 0 0-4.319.817L91.615 367.1c-4.477 2.238-9.078-.033-10.774-3.423l-39.983-79.94c-1.879-3.933-.532-8.66 3.076-10.802l52.215-29.721a8.003 8.003 0 0 0 3.039-3.073l37.009-66.747a7.984 7.984 0 0 0 .954-2.991c5.563-49.806 30.03-94.802 68.925-126.724 6.719-5.57 16.887-4.766 22.422 2.108 6.05 7.502 4.4 17.162-2.18 22.619-12.209 10.306-22.541 21.614-30.71 33.609-4.944 7.26 3.828 16.067 11.107 11.121C226.048 100 247.323 91.95 270.033 89.198c8.246-1.085 16.426 4.1 17.779 13.866 1.149 8.695-4.777 16.738-13.782 17.758-14.99 1.808-29.422 6.793-42.896 14.818-7.753 4.617-3.036 16.619 5.803 14.689 23.624-5.166 51.312-1.658 73.985 9.34 19.143 9.569 5.068 38.147-13.887 28.92zm299.029 50.498l-52.211 29.72a8 8 0 0 0-3.039 3.072l-37.011 66.747a7.989 7.989 0 0 0-.954 2.992c-5.562 49.806-30.029 94.801-68.939 126.735-16.035 13.361-36.804-10.996-20.226-24.738 12.21-10.309 22.542-21.616 30.708-33.609 5.036-7.397-3.95-15.986-11.107-11.12-19.333 13.133-40.608 21.183-63.234 23.924-21.228 2.583-24.879-29.259-4.081-31.613 14.99-1.809 29.422-6.794 42.896-14.817 7.754-4.619 3.033-16.619-5.803-14.689-23.621 5.167-51.312 1.659-73.985-9.341-19.179-9.587-4.995-38.163 13.853-28.936 19.908 9.949 43.423 11.365 64.517 3.884 8.441-2.997 6.266-15.54-2.675-15.54-32.402 0-57.191-14.541-69.807-40.956-9.016-18.813 19.765-32.851 28.81-13.633l.052.105c6.856 14.023 20.725 22.735 36.193 22.735 22.061 0 40.009-17.943 40.009-39.999 0-24.707-20.768-39.999-40.009-39.999-15.469 0-29.338 8.711-36.194 22.735l-.051.106c-9.051 19.223-37.821 5.167-28.805-13.643 12.099-25.331 37.434-41.091 66.185-41.195l83.149 7.715a8 8 0 0 0 4.328-.816l59.754-29.993c4.477-2.235 9.079.034 10.772 3.423l39.983 79.941c1.88 3.932.533 8.661-3.078 10.803z"] };
var faAnchor = { prefix: 'far', iconName: 'anchor', icon: [576, 512, [], "f13d", "M571.515 331.515l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h44.268C453.531 417.326 380.693 456.315 312 462.865V216h60c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-60v-11.668c32.456-10.195 56-40.512 56-76.332 0-44.183-35.817-80-80-80s-80 35.817-80 80c0 35.82 23.544 66.138 56 76.332V168h-60c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h60v246.865C195.192 456.304 122.424 417.176 102.762 352h44.268c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.03 67.029C-3.074 339.074 2.28 352 12.971 352h40.284C73.657 451.556 181.238 512 288 512c113.135 0 215.338-65.3 234.745-160h40.284c10.691 0 16.045-12.926 8.486-20.485zM288 48c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"] };
var faAngleDoubleDown = { prefix: 'far', iconName: 'angle-double-down', icon: [320, 512, [], "f103", "M151.5 427.8L3.5 281c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 362.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0zm17-160l148-146.8c4.7-4.7 4.7-12.3 0-17l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L160 202.7 40.3 84.2c-4.7-4.7-12.3-4.7-17 0L3.5 104c-4.7 4.7-4.7 12.3 0 17l148 146.8c4.7 4.7 12.3 4.7 17 0z"] };
var faAngleDoubleLeft = { prefix: 'far', iconName: 'angle-double-left', icon: [384, 512, [], "f100", "M20.2 247.5L167 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L85.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L184 412.5c-4.7 4.7-12.3 4.7-17 0l-146.8-148c-4.7-4.7-4.7-12.3 0-17zm160 17l146.8 148c4.7 4.7 12.3 4.7 17 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L245.3 256l118.5-119.7c4.7-4.7 4.7-12.3 0-17L344 99.5c-4.7-4.7-12.3-4.7-17 0l-146.8 148c-4.7 4.7-4.7 12.3 0 17z"] };
var faAngleDoubleRight = { prefix: 'far', iconName: 'angle-double-right', icon: [384, 512, [], "f101", "M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z"] };
var faAngleDoubleUp = { prefix: 'far', iconName: 'angle-double-up', icon: [320, 512, [], "f102", "M168.5 84.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 149.3 40.3 267.8c-4.7 4.7-12.3 4.7-17 0L3.5 248c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0zm-17 160L3.5 391c-4.7 4.7-4.7 12.3 0 17l19.8 19.8c4.7 4.7 12.3 4.7 17 0L160 309.3l119.7 118.5c4.7 4.7 12.3 4.7 17 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17l-148-146.8c-4.7-4.7-12.3-4.7-17 0z"] };
var faAngleDown = { prefix: 'far', iconName: 'angle-down', icon: [320, 512, [], "f107", "M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"] };
var faAngleLeft = { prefix: 'far', iconName: 'angle-left', icon: [192, 512, [], "f104", "M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"] };
var faAngleRight = { prefix: 'far', iconName: 'angle-right', icon: [192, 512, [], "f105", "M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"] };
var faAngleUp = { prefix: 'far', iconName: 'angle-up', icon: [320, 512, [], "f106", "M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"] };
var faArchive = { prefix: 'far', iconName: 'archive', icon: [512, 512, [], "f187", "M464 32H48C21.49 32 0 53.49 0 80v64c0 20.928 13.398 38.718 32.081 45.285-.05.899-.081 1.803-.081 2.715v240c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V192c0-.912-.031-1.816-.081-2.715C498.602 182.718 512 164.928 512 144V80c0-26.51-21.49-48-48-48zM48 86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V86zm384 340a6 6 0 0 1-6 6H86a6 6 0 0 1-6-6V198a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v228zM308 280H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12z"] };
var faArrowAltCircleDown = { prefix: 'far', iconName: 'arrow-alt-circle-down', icon: [512, 512, [], "f358", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"] };
var faArrowAltCircleLeft = { prefix: 'far', iconName: 'arrow-alt-circle-left', icon: [512, 512, [], "f359", "M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"] };
var faArrowAltCircleRight = { prefix: 'far', iconName: 'arrow-alt-circle-right', icon: [512, 512, [], "f35a", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"] };
var faArrowAltCircleUp = { prefix: 'far', iconName: 'arrow-alt-circle-up', icon: [512, 512, [], "f35b", "M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"] };
var faArrowAltDown = { prefix: 'far', iconName: 'arrow-alt-down', icon: [448, 512, [], "f354", "M400 208h-73.8V80c0-26.5-21.5-48-48-48H169.8c-26.5 0-48 21.5-48 48v128H48.1c-42.6 0-64.2 51.7-33.9 81.9l175.9 176c18.7 18.7 49.1 18.7 67.9 0l176-176c30-30.1 8.7-81.9-34-81.9zM224 432L48 256h121.8V80h108.3v176H400L224 432z"] };
var faArrowAltFromBottom = { prefix: 'far', iconName: 'arrow-alt-from-bottom', icon: [384, 512, [], "f346", "M384 444v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zM14.1 190.1l144-144c18.7-18.7 49.1-18.7 67.9 0l143.9 144c30.2 30.2 8.7 81.9-33.9 81.9h-51.6v80c0 26.5-21.5 48-48 48h-88.6c-26.5 0-48-21.5-48-48v-80H48c-42.7 0-64-51.8-33.9-81.9zM48 224h99.7v128h88.6V224H336L192 80 48 224z"] };
var faArrowAltFromLeft = { prefix: 'far', iconName: 'arrow-alt-from-left', icon: [448, 512, [], "f347", "M36 448H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12zM289.9 78.1l144 144c18.7 18.7 18.7 49.1 0 67.9l-144 143.9c-30.2 30.2-81.9 8.7-81.9-33.9v-51.6h-80c-26.5 0-48-21.5-48-48v-88.6c0-26.5 21.5-48 48-48h80V112c0-42.7 51.8-64 81.9-33.9zM256 112v99.7H128v88.6h128V400l144-144-144-144z"] };
var faArrowAltFromRight = { prefix: 'far', iconName: 'arrow-alt-from-right', icon: [448, 512, [], "f348", "M412 64h24c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12zM158.1 433.9l-144-144c-18.7-18.7-18.7-49.1 0-67.9l144-143.9C188.3 47.9 240 69.4 240 112v51.6h80c26.5 0 48 21.5 48 48v88.6c0 26.5-21.5 48-48 48h-80V400c0 42.7-51.8 64-81.9 33.9zM192 400v-99.7h128v-88.6H192V112L48 256l144 144z"] };
var faArrowAltFromTop = { prefix: 'far', iconName: 'arrow-alt-from-top', icon: [384, 512, [], "f349", "M0 68V44c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12C5.4 80 0 74.6 0 68zm369.9 253.9l-144 144c-18.7 18.7-49.1 18.7-67.9 0l-143.9-144c-30.2-30.2-8.7-81.9 34-81.9h51.6v-80c0-26.5 21.5-48 48-48h88.6c26.5 0 48 21.5 48 48v80H336c42.7 0 64 51.8 33.9 81.9zM336 288h-99.7V160h-88.6v128H48l144 144 144-144z"] };
var faArrowAltLeft = { prefix: 'far', iconName: 'arrow-alt-left', icon: [448, 512, [], "f355", "M272 431.952v-73.798h128c26.51 0 48-21.49 48-48V201.846c0-26.51-21.49-48-48-48H272V80.057c0-42.638-51.731-64.15-81.941-33.941l-176 175.943c-18.745 18.745-18.746 49.137 0 67.882l176 175.952C220.208 496.042 272 474.675 272 431.952zM48 256L224 80v121.846h176v108.308H224V432L48 256z"] };
var faArrowAltRight = { prefix: 'far', iconName: 'arrow-alt-right', icon: [448, 512, [], "f356", "M176 80.048v73.798H48c-26.51 0-48 21.49-48 48v108.308c0 26.51 21.49 48 48 48h128v73.789c0 42.638 51.731 64.151 81.941 33.941l176-175.943c18.745-18.745 18.746-49.137 0-67.882l-176-175.952C227.792 15.958 176 37.325 176 80.048zM400 256L224 432V310.154H48V201.846h176V80l176 176z"] };
var faArrowAltSquareDown = { prefix: 'far', iconName: 'arrow-alt-square-down', icon: [448, 512, [], "f350", "M204 128h40c6.6 0 12 5.4 12 12v116h67c10.7 0 16 12.9 8.5 20.5l-99 99c-4.7 4.7-12.3 4.7-17 0l-99-99c-7.6-7.6-2.2-20.5 8.5-20.5h67V140c0-6.6 5.4-12 12-12zm244-48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowAltSquareLeft = { prefix: 'far', iconName: 'arrow-alt-square-left', icon: [448, 512, [], "f351", "M352 236v40c0 6.6-5.4 12-12 12H224v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12zm96-156v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowAltSquareRight = { prefix: 'far', iconName: 'arrow-alt-square-right', icon: [448, 512, [], "f352", "M96 276v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H108c-6.6 0-12-5.4-12-12zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowAltSquareUp = { prefix: 'far', iconName: 'arrow-alt-square-up', icon: [448, 512, [], "f353", "M244 384h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowAltToBottom = { prefix: 'far', iconName: 'arrow-alt-to-bottom', icon: [384, 512, [], "f34a", "M336 176h-51.6V80c0-26.5-21.5-48-48-48h-88.6c-26.5 0-48 21.5-48 48v96H48.1c-42.6 0-64.2 51.7-33.9 81.9l143.9 144c18.7 18.7 49.1 18.7 67.9 0l144-144c30-30.1 8.7-81.9-34-81.9zM192 368L48 224h99.7V80h88.6v144H336L192 368zm192 76v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12z"] };
var faArrowAltToLeft = { prefix: 'far', iconName: 'arrow-alt-to-left', icon: [448, 512, [], "f34b", "M304 400v-51.6h96c26.5 0 48-21.5 48-48v-88.6c0-26.5-21.5-48-48-48h-96v-51.6c0-42.6-51.7-64.2-81.9-33.9l-144 143.9c-18.7 18.7-18.7 49.1 0 67.9l144 144C252.2 464 304 442.7 304 400zM112 256l144-144v99.7h144v88.6H256V400L112 256zM36 448H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12z"] };
var faArrowAltToRight = { prefix: 'far', iconName: 'arrow-alt-to-right', icon: [448, 512, [], "f34c", "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm76-192h24c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12z"] };
var faArrowAltToTop = { prefix: 'far', iconName: 'arrow-alt-to-top', icon: [384, 512, [], "f34d", "M48 336h51.6v96c0 26.5 21.5 48 48 48h88.6c26.5 0 48-21.5 48-48v-96h51.6c42.6 0 64.2-51.7 33.9-81.9l-143.9-144c-18.7-18.7-49.1-18.7-67.9 0l-144 144C-16 284.2 5.3 336 48 336zm144-192l144 144h-99.7v144h-88.6V288H48l144-144zM0 68V44c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12C5.4 80 0 74.6 0 68z"] };
var faArrowAltUp = { prefix: 'far', iconName: 'arrow-alt-up', icon: [448, 512, [], "f357", "M48.048 304h73.798v128c0 26.51 21.49 48 48 48h108.308c26.51 0 48-21.49 48-48V304h73.789c42.638 0 64.151-51.731 33.941-81.941l-175.943-176c-18.745-18.745-49.137-18.746-67.882 0l-175.952 176C-16.042 252.208 5.325 304 48.048 304zM224 80l176 176H278.154v176H169.846V256H48L224 80z"] };
var faArrowCircleDown = { prefix: 'far', iconName: 'arrow-circle-down', icon: [512, 512, [], "f0ab", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm129.9-206.1l-19.6-19.6c-4.8-4.8-12.5-4.7-17.2.2L282 300.8V140c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v160.8l-67.1-70.3c-4.7-4.9-12.4-5-17.2-.2l-19.6 19.6c-4.7 4.7-4.7 12.3 0 17l121.4 121.4c4.7 4.7 12.3 4.7 17 0l121.4-121.4c4.7-4.7 4.7-12.3 0-17z"] };
var faArrowCircleLeft = { prefix: 'far', iconName: 'arrow-circle-left', icon: [512, 512, [], "f0a8", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm189.1 129.9L123.7 264.5c-4.7-4.7-4.7-12.3 0-17l121.4-121.4c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.2L211.2 230H372c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H211.2l70.3 67.1c4.9 4.7 5 12.4.2 17.2l-19.6 19.6c-4.7 4.7-12.3 4.7-17 0z"] };
var faArrowCircleRight = { prefix: 'far', iconName: 'arrow-circle-right', icon: [512, 512, [], "f0a9", "M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zM266.9 126.1l121.4 121.4c4.7 4.7 4.7 12.3 0 17L266.9 385.9c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.2l70.3-67.1H140c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h160.8l-70.3-67.1c-4.9-4.7-5-12.4-.2-17.2l19.6-19.6c4.7-4.7 12.3-4.7 17 0z"] };
var faArrowCircleUp = { prefix: 'far', iconName: 'arrow-circle-up', icon: [512, 512, [], "f0aa", "M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zM126.1 245.1l121.4-121.4c4.7-4.7 12.3-4.7 17 0l121.4 121.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.2-.2L282 211.2V372c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V211.2l-67.1 70.3c-4.7 4.9-12.4 5-17.2.2l-19.6-19.6c-4.7-4.7-4.7-12.3 0-17z"] };
var faArrowDown = { prefix: 'far', iconName: 'arrow-down', icon: [448, 512, [], "f063", "M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"] };
var faArrowFromBottom = { prefix: 'far', iconName: 'arrow-from-bottom', icon: [384, 512, [], "f342", "M35.5 183.9l148-148.4c4.7-4.7 12.3-4.7 17 0l148 148.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.1-.2L218 123.2V372c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V123.2l-93.7 97.1c-4.7 4.8-12.4 4.9-17.1.2l-19.6-19.6c-4.8-4.7-4.8-12.3-.1-17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z"] };
var faArrowFromLeft = { prefix: 'far', iconName: 'arrow-from-left', icon: [448, 512, [], "f343", "M296.1 99.5l148.4 148c4.7 4.7 4.7 12.3 0 17l-148.4 148c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.1l97.1-93.7H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h248.8l-97.1-93.7c-4.8-4.7-4.9-12.4-.2-17.1l19.6-19.6c4.7-4.9 12.3-4.9 17-.2zM52 436V76c0-6.6-5.4-12-12-12H12C5.4 64 0 69.4 0 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12z"] };
var faArrowFromRight = { prefix: 'far', iconName: 'arrow-from-right', icon: [448, 512, [], "f344", "M151.9 412.5L3.5 264.5c-4.7-4.7-4.7-12.3 0-17l148.4-148c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.1L91.2 230H340c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H91.2l97.1 93.7c4.8 4.7 4.9 12.4.2 17.1l-19.6 19.6c-4.7 4.8-12.3 4.8-17 .1zM396 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12z"] };
var faArrowFromTop = { prefix: 'far', iconName: 'arrow-from-top', icon: [384, 512, [], "f345", "M348.5 328.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V140c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM12 84h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v28c0 6.6 5.4 12 12 12z"] };
var faArrowLeft = { prefix: 'far', iconName: 'arrow-left', icon: [448, 512, [], "f060", "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"] };
var faArrowRight = { prefix: 'far', iconName: 'arrow-right', icon: [448, 512, [], "f061", "M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"] };
var faArrowSquareDown = { prefix: 'far', iconName: 'arrow-square-down', icon: [448, 512, [], "f339", "M353.9 266.9L232.5 388.3c-4.7 4.7-12.3 4.7-17 0L94.1 266.9c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.2.2l67.1 70.3V140c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v160.8l67.1-70.3c4.7-4.9 12.4-5 17.2-.2l19.6 19.6c4.7 4.7 4.7 12.3 0 17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowSquareLeft = { prefix: 'far', iconName: 'arrow-square-left', icon: [448, 512, [], "f33a", "M213.1 385.9L91.7 264.5c-4.7-4.7-4.7-12.3 0-17l121.4-121.4c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.2L179.2 230H340c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H179.2l70.3 67.1c4.9 4.7 5 12.4.2 17.2l-19.6 19.6c-4.7 4.7-12.3 4.7-17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowSquareRight = { prefix: 'far', iconName: 'arrow-square-right', icon: [448, 512, [], "f33b", "M234.9 126.1l121.4 121.4c4.7 4.7 4.7 12.3 0 17L234.9 385.9c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.2l70.3-67.1H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h160.8l-70.3-67.1c-4.9-4.7-5-12.4-.2-17.2l19.6-19.6c4.7-4.7 12.3-4.7 17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowSquareUp = { prefix: 'far', iconName: 'arrow-square-up', icon: [448, 512, [], "f33c", "M94.1 245.1l121.4-121.4c4.7-4.7 12.3-4.7 17 0l121.4 121.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.2-.2L250 211.2V372c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V211.2l-67.1 70.3c-4.7 4.9-12.4 5-17.2.2l-19.6-19.6c-4.7-4.7-4.7-12.3 0-17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faArrowToBottom = { prefix: 'far', iconName: 'arrow-to-bottom', icon: [384, 512, [], "f33d", "M348.5 232.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V44c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z"] };
var faArrowToLeft = { prefix: 'far', iconName: 'arrow-to-left', icon: [448, 512, [], "f33e", "M247.9 412.5l-148.4-148c-4.7-4.7-4.7-12.3 0-17l148.4-148c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.1L187.2 230H436c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H187.2l97.1 93.7c4.8 4.7 4.9 12.4.2 17.1l-19.6 19.6c-4.7 4.8-12.3 4.8-17 .1zM52 436V76c0-6.6-5.4-12-12-12H12C5.4 64 0 69.4 0 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12z"] };
var faArrowToRight = { prefix: 'far', iconName: 'arrow-to-right', icon: [448, 512, [], "f340", "M200.1 99.5l148.4 148c4.7 4.7 4.7 12.3 0 17l-148.4 148c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.1l97.1-93.7H12c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h248.8l-97.1-93.7c-4.8-4.7-4.9-12.4-.2-17.1l19.6-19.6c4.7-4.9 12.3-4.9 17-.2zM396 76v360c0 6.6 5.4 12 12 12h28c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12z"] };
var faArrowToTop = { prefix: 'far', iconName: 'arrow-to-top', icon: [384, 512, [], "f341", "M35.5 279.9l148-148.4c4.7-4.7 12.3-4.7 17 0l148 148.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.1-.2L218 219.2V468c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V219.2l-93.7 97.1c-4.7 4.8-12.4 4.9-17.1.2l-19.6-19.6c-4.8-4.7-4.8-12.3-.1-17zM12 84h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v28c0 6.6 5.4 12 12 12z"] };
var faArrowUp = { prefix: 'far', iconName: 'arrow-up', icon: [448, 512, [], "f062", "M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"] };
var faArrows = { prefix: 'far', iconName: 'arrows', icon: [512, 512, [], "f047", "M360.549 412.216l-96.064 96.269c-4.686 4.686-12.284 4.686-16.971 0l-96.064-96.269c-4.686-4.686-4.686-12.284 0-16.971l19.626-19.626c4.753-4.753 12.484-4.675 17.14.173L230 420.78h2V280H91.22v2l44.986 41.783c4.849 4.656 4.927 12.387.173 17.14l-19.626 19.626c-4.686 4.686-12.284 4.686-16.971 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l96.269-96.064c4.686-4.686 12.284-4.686 16.97 0l19.626 19.626c4.753 4.753 4.675 12.484-.173 17.14L91.22 230v2H232V91.22h-2l-41.783 44.986c-4.656 4.849-12.387 4.927-17.14.173l-19.626-19.626c-4.686-4.686-4.686-12.284 0-16.971l96.064-96.269c4.686-4.686 12.284-4.686 16.971 0l96.064 96.269c4.686 4.686 4.686 12.284 0 16.971l-19.626 19.626c-4.753 4.753-12.484 4.675-17.14-.173L282 91.22h-2V232h140.78v-2l-44.986-41.783c-4.849-4.656-4.927-12.387-.173-17.14l19.626-19.626c4.686-4.686 12.284-4.686 16.971 0l96.269 96.064c4.686 4.686 4.686 12.284 0 16.971l-96.269 96.064c-4.686 4.686-12.284 4.686-16.971 0l-19.626-19.626c-4.753-4.753-4.675-12.484.173-17.14L420.78 282v-2H280v140.78h2l41.783-44.986c4.656-4.849 12.387-4.927 17.14-.173l19.626 19.626c4.687 4.685 4.687 12.283 0 16.969z"] };
var faArrowsAlt = { prefix: 'far', iconName: 'arrows-alt', icon: [512, 512, [], "f0b2", "M276 236.075h115.85v-76.15c0-10.691 12.926-16.045 20.485-8.485l96.149 96.149c4.686 4.686 4.686 12.284 0 16.971l-96.149 96.149c-7.56 7.56-20.485 2.206-20.485-8.485v-76.149H275.999v115.776h76.15c10.691 0 16.045 12.926 8.485 20.485l-96.149 96.15c-4.686 4.686-12.284 4.686-16.971 0l-96.149-96.149c-7.56-7.56-2.206-20.485 8.485-20.485H236V276.075H120.149v76.149c0 10.691-12.926 16.045-20.485 8.485L3.515 264.56c-4.686-4.686-4.686-12.284 0-16.971l96.149-96.149c7.56-7.56 20.485-2.206 20.485 8.485v76.15H236V120.15h-76.149c-10.691 0-16.045-12.926-8.485-20.485l96.149-96.149c4.686-4.686 12.284-4.686 16.971 0l96.149 96.149c7.56 7.56 2.206 20.485-8.485 20.485H276v115.925z"] };
var faArrowsAltH = { prefix: 'far', iconName: 'arrows-alt-h', icon: [512, 512, [], "f337", "M508.485 247.515l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485V228H123.03v-71.03c0-10.691-12.926-16.045-20.485-8.485l-99.03 99.029c-4.686 4.686-4.686 12.284 0 16.971l99.03 99.029c7.56 7.56 20.485 2.206 20.485-8.485V284h265.941v71.03c0 10.691 12.926 16.045 20.485 8.485l99.03-99.029c4.686-4.687 4.686-12.285-.001-16.971z"] };
var faArrowsAltV = { prefix: 'far', iconName: 'arrows-alt-v', icon: [256, 512, [], "f338", "M227.03 388.97H156V123.03h71.03c10.691 0 16.045-12.926 8.485-20.485l-99.029-99.03c-4.686-4.686-12.284-4.686-16.971 0l-99.029 99.03c-7.56 7.56-2.206 20.485 8.485 20.485H100v265.94H28.97c-10.691 0-16.045 12.926-8.485 20.485l99.029 99.03c4.686 4.686 12.284 4.686 16.971 0l99.029-99.03c7.56-7.559 2.206-20.485-8.484-20.485z"] };
var faArrowsH = { prefix: 'far', iconName: 'arrows-h', icon: [512, 512, [], "f07e", "M347.404 142.86c-4.753 4.753-4.675 12.484.173 17.14l73.203 70H91.22l73.203-70c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L128 388.766c4.686 4.686 12.284 4.686 16.971 0l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282h329.56l-73.203 70c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l124.485-124.281c4.686-4.686 4.686-12.284 0-16.971L384 123.234c-4.686-4.686-12.284-4.686-16.971 0l-19.625 19.626z"] };
var faArrowsV = { prefix: 'far', iconName: 'arrows-v', icon: [320, 512, [], "f07d", "M273.1 347.4c-4.8-4.8-12.5-4.7-17.1.2l-70 73.2V91.2l70 73.2c4.7 4.8 12.4 4.9 17.1.2l19.6-19.6c4.7-4.7 4.7-12.3 0-17L168.5 3.5c-4.7-4.7-12.3-4.7-17 0L27.2 128c-4.7 4.7-4.7 12.3 0 17l19.6 19.6c4.8 4.8 12.5 4.7 17.1-.2l70-73.2v329.6l-70-73.2c-4.7-4.8-12.4-4.9-17.1-.2L27.2 367c-4.7 4.7-4.7 12.3 0 17l124.3 124.5c4.7 4.7 12.3 4.7 17 0L292.8 384c4.7-4.7 4.7-12.3 0-17l-19.7-19.6z"] };
var faAssistiveListeningSystems = { prefix: 'far', iconName: 'assistive-listening-systems', icon: [512, 512, [], "f2a2", "M189.149 512c-13.255 0-24-10.745-24-24s10.745-24 24-24c36.393 0 66-30.016 66-66.909l.002-.334C256.157 324.62 328 312.824 328 264c0-66.918-53.497-120-120-120-66.38 0-120 52.95-120 120 0 13.255-10.745 24-24 24s-24-10.745-24-24c0-93.338 74.866-168 168-168 92.97 0 168 74.484 168 168 0 74.659-72.099 87.835-72.851 133.282-.106 63.272-51.205 114.718-114 114.718zM296 264c0-48.523-39.477-88-88-88s-88 39.477-88 88c0 13.255 10.745 24 24 24s24-10.745 24-24c0-22.056 17.944-40 40-40s40 17.944 40 40c0 13.255 10.745 24 24 24s24-10.745 24-24zm130.99-71c11.94-5.755 16.955-20.1 11.2-32.04-17.206-35.699-42.929-67.404-74.385-91.688-10.495-8.099-25.564-6.16-33.664 4.333s-6.16 25.563 4.332 33.664c25.581 19.748 46.493 45.521 60.477 74.532 5.759 11.946 20.109 16.951 32.04 11.199zm71.404-35.37c11.945-5.744 16.974-20.083 11.23-32.029-23.882-49.678-55.813-90.241-94.916-120.565-10.475-8.122-25.549-6.218-33.674 4.258-8.122 10.474-6.216 25.55 4.258 33.673 33.17 25.723 60.443 60.522 81.073 103.432 5.744 11.949 20.084 16.972 32.029 11.231zM208 280c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 64c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zM24 464c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm104.971-16.971l-64-64L31.03 416.97l64 64 33.941-33.941z"] };
var faAsterisk = { prefix: 'far', iconName: 'asterisk', icon: [512, 512, [], "f069", "M479.31 357.216L303.999 256l175.31-101.215c5.74-3.314 7.706-10.653 4.392-16.392l-12-20.785c-3.314-5.74-10.653-7.706-16.392-4.392L280 214.431V12c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v202.431L56.69 113.215c-5.74-3.314-13.079-1.347-16.392 4.392l-12 20.785c-3.314 5.74-1.347 13.079 4.392 16.392L208 256 32.69 357.216c-5.74 3.314-7.706 10.653-4.392 16.392l12 20.784c3.314 5.739 10.653 7.706 16.392 4.392L232 297.569V500c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V297.569l175.31 101.215c5.74 3.314 13.078 1.347 16.392-4.392l12-20.784c3.314-5.739 1.347-13.079-4.392-16.392z"] };
var faAt = { prefix: 'far', iconName: 'at', icon: [512, 512, [], "f1fa", "M504 232C504 95.751 394.053 8 256 8 118.94 8 8 118.919 8 256c0 137.059 110.919 248 248 248 52.926 0 104.681-17.079 147.096-48.321 5.501-4.052 6.423-11.924 2.095-17.211l-15.224-18.597c-4.055-4.954-11.249-5.803-16.428-2.041C339.547 442.517 298.238 456 256 456c-110.28 0-200-89.72-200-200S145.72 56 256 56c109.469 0 200 65.02 200 176 0 63.106-42.478 98.29-83.02 98.29-19.505 0-20.133-12.62-16.366-31.463l28.621-148.557c1.426-7.402-4.245-14.27-11.783-14.27h-39.175a12.005 12.005 0 0 0-11.784 9.735c-1.102 5.723-1.661 8.336-2.28 13.993-11.923-19.548-35.878-31.068-65.202-31.068C183.412 128.66 120 191.149 120 281.53c0 61.159 32.877 102.11 93.18 102.11 29.803 0 61.344-16.833 79.749-42.239 4.145 30.846 28.497 38.01 59.372 38.01C451.467 379.41 504 315.786 504 232zm-273.9 97.35c-28.472 0-45.47-19.458-45.47-52.05 0-57.514 39.56-93.41 74.61-93.41 30.12 0 45.471 21.532 45.471 51.58 0 46.864-33.177 93.88-74.611 93.88z"] };
var faAudioDescription = { prefix: 'far', iconName: 'audio-description', icon: [512, 512, [], "f29e", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zm-212.541-63.861l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm-82.534-97.43l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zM331.2 160h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386 0-58.977-37.919-95.614-98.96-95.614zm-1.801 145.39h-14.523v-98.78h14.523c28.685 0 46.175 16.767 46.175 49.005 0 32.098-16.399 49.775-46.175 49.775z"] };
var faBackward = { prefix: 'far', iconName: 'backward', icon: [512, 512, [], "f04a", "M267.5 281.2l192 159.4c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L267.5 232c-15.3 12.8-15.3 36.4 0 49.2zM464 130.3V382L313 256.6l151-126.3zM11.5 281.2l192 159.4c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L11.5 232c-15.3 12.8-15.3 36.4 0 49.2zM208 130.3V382L57 256.6l151-126.3z"] };
var faBadge = { prefix: 'far', iconName: 'badge', icon: [512, 512, [], "f335", "M256 512c-36.2 0-68.2-18.6-86.7-46.7-33.1 6.8-68.7-2.6-94.3-28.3-25.6-25.6-35.1-61.4-28.3-94.3C18.7 324.3 0 292.3 0 256c0-36.2 18.6-68.2 46.7-86.7-6.8-32.8 2.6-68.7 28.3-94.3 25.6-25.6 61.4-35.1 94.3-28.3C187.7 18.7 219.7 0 256 0c36.3 0 68.2 18.7 86.7 46.7 32.8-6.8 68.7 2.6 94.3 28.3 25.6 25.6 35.1 61.4 28.3 94.3 27.9 18.3 46.7 50.2 46.7 86.7 0 36.2-18.6 68.2-46.7 86.7 6.8 32.8-2.6 68.7-28.3 94.3-25.6 25.6-61.2 35.1-94.3 28.3-18.4 27.9-50.3 46.7-86.7 46.7zm-61.2-108.2c6.5 17.4 15.9 60.2 61.2 60.2 43.9 0 53.5-39.6 61.2-60.2 30.5 13.8 57.8 27.3 85.8-.7 31-31 9.8-65.9.7-85.8 17.4-6.5 60.2-15.9 60.2-61.2 0-43.9-39.6-53.5-60.2-61.2 7.7-16.9 31.3-53.8-.7-85.8-31-31-65.9-9.8-85.8-.7C310.7 90.8 301.3 48 256 48c-43.9 0-53.5 39.6-61.2 60.2-16.9-7.7-53.8-31.3-85.8.7-31 31-9.8 65.9-.7 85.8-17.5 6.6-60.3 16-60.3 61.3 0 43.9 39.6 53.5 60.2 61.2-7.7 16.9-31.3 53.8.7 85.8 31 31 64.8 10.4 85.9.8z"] };
var faBadgeCheck = { prefix: 'far', iconName: 'badge-check', icon: [512, 512, [], "f336", "M512 256c0-36.46-18.835-68.355-46.716-86.695 6.789-32.893-2.642-68.702-28.265-94.324-25.659-25.658-61.477-35.045-94.324-28.265C324.246 18.667 292.255 0 256 0c-36.286 0-68.263 18.692-86.695 46.716-32.907-6.789-68.705 2.647-94.324 28.265-25.658 25.657-35.044 61.478-28.265 94.324C18.635 187.777 0 219.78 0 256c0 36.284 18.689 68.261 46.716 86.695-6.79 32.894 2.645 68.704 28.265 94.324 25.628 25.628 61.226 35.08 94.326 28.268C187.774 493.36 219.779 512 256 512c36.402 0 68.326-18.792 86.693-46.713 33.117 6.816 68.712-2.653 94.326-28.268 25.656-25.656 35.044-61.477 28.265-94.324C493.363 324.226 512 292.22 512 256zm-108.182 61.232c9.072 19.989 30.301 54.807-.74 85.846-28.085 28.088-55.336 14.589-85.846.739C309.513 424.375 299.912 464 256 464c-45.324 0-54.71-42.814-61.232-60.183-21.078 9.568-54.909 30.2-85.846-.739-32.039-32.037-8.405-68.957-.74-85.846C87.624 309.513 48 299.912 48 256c0-45.324 42.812-54.71 60.182-61.232-9.072-19.989-30.301-54.807.74-85.846 32.037-32.038 68.939-8.414 85.847-.74C202.488 87.624 212.088 48 256 48c45.324 0 54.709 42.813 61.231 60.182 19.989-9.073 54.808-30.302 85.847.74 32.039 32.037 8.405 68.957.74 85.846C424.376 202.487 464 212.088 464 256c0 45.324-42.812 54.71-60.182 61.232zM387.82 201.315L215.232 372.519c-4.706 4.667-12.303 4.637-16.971-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.668 4.706 4.637 12.304-.068 16.971z"] };
var faBalanceScale = { prefix: 'far', iconName: 'balance-scale', icon: [576, 512, [], "f24e", "M312 155.33c23.451-9.496 40-32.474 40-59.33h116c6.627 0 12-5.373 12-12V60c0-6.627-5.373-12-12-12H330.309c-24.184-21.334-60.42-21.346-84.619 0H108c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h116c0 26.856 16.549 49.834 40 59.33V432H108c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H312V155.33zM288 80c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zm-64 224h-.019c.001-15.664.181-11.008-69.048-149.466-17.647-35.294-68.186-35.358-85.865 0C-.151 292.971.019 288.334.019 304H0c0 44.183 50.144 80 112 80s112-35.817 112-80zM112 176l64 128H48l64-128zm463.981 128c.001-15.664.181-11.008-69.048-149.466-17.647-35.294-68.186-35.358-85.865 0-69.219 138.437-69.05 133.8-69.049 149.466H352c0 44.183 50.144 80 112 80s112-35.817 112-80h-.019zM464 176l64 128H400l64-128z"] };
var faBan = { prefix: 'far', iconName: 'ban', icon: [512, 512, [], "f05e", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm141.421 106.579c73.176 73.175 77.05 187.301 15.964 264.865L132.556 98.615c77.588-61.105 191.709-57.193 264.865 15.964zM114.579 397.421c-73.176-73.175-77.05-187.301-15.964-264.865l280.829 280.829c-77.588 61.105-191.709 57.193-264.865-15.964z"] };
var faBandAid = { prefix: 'far', iconName: 'band-aid', icon: [640, 512, [], "f462", "M552 96H88c-48.5 0-88 39.5-88 88v144c0 48.5 39.5 88 88 88h464c48.5 0 88-39.5 88-88V184c0-48.5-39.5-88-88-88zM88 368c-22.1 0-40-17.9-40-40V184c0-22.1 17.9-40 40-40h104v224H88zm184-88c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-24-72c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm96 96c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm24-72c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm224 96c0 22.1-17.9 40-40 40H448V144h104c22.1 0 40 17.9 40 40v144z"] };
var faBarcode = { prefix: 'far', iconName: 'barcode', icon: [512, 512, [], "f02a", "M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"] };
var faBarcodeAlt = { prefix: 'far', iconName: 'barcode-alt', icon: [640, 512, [], "f463", "M360 384h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm96 0h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm-160 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zM592 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h544v416zm-456-80h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm96 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8z"] };
var faBarcodeRead = { prefix: 'far', iconName: 'barcode-read', icon: [640, 512, [], "f464", "M248 128h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-64 0h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-40 336H48v-96c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM16 160h16c8.8 0 16-7.2 16-16V48h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v128c0 8.8 7.2 16 16 16zm496 216V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8zM312 128h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm312 224h-16c-8.8 0-16 7.2-16 16v96h-96c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zm0-352H496c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h96v96c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zM408 128h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"] };
var faBarcodeScan = { prefix: 'far', iconName: 'barcode-scan', icon: [640, 512, [], "f465", "M632 232H8c-4.4 0-8 2.7-8 6v36c0 3.3 3.6 6 8 6h624c4.4 0 8-2.7 8-6v-36c0-3.3-3.6-6-8-6zM288 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm96 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h32V8zm96 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zM160 8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v152h96V8zm416 0c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152h64V8zm-64 496c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-160 0c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V352h-32v152zm64 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-192 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V352h-64v152zm-160 0c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V352H64v152z"] };
var faBars = { prefix: 'far', iconName: 'bars', icon: [448, 512, [], "f0c9", "M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"] };
var faBaseball = { prefix: 'far', iconName: 'baseball', icon: [640, 512, [], "f432", "M625.6 54.5l-16.7-22c-27.1-37-77.6-41.9-112.3-16.9L308.8 152.2c-48.1 34.7-92 73.3-131 117.8-54.8 62.6-106 101.2-135.6 122.5-8.4-9.8-23-11.3-33.2-3.3-10.3 8.3-12 23.4-3.7 33.7l64 80c7.8 9.8 22.9 12.4 33.8 3.7 9.3-7.5 11.2-20.4 5.4-30.4 29.1-21 81.9-56.6 156-87.9 54.7-23.1 106.5-52.2 154.6-86.9L605 166c35.9-25.9 46.7-75.9 20.6-111.5zm-547 383.4l-7.1-8.9c35.9-27 77.4-61.6 111.6-95.1l21.6 29.5c-42.8 21.5-89.1 49.1-126.1 74.5zM576 128.4L390.9 264c-75 52.8-136.4 76-161.7 87.6l-27.1-37.1c18.9-20.2 59.8-69.3 134.8-123.4L524.7 54.9c13.6-9.8 34.3-8.9 45.5 6.3l13 21.5c10.3 14.3 7.2 34-7.2 45.7zM512 320c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"] };
var faBaseballBall = { prefix: 'far', iconName: 'baseball-ball', icon: [496, 512, [], "f433", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM114 404c12-14.4 22.5-30 30.8-47.1l-26.8-13c-6.8 13.9-15.3 26.5-24.9 38.4-55.4-67.7-64.8-173.4 0-252.7 9.6 11.8 18.1 24.4 24.8 38.2l26.8-13.1c-8.3-17-18.7-32.5-30.7-46.8 73.3-66.4 188.4-72 268 0-12 14.3-22.4 29.9-30.7 47l26.8 13c6.8-13.9 15.3-26.5 24.8-38.3 55.8 68.3 64.4 173.9.1 252.7-9.6-11.8-18.1-24.4-24.9-38.3l-26.8 13.1c8.3 17 18.7 32.6 30.8 46.9-73.6 66.7-188.8 71.9-268.1 0zm42.7-76.5l-28.3-9.2c12.2-37.5 14-81.5-.1-124.7l28.3-9.2c16.3 50 14 100.4.1 143.1zm211-9.2l-28.3 9.2c-16.3-50-14-100.5-.1-143.1l28.3 9.2c-12.2 37.4-14 81.5.1 124.7z"] };
var faBasketballBall = { prefix: 'far', iconName: 'basketball-ball', icon: [496, 512, [], "f434", "M248 8C111 8 0 118.9 0 256c0 137.9 111.6 248 248 248 136.2 0 248-110 248-248C496 119 385.2 8 248 8zm-13.9 447.3c-38.9-2.7-77.1-16.7-109.4-42L248 290l43 43c-29.2 35.1-48.9 77.4-56.9 122.3zm91.5-87.7l45.7 45.7c-26.1 20.5-56.1 33.6-87.2 39.3 7.3-31.1 21.6-59.9 41.5-85zm34-33.9c25-20 53.9-34.2 85.1-41.5-5.8 31.9-19.2 61.7-39.4 87.3l-45.7-45.8zm87.7-91.6c-45 8.1-87.2 27.8-122.4 57l-43-43 123.3-123.4c24.8 31.4 39.4 69.2 42.1 109.4zM139 181c-25.8 20.6-55.8 35-88.1 42.1 5.5-33 19-63.9 39.8-90.4L139 181zm-14.3-82.3C151.1 77.9 182 64.4 215 58.9c-7.1 32.3-21.5 62.3-42.1 88.1l-48.2-48.3zm140.2-41.9c39.1 3.3 75.8 17.8 106.4 41.9L248 222.1l-40.4-40.4c29.7-35.8 49.6-78.9 57.3-124.9zM48.8 273c46-7.8 89.1-27.6 124.8-57.3l40.4 40.4L90.7 379.4C66.6 348.7 52.1 312 48.8 273z"] };
var faBasketballHoop = { prefix: 'far', iconName: 'basketball-hoop', icon: [640, 512, [], "f435", "M639.9 336.9c0 22.8-13.6 43.2-34.7 51.8l-103.5 42.5 3.8-53.4 81.4-33.5c3-1.2 5-4.2 5-7.4V218.6C509.1 1.6 133.4.7 48 218.7V337c0 3.3 2 6.2 5 7.4l81.4 33.5 3.8 53.4-103.5-42.5C13.6 380.1 0 359.8 0 336.9L1.2 207C1.8 205 68.7 8 320 8s318.1 197 318.8 199c1.6 10.2 1.1-8.5 1.1 129.9zM461.2 512l-75.4-71.6L320 512l-65.8-71.6-75.4 71.6-18.2-224H136c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-24.6l-18.2 224zM206.7 352.4l46.7 43.6 44-44-42.1-42.1-48.6 42.5zm113.3-23l41.4-41.4h-82.8l41.4 41.4zm22.6 22.6l44 44 46.7-43.6-48.6-42.5-42.1 42.1zm104.7-64h-39l36.5 31.9 2.5-31.9zm-254.6 0l2.6 31.9 36.5-31.9h-39.1zm38.1 130.6l-29.9-27.9 4.3 53.5 25.6-25.6zm132.4-.8L320 374.6l-43.2 43.2 43.2 40.3 43.2-40.3zm71.6 26.4l4.3-53.5-29.9 27.9 25.6 25.6zM464 208v-80H176v80h32v-48h224v48h32z"] };
var faBath = { prefix: 'far', iconName: 'bath', icon: [512, 512, [], "f2cd", "M500 256H80V112c0-17.645 14.355-32 32-32 11.351 0 21.332 5.945 27.015 14.88-16.492 25.207-14.687 59.576 6.838 83.035-4.176 4.713-4.021 11.916.491 16.428l11.314 11.314c4.686 4.686 12.284 4.686 16.971 0l95.03-95.029c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.512-4.512-11.715-4.666-16.428-.491-17.949-16.469-42.294-21.429-64.178-15.365C163.281 45.667 139.212 32 112 32c-44.112 0-80 35.888-80 80v144H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h20v48c0 32.119 15.777 60.55 40 77.977V468c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12v-20.334c2.638.218 5.305.334 8 .334h256c2.695 0 5.362-.117 8-.334V468c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12v-38.023c24.223-17.427 40-45.858 40-77.977v-48h20c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zM176.202 112.201c10.396-10.397 26.553-10.726 37.338-2.025l-39.363 39.363c-8.725-10.813-8.348-26.966 2.025-37.338zM432 352c0 26.467-21.533 48-48 48H128c-26.467 0-48-21.533-48-48v-48h352v48z"] };
var faBatteryBolt = { prefix: 'far', iconName: 'battery-bolt', icon: [640, 512, [], "f376", "M445.394 223.522L304.616 469.519c-3.522 6.654-9.943 10.481-16.623 10.481-12.266 0-21.553-12.557-18.677-25.843l36.847-166.382h-94.961c-11.6 0-20.566-11.186-19.031-23.775l25.597-213.775C219.04 39.792 227.177 32 236.8 32h108.8c12.604 0 21.8 13.087 18.552 26.411L336.458 192h92.321c14.785 0 24.011 17.55 16.615 31.522zM48 144h110.197l5.747-48H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h180.604l10.63-48H48V144zm568 16h-8v-16c0-26.51-21.49-48-48-48H405.38l-9.951 48H560v64h32v96h-32v64H418.017l-27.469 48H560c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24z"] };
var faBatteryEmpty = { prefix: 'far', iconName: 'battery-empty', icon: [640, 512, [], "f244", "M560 144v64h32v96h-32v64H48V144h512m0-48H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48z"] };
var faBatteryFull = { prefix: 'far', iconName: 'battery-full', icon: [640, 512, [], "f240", "M560 144v64h32v96h-32v64H48V144h512m0-48H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-48 96H96v128h416V192z"] };
var faBatteryHalf = { prefix: 'far', iconName: 'battery-half', icon: [640, 512, [], "f242", "M320 320H96V192h224v128zm240-176H48v224h512v-64h32v-96h-32v-64m0-48c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h512z"] };
var faBatteryQuarter = { prefix: 'far', iconName: 'battery-quarter', icon: [640, 512, [], "f243", "M224 320H96V192h128v128zm336-176H48v224h512v-64h32v-96h-32v-64m0-48c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h512z"] };
var faBatterySlash = { prefix: 'far', iconName: 'battery-slash', icon: [640, 512, [], "f377", "M313.616 368l35.613 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h63.81l35.613 48H48v224h265.616zM640 184v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48h-91.578l46.529 62.713c3.949 5.322 2.835 12.838-2.487 16.787l-19.052 14.136a11.95 11.95 0 0 1-7.141 2.364c-3.67 0-7.292-1.677-9.647-4.851L125.049 33.286c-3.949-5.323-2.835-12.839 2.487-16.787l19.052-14.135A11.944 11.944 0 0 1 153.729 0c3.67 0 7.292 1.677 9.647 4.851L231.002 96H560c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24zm-48 24h-32v-64H266.615l166.194 224H560v-64h32v-96z"] };
var faBatteryThreeQuarters = { prefix: 'far', iconName: 'battery-three-quarters', icon: [640, 512, [], "f241", "M416 320H96V192h320v128zm144-176H48v224h512v-64h32v-96h-32v-64m0-48c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h512z"] };
var faBed = { prefix: 'far', iconName: 'bed', icon: [576, 512, [], "f236", "M48 76v244h516c6.627 0 12 5.373 12 12v116h-48v-80H48v80H0V76c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm32 116c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96-96-42.981-96-96zm48 0c0 26.467 21.533 48 48 48s48-21.533 48-48-21.533-48-48-48-48 21.533-48 48zm448 32v64H288V152c0-13.255 10.745-24 24-24h168c53.019 0 96 42.981 96 96zm-48 0c0-26.467-21.533-48-48-48H336v64h192v-16z"] };
var faBeer = { prefix: 'far', iconName: 'beer', icon: [448, 512, [], "f0fc", "M152 152v208c0 13.255-10.745 24-24 24s-24-10.745-24-24V152c0-13.255 10.745-24 24-24s24 10.745 24 24zm72-24c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24s24-10.745 24-24V152c0-13.255-10.745-24-24-24zm224 40v145.288c0 27.985-16.418 53.646-41.827 65.373L352 403.664V432c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h256c26.51 0 48 21.49 48 48v16h24c39.701 0 72 32.299 72 72zM298 80H54c-3.314 0-6 2.678-6 5.992v340.016A5.993 5.993 0 0 0 54 432h244a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm102 88c0-13.233-10.767-24-24-24h-24v206.798l34.058-15.719c8.47-3.909 13.942-12.463 13.942-21.791V168z"] };
var faBell = { prefix: 'far', iconName: 'bell', icon: [448, 512, [], "f0f3", "M425.403 330.939c-16.989-16.785-34.546-34.143-34.546-116.083 0-83.026-60.958-152.074-140.467-164.762A31.843 31.843 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32a31.848 31.848 0 0 0 5.609 18.095C118.101 62.783 57.143 131.831 57.143 214.857c0 81.933-17.551 99.292-34.543 116.078C-25.496 378.441 9.726 448 66.919 448H160c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64h93.08c57.19 0 92.415-69.583 44.323-117.061zM224 472c-13.234 0-24-10.766-24-24h48c0 13.234-10.766 24-24 24zm157.092-72H66.9c-16.762 0-25.135-20.39-13.334-32.191 28.585-28.585 51.577-55.724 51.577-152.952C105.143 149.319 158.462 96 224 96s118.857 53.319 118.857 118.857c0 97.65 23.221 124.574 51.568 152.952C406.278 379.661 397.783 400 381.092 400z"] };
var faBellSlash = { prefix: 'far', iconName: 'bell-slash', icon: [576, 512, [], "f1f6", "M130.9 400c-16.762 0-25.135-20.39-13.334-32.191 25.226-25.226 46.094-49.338 50.649-121.48l-46.777-41.274a168.48 168.48 0 0 0-.296 9.802c0 81.933-17.551 99.292-34.543 116.078C38.504 378.441 73.726 448 130.919 448H224c0 35.346 28.654 64 64 64s64-28.654 64-64h44.777l-54.4-48H130.9zM288 472c-13.234 0-24-10.766-24-24h48c0 13.234-10.766 24-24 24zm283.867.553l-67.931-59.571c13.104-24.118 11.524-56.318-14.532-82.042-16.989-16.785-34.546-34.143-34.546-116.083 0-83.026-60.958-152.074-140.467-164.762A31.848 31.848 0 0 0 320 32c0-17.673-14.327-32-32-32s-32 14.327-32 32a31.848 31.848 0 0 0 5.609 18.095c-41.471 6.618-77.891 28.571-103.249 59.841L36.459 3.037c-5.058-4.436-12.777-3.956-17.24 1.071L3.056 22.313C-1.407 27.34-.925 35.012 4.134 39.447l535.408 469.516c5.058 4.436 12.777 3.956 17.24-1.071l16.163-18.205c4.462-5.027 3.98-12.699-1.078-17.134zM288 96c65.538 0 118.857 53.319 118.857 118.857 0 97.65 23.221 124.574 51.568 152.952 2.908 2.908 4.573 6.328 5.209 9.832L194.482 141.612C216.258 113.867 250.075 96 288 96z"] };
var faBicycle = { prefix: 'far', iconName: 'bicycle', icon: [640, 512, [], "f206", "M514.115 192.017c-17.637-.285-34.469 3.005-49.832 9.181l-79.29-127.746A20 20 0 0 0 368 64h-68c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h56.874l32.276 52H256v-16c0-6.627-5.373-12-12-12h-96c-11.046 0-20 8.954-20 20s8.954 20 20 20h61.187l-25.65 36.644c-16.797-8.102-35.634-12.643-55.532-12.644C57.375 191.998-.443 250.196.003 320.824.446 391.137 57.583 448 128 448c58.192 0 107.306-38.835 122.859-92H284a20.005 20.005 0 0 0 16.385-8.53l110.038-157.197 19.539 31.48c-28.136 23.519-46.021 58.892-45.962 98.445.104 68.88 57.908 127.158 126.785 127.797 71.601.664 129.787-57.467 129.21-129.048-.556-69.152-56.736-125.812-125.88-126.93zM128 408c-48.523 0-88-39.477-88-88s39.477-88 88-88a87.552 87.552 0 0 1 32.134 6.075L99.615 324.53C90.342 337.781 99.857 356 116 356h92.294c-13.785 30.625-44.589 52-80.294 52zm26.413-92l38.641-55.201c13.409 14.722 21.898 33.997 22.852 55.201h-61.493zm119.174 0h-17.655c-1.069-34.805-16.026-66.113-39.524-88.563L238.413 196h119.174l-84 120zm234.284 91.905c-45.514-2.092-82.216-39.219-83.815-84.752-.924-26.302 9.764-50.177 27.328-66.888l47.843 77.08c3.495 5.631 10.894 7.362 16.524 3.867l13.594-8.438c5.631-3.495 7.362-10.893 3.867-16.524l-47.351-76.287c9.012-2.809 18.641-4.205 28.626-3.928 45.797 1.27 83.314 38.07 85.418 83.837 2.379 51.775-40.258 94.413-92.034 92.033z"] };
var faBinoculars = { prefix: 'far', iconName: 'binoculars', icon: [512, 512, [], "f1e5", "M448 120c0-13.255-10.745-24-24-24h-8V56c0-13.255-10.745-24-24-24h-96c-13.255 0-24 10.745-24 24v40h-32V56c0-13.255-10.745-24-24-24h-96c-13.255 0-24 10.745-24 24v40h-8c-13.255 0-24 10.745-24 24C64 224 0 240 0 384v48c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48V300c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v132c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48v-48c0-144-64-160-64-264zM144 80h48v16h-48V80zm0 352H48v-16h96v16zm40-188.56c-23.278 8.256-40 30.487-40 56.56v68H48.315c4.254-108.291 54.27-127.742 62.662-224H184v99.44zm96-3.44h-48v-96h48v96zm40-160h48v16h-48V80zm8 163.44V144h73.022c8.396 96.302 58.41 115.764 62.662 224H368v-68c0-26.073-16.722-48.304-40-56.56zM464 432h-96v-16h96v16z"] };
var faBirthdayCake = { prefix: 'far', iconName: 'birthday-cake', icon: [448, 512, [], "f1fd", "M192 64c0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40-32-14.25-32-32zm160 32c17.75 0 32-13.5 32-40S364 0 352 0c0 41-32 33-32 64 0 17.75 14.25 32 32 32zm96 176v240H0V272c0-26.5 21.5-48 48-48h24V112h48v112h80V112h48v112h80V112h48v112h24c26.5 0 48 21.5 48 48zm-400 6v56.831c8.352 7 15.27 13.169 26.75 13.169 25.378 0 30.13-32 74.75-32 43.974 0 49.754 32 74.5 32 25.588 0 30.061-32 74.75-32 44.473 0 49.329 32 74.75 32 11.258 0 18.135-6.18 26.5-13.187v-56.805a6 6 0 0 0-6-6L54 272a6 6 0 0 0-6 6zm352 186v-80.87c-7.001 2.914-15.54 4.87-26.5 4.87-44.544 0-49.389-32-74.75-32-25.144 0-30.329 32-74.75 32-43.974 0-49.755-32-74.5-32-25.587 0-30.062 32-74.75 32-11.084 0-19.698-1.974-26.75-4.911V464h352zM96 96c17.75 0 32-13.5 32-40S108 0 96 0c0 41-32 33-32 64 0 17.75 14.25 32 32 32z"] };
var faBlind = { prefix: 'far', iconName: 'blind', icon: [384, 512, [], "f29d", "M192.913 510.276c-12.325 4.929-26.281-1.079-31.196-13.37l-50.539-126.341 22.976-71.801 72.129 180.316c4.923 12.307-1.063 26.274-13.37 31.196zM96 0C71.699 0 52 19.699 52 44s19.699 44 44 44 44-19.699 44-44S120.301 0 96 0zm12.53 140.603a4.002 4.002 0 0 1 5.605.802L219.2 281.6c5.429 7.239 15.514 8.364 22.399 3.2 7.051-5.288 8.472-15.373 3.2-22.399l-120-160c-3.14-4.188-7.939-6.385-12.8-6.386L80 96v.009c-4.69.003-9.336 2.049-12.494 5.996L0 186.388v85.161c0 8.616 6.621 16.029 15.227 16.433C24.416 288.414 32 281.093 32 272v-74.388l32-40v176.64L17.142 480.679c-4.039 12.624 2.92 26.133 15.544 30.173 12.63 4.041 26.134-2.924 30.173-15.544L128 291.746V173.333l-20.275-27.132a4.003 4.003 0 0 1 .805-5.598zm274.307 359.245L252.28 284.813a24.013 24.013 0 0 1-12.67 9.96L369.161 508.15a8 8 0 0 0 10.989 2.687 7.998 7.998 0 0 0 2.687-10.989z"] };
var faBold = { prefix: 'far', iconName: 'bold', icon: [384, 512, [], "f032", "M292 243.533c38.106-18.627 58.232-55.253 58.232-97.312 0-48.226-26.016-85.031-61.552-100.895C266.471 35.173 242.357 32 209.995 32H28c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h34.142v352H28c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h190.244c24.748 0 45.688-1.269 67.264-8.249C331.83 455.887 368 411.467 368 352.453c0-58.251-33.975-99.102-76-108.92zM125.598 84.034h84.396c19.037 0 33.631 2.538 46.323 8.884 19.32 10.948 29.491 33.661 29.183 60.18-.434 37.473-31.53 67.367-69.005 67.367h-90.897V84.034zM260.759 421.62c-12.056 5.077-27.286 6.346-39.977 6.346h-95.184V272.499h100.261c46.957 0 77.416 30.458 77.416 76.781 0 33.632-16.499 61.552-42.516 72.34z"] };
var faBolt = { prefix: 'far', iconName: 'bolt', icon: [320, 512, [], "f0e7", "M186.071 48l-38.666 144H272L120 464l54.675-208H48L67.72 48h118.351m0-48H67.72C42.965 0 22.271 18.825 19.934 43.469l-19.716 208C-2.453 279.642 19.729 304 48.004 304h64.423l-38.85 147.79C65.531 482.398 88.788 512 119.983 512c16.943 0 33.209-9.005 41.919-24.592l151.945-271.993C331.704 183.461 308.555 144 271.945 144h-61.951l22.435-83.552C240.598 30.026 217.678 0 186.071 0z"] };
var faBomb = { prefix: 'far', iconName: 'bomb', icon: [512, 512, [], "f1e2", "M384.5 144.5l56-56-17-17-56 56-52.2-52.2c-6.2-6.2-16.4-6.2-22.6 0l-28.4 28.4c-17.9-5-36.8-7.7-56.3-7.7C93.1 96 0 189.1 0 304s93.1 208 208 208 208-93.1 208-208c0-19.5-2.7-38.4-7.7-56.3l28.4-28.4c6.2-6.2 6.2-16.4 0-22.6l-52.2-52.2zm-30 89.1c7.9 28.2 13.5 43.9 13.5 70.4 0 88.4-71.6 160-160 160S48 392.4 48 304s71.6-160 160-160c26.3 0 41.4 5.4 70.4 13.5l25.6-25.6 76.1 76.1-25.6 25.6zM512 72c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12s5.4-12 12-12h24c6.6 0 12 5.4 12 12zm-60-60v24c0 6.6-5.4 12-12 12s-12-5.4-12-12V12c0-6.6 5.4-12 12-12s12 5.4 12 12zm5 43c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0 4.7 4.7 4.7 12.3 0 17l-17 17c-4.7 4.7-12.3 4.7-17 0zm-67.9-16.9c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17-4.7 4.7-12.3 4.7-17 0l-17-17zm101.8 67.8c4.7 4.7 4.7 12.3 0 17-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l17 17zM216 208c0 13.3-10.7 24-24 24-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.3 46.7-104 104-104 13.3 0 24 10.7 24 24z"] };
var faBook = { prefix: 'far', iconName: 'book', icon: [448, 512, [], "f02d", "M128 152v-32c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8zm8 88h208c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H136c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm299.1 159.7c-4.2 13-4.2 51.6 0 64.6 7.3 1.4 12.9 7.9 12.9 15.7v16c0 8.8-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c8.8 0 16 7.2 16 16v368c0 7.8-5.5 14.2-12.9 15.7zm-41.1.3H80c-17.6 0-32 14.4-32 32 0 17.7 14.3 32 32 32h314c-2.7-17.3-2.7-46.7 0-64zm6-352H80c-17.7 0-32 14.3-32 32v278.7c9.8-4.3 20.6-6.7 32-6.7h320V48z"] };
var faBookmark = { prefix: 'far', iconName: 'bookmark', icon: [384, 512, [], "f02e", "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"] };
var faBowlingBall = { prefix: 'far', iconName: 'bowling-ball', icon: [496, 512, [], "f436", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-96-296c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-16 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"] };
var faBowlingPins = { prefix: 'far', iconName: 'bowling-pins', icon: [496, 512, [], "f437", "M491 308.2c-13.4-54-49.4-87.4-53.8-132-3-30.5 21.4-53.1 18.8-95.8C453.1 34 419.5.1 376 0c-43.4.1-77 34-79.9 80.5-2.8 42.7 21.7 65.3 18.7 95.8-4.4 44.5-40.5 78.1-53.7 131.9-13 52.5.3 140.1 29.1 191.5l6.9 12.3h158.1l6.9-12.3c28.6-51.4 41.9-139.1 28.9-191.5zM408.1 83.5c1.5 24.2-14.9 43.4-18.4 76.6h-27.4c-3.5-33.4-19.9-52.2-18.4-76.6 3-47.5 61.2-47.5 64.2 0zm18.1 380.4H325.9c-18.8-42.2-27.4-107-18.2-144.2 10.7-43.1 43.5-75 52.9-127.7h31c9.4 52.7 42.2 84.6 52.9 127.7 9.1 37.2.4 102-18.3 144.2zm-245-287.6c-3-30.5 21.4-53.1 18.7-95.8C197 34 163.4.2 119.9.1 76.5.2 42.9 34 40 80.5c-2.7 42.8 21.8 65.2 18.7 95.8C54.3 221 18.4 254.2 5 308.2c-13 52.5.3 140.2 29 191.5l6.9 12.3H199l6.9-12.3c28.7-51.3 42-139 29-191.5-13.3-54-49.3-87.2-53.7-131.9zM152 83.5c1.5 24.3-14.9 43.2-18.4 76.5h-27.4c-3.5-33.5-19.9-52-18.4-76.5 3.1-47.4 61.3-47.4 64.2 0zM170.1 464H69.8C51 421.7 42.4 356.9 51.6 319.7c10.6-43 43.4-74.8 52.9-127.7h30.9c9.5 53 42.3 84.7 52.9 127.8 9.2 37.2.6 101.9-18.2 144.2z"] };
var faBox = { prefix: 'far', iconName: 'box', icon: [512, 512, [], "f466", "M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.8-10.3-2.5-15.2zm-48.1 7.4H280V48h133.4l48 144zM98.6 48H232v144H50.6l48-144zM48 464V240h416v224H48z"] };
var faBoxCheck = { prefix: 'far', iconName: 'box-check', icon: [640, 512, [], "f467", "M492.5 133.4L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h400c106 0 192-86 192-192 0-90.7-63-166.5-147.5-186.6zM280 48h133.4l26.8 80.4c-49.8 2-94.7 22.7-127.7 55.6H280V48zM98.6 48H232v136H53.3L98.6 48zM48 464V232h229.5c-13.6 26.4-21.5 56.3-21.5 88 0 57.4 25.3 108.8 65.3 144H48zm400 0c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zm64.6-205.7c-3.1-3.1-8.1-3.1-11.2 0l-69.9 69.3-30.3-30.6c-3.1-3.1-8.1-3.1-11.2 0l-18.7 18.6c-3.1 3.1-3.1 8.1 0 11.2l54.4 54.9c3.1 3.1 8.1 3.1 11.2 0l94.2-93.5c3.1-3.1 3.1-8.1 0-11.2l-18.5-18.7z"] };
var faBoxes = { prefix: 'far', iconName: 'boxes', icon: [640, 512, [], "f468", "M592 224H480V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v176H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM208 48h64v90.7l48-21.3 48 21.3V48h64v176H208V48zm88 416H48V272h80v90.7l48-21.3 48 21.3V272h72v192zm296 0H344V272h72v90.7l48-21.3 48 21.3V272h80v192z"] };
var faBoxingGlove = { prefix: 'far', iconName: 'boxing-glove', icon: [448, 512, [], "f438", "M252.4 360.8l7.2 14.3c2 4 .4 8.8-3.6 10.7L227.8 400l28.2 14.1c4 2 5.6 6.8 3.6 10.7l-7.2 14.3c-2 4-6.8 5.6-10.7 3.6L192 417.9l-49.7 24.8c-4 2-8.8.4-10.7-3.6l-7.2-14.3c-2-4-.4-8.8 3.6-10.7l28.2-14.1-28.2-14.1c-4-2-5.6-6.8-3.6-10.7l7.2-14.3c2-4 6.8-5.6 10.7-3.6l49.7 24.8 49.7-24.8c3.9-2 8.7-.4 10.7 3.5zM448 229.5c0 55.7-23.3 110.2-63.9 149.6L368 394.7v77.9c0 21.8-17.9 39.5-40 39.5H72c-22.1 0-40-17.7-40-39.5v-82.8l-17-102C5 229.5 0 170 0 111 0 49.8 50.8 0 113.2 0H288c61.8 0 112 49.8 112 111v33.2c28.8 18.1 48 49.5 48 85.3zm-48 0c0-29.5-25.1-53.5-56-53.5h-31.3c-21.5 0-40.2 17.6-40.7 39.1-.5 20.2 14.2 37.2 33.4 40.4 3.8.6 6.6 4 6.6 7.9v32.3c0 4.7-4.1 8.4-8.8 8-44.4-4.4-79.2-42-79.2-87.6 0-8.4 1.6-16.3 3.7-24h-70.5c-30.6 0-59.5-10.9-82.3-30.8-3.5-3.1-3.7-8.4-.4-11.7l11.3-11.3c3-3 7.7-3.1 10.9-.4 16.9 14.4 38.1 22.3 60.5 22.3h87.4c16.2-19.4 40.2-32 67.3-32h32c10.2 0 8 6 8-17 0-35.3-28.1-63-64-63H113.2C77.2 48 48 76.2 48 111c0 95.9 11.4 151 31.4 273H104c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H80v48h240v-48h-24c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h24c0-6.2 2.5-12.1 6.9-16.4l23.8-23.1c31.8-30.7 49.3-71.6 49.3-115z"] };
var faBraille = { prefix: 'far', iconName: 'braille', icon: [640, 512, [], "f2a1", "M112 256c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zM64 392c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0-344c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm160 184c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 160c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0-344c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm224 184c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 160c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0-344c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm160 184c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 160c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0-320c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"] };
var faBriefcase = { prefix: 'far', iconName: 'briefcase', icon: [512, 512, [], "f0b1", "M464 96H352V80c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v16H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM208 80h96v16h-96V80zM48 150a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v106H48V150zm416 276a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V304h144v36c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-36h144v122z"] };
var faBriefcaseMedical = { prefix: 'far', iconName: 'briefcase-medical', icon: [512, 512, [], "f469", "M344 288h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm120-160H352V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM208 80h96v48h-96V80zm256 378c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V182c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276z"] };
var faBrowser = { prefix: 'far', iconName: 'browser', icon: [512, 512, [], "f37e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 92c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V92zm416 334c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V168h416v258zm0-310c0 6.6-5.4 12-12 12H172c-6.6 0-12-5.4-12-12V92c0-6.6 5.4-12 12-12h280c6.6 0 12 5.4 12 12v24z"] };
var faBug = { prefix: 'far', iconName: 'bug', icon: [576, 512, [], "f188", "M536 264h-64v-94.059l40.971-40.971c9.372-9.373 9.372-24.569 0-33.941-9.373-9.372-24.568-9.372-33.941 0L438.059 136H425C425 60.87 364.091 0 289 0c-75.13 0-136 60.909-136 136h-15.059l-40.97-40.971c-9.373-9.372-24.568-9.372-33.941 0-9.373 9.373-9.373 24.569 0 33.941L104 169.941V264H40c-13.255 0-24 10.745-24 24s10.745 24 24 24h64v24c0 29.275 7.91 56.733 21.694 80.365L71.029 471.03c-9.373 9.373-9.373 24.568 0 33.941 9.371 9.372 24.568 9.373 33.941 0l51.029-51.029C184.482 480.046 222.411 496 264 496h48c41.589 0 79.518-15.954 108.001-42.058l51.029 51.029c9.372 9.372 24.568 9.373 33.941 0 9.372-9.373 9.372-24.568 0-33.941l-54.665-54.665C464.09 392.734 472 365.275 472 336v-24h64c13.255 0 24-10.745 24-24s-10.745-24-24-24zM289 48c48.601 0 88 39.399 88 88H201c0-48.601 39.399-88 88-88zm23 400V260c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v188c-61.757 0-112-50.243-112-112V184h272v152c0 61.757-50.243 112-112 112z"] };
var faBuilding = { prefix: 'far', iconName: 'building', icon: [448, 512, [], "f1ad", "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"] };
var faBullhorn = { prefix: 'far', iconName: 'bullhorn', icon: [576, 512, [], "f0a1", "M576 224c0-19.4-13.7-35.5-32-39.2V48c0-26.5-21.5-48-48-48-65 56-158 128-288 128H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h25.8c-8.1 61.1 13.3 111.5 27.5 157.3 1.2 3.7 3.2 7.1 6 9.8 36.7 36.5 127.7 34.8 153-18.3 4.7-9.9 2.1-21.6-6.2-28.6-35.6-29.9-38.1-30-29.9-44.2 5.2-9.1 3.9-20.5-3.2-28.2-9.8-10.6-4.6-38.2 11.1-46.9C349.6 329 435.1 395.5 496 448c26.5 0 48-21.5 48-48V263.2c18.3-3.7 32-19.8 32-39.2zM48 272v-96h160v96H48zm97 184.1c-14.5-45.2-31.3-86.8-22.6-136.1H174c-8.2 21.5-8.3 46.1 1.9 66.2-11 31.2 3.3 53.4 26.5 73.5-17.9 7.1-43.8 5-57.4-3.6zm351-70.6c-71.8-57.6-148.4-99.3-240-110.5V173c91.6-11.3 168.1-52.9 240-110.5v323z"] };
var faBullseye = { prefix: 'far', iconName: 'bullseye', icon: [512, 512, [], "f140", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 144c57.346 0 104 46.654 104 104s-46.654 104-104 104-104-46.654-104-104 46.654-104 104-104m0-48c-83.947 0-152 68.053-152 152s68.053 152 152 152 152-68.053 152-152-68.053-152-152-152zm0 96c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"] };
var faBurn = { prefix: 'far', iconName: 'burn', icon: [384, 512, [], "f46a", "M192 0C86.2 93.5 0 214.4 0 298.1 0 424 79 512 192 512s192-88 192-213.9c0-84-87.3-205.6-192-298.1zm0 65.2c51.4 51.1 144 158.5 144 232.9 0 29.5-5.6 55.6-15.1 78.4-3.5-74.7-83.7-157.9-128.9-208.8-45.8 51.5-125.4 133.8-128.9 208.8-9.4-22.8-15.1-49-15.1-78.4 0-74.2 92.6-181.7 144-232.9zm-18.1 397c-38.1-7.5-63.4-38.7-63.4-81.1 0-20.6 13.5-64.6 81.5-141.1 68 76.5 81.5 120.5 81.5 141.1 0 42.4-25.3 73.7-63.4 81.1-20.9 2.4-15.4 2.4-36.2 0z"] };
var faBus = { prefix: 'far', iconName: 'bus', icon: [512, 512, [], "f207", "M104 336c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40-40-17.909-40-40zm264 40c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40zm144-224v80c0 13.255-10.745 24-24 24h-8v132c0 22.976-12.987 42.966-32 53.043V488c0 13.255-10.745 24-24 24h-32c-13.255 0-24-10.745-24-24v-40H144v40c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24v-46.957C44.987 430.966 32 410.976 32 388V256h-8c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h8v-17.143C32 23.999 168.462 0 256 0c87.633 0 224 23.981 224 110.857V128h8c13.255 0 24 10.745 24 24zm-80 120H80v116c0 6.628 5.373 12 12 12h328c6.627 0 12-5.372 12-12V272zM80 144v80h352v-80H80zm4.959-48h342.082C408.349 68.456 338.869 48 256 48S103.651 68.456 84.959 96z"] };
var faCalculator = { prefix: 'far', iconName: 'calculator', icon: [448, 512, [], "f1ec", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM54 48h340c3.3 0 6 2.7 6 6v114H48V54c0-3.3 2.7-6 6-6zm340 416H54c-3.3 0-6-2.7-6-6V216h352v242c0 3.3-2.7 6-6 6zM160 268v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm96 0v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm96 0v136c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm-192 96v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm96 0v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"] };
var faCalendar = { prefix: 'far', iconName: 'calendar', icon: [448, 512, [], "f133", "M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"] };
var faCalendarAlt = { prefix: 'far', iconName: 'calendar-alt', icon: [448, 512, [], "f073", "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCalendarCheck = { prefix: 'far', iconName: 'calendar-check', icon: [448, 512, [], "f274", "M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"] };
var faCalendarEdit = { prefix: 'far', iconName: 'calendar-edit', icon: [448, 512, [], "f333", "M243.1 234.1l46.8 46.8c2 2 2 5.2 0 7.2L175.4 402.6l-48.2 5.4c-6.4.7-11.9-4.7-11.2-11.2l5.4-48.2 114.5-114.5c2-2 5.2-2 7.2 0zm83-10.8l-25.4-25.4c-7.9-7.9-20.7-7.9-28.6 0l-19.5 19.5c-2 2-2 5.2 0 7.2l46.8 46.8c2 2 5.2 2 7.2 0l19.5-19.5c7.9-7.9 7.9-20.7 0-28.6zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCalendarExclamation = { prefix: 'far', iconName: 'calendar-exclamation', icon: [448, 512, [], "f334", "M188.6 212.7l6.5 104c.4 6.3 5.6 11.3 12 11.3h33.8c6.3 0 11.6-4.9 12-11.3l6.5-104c.4-6.9-5.1-12.7-12-12.7h-46.8c-6.9 0-12.4 5.8-12 12.7zM264 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zM400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"] };
var faCalendarMinus = { prefix: 'far', iconName: 'calendar-minus', icon: [448, 512, [], "f272", "M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCalendarPlus = { prefix: 'far', iconName: 'calendar-plus', icon: [448, 512, [], "f271", "M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCalendarTimes = { prefix: 'far', iconName: 'calendar-times', icon: [448, 512, [], "f273", "M311.7 374.7l-17 17c-4.7 4.7-12.3 4.7-17 0L224 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l53.7 53.7 53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L257.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCamera = { prefix: 'far', iconName: 'camera', icon: [512, 512, [], "f030", "M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"] };
var faCameraAlt = { prefix: 'far', iconName: 'camera-alt', icon: [512, 512, [], "f332", "M256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72zm-24 72c0-13.2 10.8-24 24-24 8.8 0 16-7.2 16-16s-7.2-16-16-16c-30.9 0-56 25.1-56 56 0 8.8 7.2 16 16 16s16-7.2 16-16zm110.7-145H464v288H48V143h121.3l24-64h125.5l23.9 64zM324.3 31h-131c-20 0-37.9 12.4-44.9 31.1L136 95H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V143c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26z"] };
var faCameraRetro = { prefix: 'far', iconName: 'camera-retro', icon: [512, 512, [], "f083", "M154 80H38c-3.3 0-6-2.7-6-6V38c0-3.3 2.7-6 6-6h116c3.3 0 6 2.7 6 6v36c0 3.3-2.7 6-6 6zm358 0v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h136l33.6-44.8C226.7 39.1 240.9 32 256 32h208c26.5 0 48 21.5 48 48zm-48 64H48v288h416V144zm0-64H256l-12 16h220V80zm-88 208c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-48 0c0 39.7-32.3 72-72 72s-72-32.3-72-72 32.3-72 72-72 72 32.3 72 72zm-96 0c0-13.2 10.8-24 24-24 8.8 0 16-7.2 16-16s-7.2-16-16-16c-30.9 0-56 25.1-56 56 0 8.8 7.2 16 16 16s16-7.2 16-16z"] };
var faCapsules = { prefix: 'far', iconName: 'capsules', icon: [544, 512, [], "f46b", "M529 296.8l-111.5-193C386.8 50.4 318.6 32.2 265.3 63c-21.2 12.3-36.6 30.5-45.8 51.3C206.4 67 163.5 32 112 32 50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V214c.2.4.3.8.5 1.2l111.5 193c30.8 53.3 98.9 71.6 152.3 40.8s71.5-98.9 40.7-152.2zM176 256H48V144c0-84.7 128-84.7 128 0v112zm89.9-64.7c-42.1-73 68.2-136.7 110.3-63.7l43.8 75.8-110.3 63.7-43.8-75.8z"] };
var faCar = { prefix: 'far', iconName: 'car', icon: [512, 512, [], "f1b9", "M152 311.958c0 17.673-30.327 16-48 16s-32-14.327-32-32 14.327-32 32-32 48 30.326 48 48zm256-48c-17.673 0-48 30.327-48 48s30.327 16 48 16 32-14.327 32-32-14.327-32-32-32zm103.375-96.163l-8 24A12 12 0 0 1 491.991 200h-27.99C483.43 214.595 496 237.829 496 264v72c0 15.254-6.107 29.076-16 39.176V424c0 13.255-10.745 24-24 24h-32c-13.255 0-24-10.745-24-24v-32H112v32c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24v-48.824c-9.893-10.1-16-23.922-16-39.176v-72c0-26.171 12.57-49.404 31.999-64h-27.99a12 12 0 0 1-11.384-8.205l-8-24C-1.965 160.024 3.818 152 12.009 152H58.46l6.544-15.271A119.867 119.867 0 0 1 175.302 64h161.396a119.864 119.864 0 0 1 110.297 72.73L453.54 152h46.451c8.191 0 13.974 8.024 11.384 15.795zM96.968 184h318.063l-12.155-28.362A71.917 71.917 0 0 0 336.698 112H175.302a71.92 71.92 0 0 0-66.179 43.638L96.968 184zM456 264c0-22.056-17.944-40-40-40H96c-22.056 0-40 17.944-40 40v72c0 8.822 7.176 15.999 15.998 16h368.005c8.821-.001 15.998-7.178 15.998-16v-72zm-126 16H182a6 6 0 0 0-6 6v10c0 13.255 10.745 24 24 24h112c13.255 0 24-10.745 24-24v-10a6 6 0 0 0-6-6z"] };
var faCaretCircleDown = { prefix: 'far', iconName: 'caret-circle-down', icon: [512, 512, [], "f32d", "M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"] };
var faCaretCircleLeft = { prefix: 'far', iconName: 'caret-circle-left', icon: [512, 512, [], "f32e", "M296 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm0-48c110.5 0 200-89.5 200-200S366.5 56 256 56 56 145.5 56 256s89.5 200 200 200z"] };
var faCaretCircleRight = { prefix: 'far', iconName: 'caret-circle-right', icon: [512, 512, [], "f330", "M216 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm0 48C145.5 56 56 145.5 56 256s89.5 200 200 200 200-89.5 200-200S366.5 56 256 56z"] };
var faCaretCircleUp = { prefix: 'far', iconName: 'caret-circle-up', icon: [512, 512, [], "f331", "M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"] };
var faCaretDown = { prefix: 'far', iconName: 'caret-down', icon: [320, 512, [], "f0d7", "M272 160H48.1c-42.6 0-64.2 51.7-33.9 81.9l111.9 112c18.7 18.7 49.1 18.7 67.9 0l112-112c30-30.1 8.7-81.9-34-81.9zM160 320L48 208h224L160 320z"] };
var faCaretLeft = { prefix: 'far', iconName: 'caret-left', icon: [224, 512, [], "f0d9", "M224 367.952V144.057c0-42.638-51.731-64.151-81.941-33.941l-112 111.943c-18.745 18.745-18.746 49.137 0 67.882l112 111.952C172.208 432.042 224 410.675 224 367.952zM64 256l112-112v224L64 256z"] };
var faCaretRight = { prefix: 'far', iconName: 'caret-right', icon: [224, 512, [], "f0da", "M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"] };
var faCaretSquareDown = { prefix: 'far', iconName: 'caret-square-down', icon: [448, 512, [], "f150", "M125.1 208h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCaretSquareLeft = { prefix: 'far', iconName: 'caret-square-left', icon: [448, 512, [], "f191", "M272 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCaretSquareRight = { prefix: 'far', iconName: 'caret-square-right', icon: [448, 512, [], "f152", "M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCaretSquareUp = { prefix: 'far', iconName: 'caret-square-up', icon: [448, 512, [], "f151", "M322.9 304H125.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faCaretUp = { prefix: 'far', iconName: 'caret-up', icon: [320, 512, [], "f0d8", "M48.048 352h223.895c42.638 0 64.151-51.731 33.941-81.941l-111.943-112c-18.745-18.745-49.137-18.746-67.882 0l-111.952 112C-16.042 300.208 5.325 352 48.048 352zM160 192l112 112H48l112-112z"] };
var faCartArrowDown = { prefix: 'far', iconName: 'cart-arrow-down', icon: [576, 512, [], "f218", "M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160zm-91.923-59.515l-51.029 51.029c-4.686 4.686-12.284 4.686-16.971 0l-51.029-51.029c-7.56-7.56-2.206-20.485 8.485-20.485H312v-52c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v52h27.029c10.691 0 16.045 12.926 8.486 20.485z"] };
var faCartPlus = { prefix: 'far', iconName: 'cart-plus', icon: [576, 512, [], "f217", "M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64s64-28.654 64-64c0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM464 424c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm-256 0c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm279.438-152H184.98l-31.31-160h368.548l-34.78 160zM272 200v-16c0-6.627 5.373-12 12-12h32v-32c0-6.627 5.373-12 12-12h16c6.627 0 12 5.373 12 12v32h32c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12h-32v32c0 6.627-5.373 12-12 12h-16c-6.627 0-12-5.373-12-12v-32h-32c-6.627 0-12-5.373-12-12z"] };
var faCertificate = { prefix: 'far', iconName: 'certificate', icon: [512, 512, [], "f0a3", "M489.199 255.927c41.041-40.173 24.263-102.49-31.145-116.634C473.43 85.289 427.935 38 372.589 53.775 358.41-1.828 295.346-17.915 256 22.621 242.445 8.655 226.954.019 205.706.018c-29.388-.001-57.144 17.868-66.295 53.757-54.95-15.663-100.976 31.042-85.465 85.518-55.295 14.115-72.274 76.374-31.145 116.634-40.946 40.08-24.367 102.464 31.145 116.634-15.512 54.481 30.59 101.158 85.465 85.518C153.747 514.3 216.434 529.714 256 489.25c39.511 40.408 102.326 24.759 116.589-31.171 55.007 15.678 100.937-31.177 85.465-85.518 55.295-14.115 72.274-76.374 31.145-116.634zm-31.205 36.574c11.133 10.539 5.95 29.28-8.665 32.775l-50.903 12.992 14.349 50.387c4.055 14.491-9.607 28.165-24.099 24.108l-50.37-14.354-12.987 50.92c-3.525 14.75-22.608 19.626-32.764 8.668L256 420.621l-36.554 37.376c-10.263 10.849-29.158 6.421-32.764-8.668l-12.987-50.92-50.37 14.354c-14.489 4.056-28.154-9.615-24.099-24.108l14.349-50.387-50.903-12.992c-14.609-3.494-19.803-22.231-8.665-32.775l37.363-36.566-37.363-36.566c-11.133-10.539-5.95-29.28 8.665-32.775l50.903-12.992-14.349-50.387c-4.054-14.49 9.605-28.166 24.099-24.108l50.37 14.354 12.987-50.92c3.476-14.546 22.503-19.514 32.764-8.668L256 91.525l36.554-37.652c10.382-10.974 29.328-5.71 32.764 8.668l12.987 50.92 50.37-14.354c14.488-4.056 28.154 9.615 24.099 24.108l-14.349 50.387 50.903 12.992c14.609 3.494 19.802 22.231 8.665 32.775l-37.363 36.566 37.364 36.566z"] };
var faChartArea = { prefix: 'far', iconName: 'chart-area', icon: [512, 512, [], "f1fe", "M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zM372 128.7l-84 56-85.1-85.1c-5.5-5.5-14.8-4.4-18.8 2.3L96 256v96h384l-90.3-218.1c-3-6.9-11.5-9.4-17.7-5.2zM144 269.3l57.5-103.2 80.4 80.4c71.8-47.9 8.2-5.4 80.7-53.8L407.2 304H144v-34.7z"] };
var faChartBar = { prefix: 'far', iconName: 'chart-bar', icon: [512, 512, [], "f080", "M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zm-356-60v-72c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V140c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v200c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V204c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v136c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V108c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v232c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"] };
var faChartLine = { prefix: 'far', iconName: 'chart-line', icon: [512, 512, [], "f201", "M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zM468 96H332c-10.7 0-16 12.9-8.5 20.5l52 52L288 256l-64-64L79 334.1l34 33.9 111-110.1 64 62.1 120.8-118.2 50.7 50.7c7.6 7.6 20.5 2.2 20.5-8.5V108c0-6.6-5.4-12-12-12z"] };
var faChartPie = { prefix: 'far', iconName: 'chart-pie', icon: [544, 512, [], "f200", "M280 48c101.6 0 184 82.4 184 184H280V48m-48 48v184l130.1 130.1C328.8 443.4 282.8 464 232 464c-101.6 0-184-82.4-184-184S130.4 96 232 96m264 184c0 49.9-19 99.8-57.1 137.9L301 280h195M232 12v36C103.9 48 0 151.8 0 280c0 128.1 103.8 232 232 232 62.1 0 120.7-24.6 164.1-67.9l.6-.6 8.3 8.3 25.5 25.5c4.7 4.7 12.3 4.7 17 0l25.5-25.5c46-46 71.2-107.6 71.2-171.8v-36c0-6.6-5.4-12-12-12h-20c0-31.3-6.1-61.7-18.3-90.3C471 87.8 427.5 42.4 370.3 18.3 341.7 6.1 311.3 0 280 0h-36c-6.6 0-12 5.4-12 12z"] };
var faCheck = { prefix: 'far', iconName: 'check', icon: [512, 512, [], "f00c", "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"] };
var faCheckCircle = { prefix: 'far', iconName: 'check-circle', icon: [512, 512, [], "f058", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"] };
var faCheckSquare = { prefix: 'far', iconName: 'check-square', icon: [448, 512, [], "f14a", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"] };
var faChess = { prefix: 'far', iconName: 'chess', icon: [512, 512, [], "f439", "M402.239 354.24H365.76v-36.481c0-10.073 8.166-18.239 18.239-18.239s18.239 8.166 18.239 18.239v36.481zM512 434.098V500c0 6.627-5.373 12-12 12H268c-6.627 0-12-5.373-12-12 0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-64.193c0-4.242 2.239-8.169 5.89-10.328L24 414.766V388c0-6.627 5.373-12 12-12h14.954c11.649-40.3 11.203-84.904 10.943-110.208L61.878 264H36c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h18.631l-29.652-88.365C19.761 112.086 31.331 96 47.732 96h54.492V68.766H82.4a5.98 5.98 0 0 1-5.979-5.98V40.363a5.98 5.98 0 0 1 5.979-5.98h28.42V5.98A5.98 5.98 0 0 1 116.799 0h22.424a5.98 5.98 0 0 1 5.979 5.98v28.403h28.388a5.98 5.98 0 0 1 5.979 5.98v22.403a6 6 0 0 1-6 6h-19.771V96h54.46c16.401 0 27.97 16.084 22.754 31.634L201.366 216H220c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-25.865l-.014 1.741c-.214 27.219-.546 70.647 10.926 110.259H220c6.627 0 12 5.373 12 12v26.766l18.11 10.713a12 12 0 0 1 5.89 10.328v-1.708c0-3.721 1.727-7.232 4.674-9.504l13.679-10.545V388c0-6.627 5.373-12 12-12h5.528c6.61-33.066 7.377-60.888 7.382-79.44l-29.916-19.932a12 12 0 0 1-5.347-9.986V184c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v82.641c0 4.013-2.006 7.761-5.347 9.986l-29.913 19.93c.008 18.59.778 46.446 7.376 79.442h5.531c6.627 0 12 5.373 12 12v26.05l13.679 10.545a12.002 12.002 0 0 1 4.674 9.504zM81.102 144l24.16 72h45.476l24.156-72H81.102zm19.459 232h54.868c-9.847-41.899-9.52-83.513-9.307-110.637l.011-1.363H109.88l.014 1.3c.259 25.299.697 67.937-9.333 110.7zM208 456.338l-24-14.197V424H72v18.141l-24 14.197V464h160v-7.662zm104-208.97l35.157 23.423.043 12.797c.004 1.348.015 2.796.025 4.34.127 18.333.344 49.335-6.494 88.072h86.534c-6.823-38.673-6.614-69.729-6.49-88.094.011-1.534.021-2.975.024-4.315l.042-12.799L456 247.368V208h-25v24.64h-30V208h-34v24.64h-30V208h-25v39.368zm152 204.435l-18.353-14.147V424H322.353v13.655L304 451.803V464h160v-12.197z"] };
var faChessBishop = { prefix: 'far', iconName: 'chess-bishop', icon: [320, 512, [], "f43a", "M0 295.873c0-73.645 55.103-182.382 113.211-223.006C102.813 65.644 96 53.62 96 40c0-22.091 17.909-40 40-40h47.795c22.091 0 40 17.909 40 40 0 13.57-6.764 25.554-17.098 32.786C265.002 113.449 320 222.407 320 295.873c0 57.184-25.676 87.138-63.999 100.303V448H64v-51.827c-38.316-13.166-64-43.12-64-100.3zm48 0c0 53.698 27.608 54.983 64 62.139V400h96.001v-41.987c36.694-7.213 64.01-8.644 64.01-62.14 0-22.768-7.446-52.217-20.103-81.84l-74.452 74.452c-4.686 4.686-12.284 4.686-16.971 0l-16.971-16.971c-4.686-4.686-4.686-12.284 0-16.971l85.202-85.202v-.001c-29.014-46.844-56.45-65.34-68.711-65.34C124.074 104 48 218.228 48 295.873zM320 500v-24c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12z"] };
var faChessBishopAlt = { prefix: 'far', iconName: 'chess-bishop-alt', icon: [256, 512, [], "f43b", "M232 414.766V388c0-6.627-5.373-12-12-12h-10.675c-11.786-30.064-11.672-59.502-11.52-80H212c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-14.18v-4.097c15.918-9.469 29.795-27.12 29.795-59.87 0-46.282-35.15-114.214-72.942-136.203 11.926-1.396 21.182-11.529 21.182-23.83 0-13.255-10.745-24-24-24H104C90.745 0 80 10.745 80 24c0 12.339 9.313 22.498 21.292 23.844-38.336 22.329-72.924 90.666-72.924 136.189 0 32.748 13.875 50.397 29.79 59.867v4.1H44c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h14.209c.194 19.143.424 49.368-11.567 80H36c-6.627 0-12 5.373-12 12v26.766L5.89 425.478A12 12 0 0 0 0 435.807V500c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12v-64.193c0-4.242-2.239-8.169-5.89-10.328L232 414.766zM76.368 184.033c0-34.908 34.265-91.077 51.625-95.965 3.645 1.023 13.47 8.173 24.775 24.536l-31.839 31.84a6 6 0 0 0 0 8.485l14.142 14.142a6 6 0 0 0 8.485 0l25.321-25.321c6.733 15.482 10.738 30.823 10.738 42.283 0 20.655-5.449 19.125-29.795 25.979V248h-43.662v-37.988c-24.334-6.853-29.79-5.32-29.79-25.979zM106.212 296h43.591c-.09 12.449-1.143 45.121 8.891 80H97.26c9.288-32.308 9.136-61.727 8.952-80zM208 464H48v-7.662l24-14.197V424h112v18.141l24 14.197V464z"] };
var faChessBoard = { prefix: 'far', iconName: 'chess-board', icon: [512, 512, [], "f43c", "M0 0v512h512V0H0zm464 464H48V48h416v416zm-336-16H64v-64h64v64zm64-64h64v64h-64v-64zm128 0h64v64h-64v-64zm-128 0h-64v-64h64v64zm128-64v64h-64v-64h64zm64 64v-64h64v64h-64zM128 256v64H64v-64h64zm128 64h-64v-64h64v64zm64-64h64v64h-64v-64zm-128 0h-64v-64h64v64zm64 0v-64h64v64h-64zm128 0v-64h64v64h-64zM128 128v64H64v-64h64zm64 64v-64h64v64h-64zm128 0v-64h64v64h-64zm-128-64h-64V64h64v64zm128 0h-64V64h64v64zm128 0h-64V64h64v64z"] };
var faChessClock = { prefix: 'far', iconName: 'chess-clock', icon: [640, 512, [], "f43d", "M600 128h-84c6.627 0 12-5.373 12-12V92c0-6.627-5.373-12-12-12H412c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12H200V80h28c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H124c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h28v48H40c-22.091 0-40 17.909-40 40v272c0 22.091 17.909 40 40 40h560c22.091 0 40-17.909 40-40V168c0-22.091-17.909-40-40-40zm-8 304H48V176h544v256zm-416-16c61.856 0 112-50.144 112-112s-50.144-112-112-112S64 242.144 64 304s50.144 112 112 112zm-16-180c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12v-72zm304 180c61.856 0 112-50.144 112-112s-50.144-112-112-112-112 50.144-112 112 50.144 112 112 112zm-14.142-120.485l50.911-50.911c4.687-4.686 12.284-4.686 16.971 0l5.656 5.656c4.687 4.686 4.687 12.284 0 16.971l-50.911 50.911c-4.687 4.686-12.284 4.686-16.971 0l-5.656-5.656c-4.686-4.687-4.686-12.285 0-16.971z"] };
var faChessClockAlt = { prefix: 'far', iconName: 'chess-clock-alt', icon: [640, 512, [], "f43e", "M600 128H488V80h28c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H412c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h28v48H228c6.627 0 12-5.373 12-12V92c0-6.627-5.373-12-12-12H124c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12H40c-22.091 0-40 17.909-40 40v272c0 22.091 17.909 40 40 40h560c22.091 0 40-17.909 40-40V168c0-22.091-17.909-40-40-40zm-8 304H48V176h544v256zm-128-16c61.856 0 112-50.144 112-112s-50.144-112-112-112-112 50.144-112 112 50.144 112 112 112zm-16-180c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12v-72zM176 416c61.856 0 112-50.144 112-112s-50.144-112-112-112S64 242.144 64 304s50.144 112 112 112zm-14.142-120.485l50.911-50.911c4.687-4.686 12.284-4.686 16.971 0l5.656 5.656c4.687 4.686 4.687 12.284 0 16.971l-50.911 50.911c-4.687 4.686-12.284 4.686-16.971 0l-5.656-5.656c-4.686-4.687-4.686-12.285 0-16.971z"] };
var faChessKing = { prefix: 'far', iconName: 'chess-king', icon: [448, 512, [], "f43f", "M416 476v24c0 6.627-5.373 12-12 12H44c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12zm29.705-270.741L360.418 448H87.582L2.295 205.259C-6.846 179.244 12.459 152 40.033 152H200v-48h-50a6 6 0 0 1-6-6V62a6 6 0 0 1 6-6h50V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v50h50a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-50v48h159.967c27.574 0 46.879 27.244 37.738 53.259zM396.677 200H51.323l70.27 200h204.813l70.271-200z"] };
var faChessKingAlt = { prefix: 'far', iconName: 'chess-king-alt', icon: [256, 512, [], "f440", "M232 414.766V388c0-6.627-5.373-12-12-12h-14.953c-11.472-39.612-11.14-83.039-10.926-110.259l.013-1.741H220c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-18.634l29.647-88.366C236.23 112.084 224.66 96 208.259 96h-54.461V68.766h19.771a6 6 0 0 0 6-6V40.363a5.98 5.98 0 0 0-5.98-5.98h-28.388V5.98a5.98 5.98 0 0 0-5.98-5.98H116.8a5.98 5.98 0 0 0-5.98 5.98v28.403H82.401a5.98 5.98 0 0 0-5.98 5.98v22.424a5.98 5.98 0 0 0 5.98 5.98h19.824V96H47.732c-16.402 0-27.971 16.086-22.753 31.635L54.631 216H36c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h25.878l.018 1.792c.26 25.304.707 69.908-10.942 110.208H36c-6.627 0-12 5.373-12 12v26.766L5.89 425.478A12 12 0 0 0 0 435.807V500c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12v-64.193c0-4.242-2.239-8.169-5.89-10.328L232 414.766zM174.894 144l-24.156 72h-45.476l-24.16-72h93.792zm-65 121.3l-.014-1.3h36.253l-.011 1.363c-.213 27.124-.54 68.737 9.307 110.637h-54.868c10.03-42.763 9.592-85.401 9.333-110.7zM208 464H48v-7.662l24-14.197V424h112v18.141l24 14.197V464z"] };
var faChessKnight = { prefix: 'far', iconName: 'chess-knight', icon: [384, 512, [], "f441", "M160 80c79.529 0 144 64.471 144 144v176H80v-2.334a47.998 47.998 0 0 1 26.534-42.932l58.933-29.466A48.003 48.003 0 0 0 192 282.334V208l-35.295 11.765a23.997 23.997 0 0 0-15.772 17.271l-11.645 49.493a11.998 11.998 0 0 1-6.314 7.984l-13.995 6.997a12.005 12.005 0 0 1-10.094.297l-43.612-18.691A12 12 0 0 1 48 272.086V143.858a24 24 0 0 1 9.884-19.41L64 120 51.213 94.426C48.145 88.291 52.228 80 60.129 80H160m0-48H60.129c-42 0-69.668 43.12-53.176 81.05A71.95 71.95 0 0 0 0 143.858v128.229a59.932 59.932 0 0 0 36.364 55.148l18.695 8.012C32.62 361.476 32 390.024 32 397.666V448h320V224c0-105.975-85.884-192-192-192zm224 468v-24c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zM84 144c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"] };
var faChessKnightAlt = { prefix: 'far', iconName: 'chess-knight-alt', icon: [320, 512, [], "f442", "M296 410.288V224.5c0-82.887-65.839-160.3-160.398-160.5H58.289C17.846 64-7.273 102.702 4.46 137.958A66.636 66.636 0 0 0 0 161.889v100.179c0 20.98 11.313 42.679 36.616 53.525A85.427 85.427 0 0 0 24 360.294v49.994L5.906 420.954A11.999 11.999 0 0 0 0 431.292V500c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12v-68.708c0-4.248-2.246-8.18-5.906-10.338L296 410.288zM72 360.294a37.501 37.501 0 0 1 20.882-33.617l46.236-23.104A37.501 37.501 0 0 0 160 269.956V212l-27.074 9.191a18.75 18.75 0 0 0-12.322 13.493l-9.098 38.666a9.376 9.376 0 0 1-4.933 6.238l-10.934 5.467a9.378 9.378 0 0 1-7.886.232l-34.071-14.602A9.375 9.375 0 0 1 48 262.068V161.889a18.751 18.751 0 0 1 7.722-15.164l4.778-3.475s-6.015-12.03-9.938-19.163c-3.125-5.683 1.309-12.489 7.727-12.489h.019l77.193.163C197.67 111.893 248 162.329 248 224.5V360l-16 16H88l-16-15.706zM272 464H48v-12.141l24-14.147V424h176v13.712l24 14.147V464zM93.63 180.444c0 9-7.296 16.296-16.296 16.296s-16.296-7.296-16.296-16.296 7.296-16.296 16.296-16.296 16.296 7.296 16.296 16.296z"] };
var faChessPawn = { prefix: 'far', iconName: 'chess-pawn', icon: [320, 512, [], "f443", "M320 476v24c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h296c6.627 0 12 5.373 12 12zM40 448s38.248-51.057 51.523-144H56c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h25.703C60.92 235.656 48 207.31 48 176c0-61.757 50.243-112 112-112s112 50.243 112 112c0 31.31-12.92 59.656-33.703 80H264c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-35.523C241.752 396.943 280 448 280 448H40zm162.965-48c-15.715-43.507-21.999-83.472-24.708-112h-36.514c-2.709 28.531-8.993 68.495-24.708 112h85.93zM96 176c0 35.29 28.71 64 64 64s64-28.71 64-64-28.71-64-64-64-64 28.71-64 64z"] };
var faChessPawnAlt = { prefix: 'far', iconName: 'chess-pawn-alt', icon: [320, 512, [], "f444", "M296 410.288V388c0-6.627-5.373-12-12-12h-35.469c-12.526-36.287-14.467-69.215-14.665-96H252c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-10.08c14.397-18.387 22.75-41.722 22.038-66.989-1.535-54.425-45.449-98.828-99.855-100.932C104.897 61.79 56 109.292 56 168c0 24.116 8.253 46.34 22.08 64H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.153c-.158 25.878-2.089 59.407-14.691 96H36c-6.627 0-12 5.373-12 12v22.288L5.906 420.954A11.999 11.999 0 0 0 0 431.292V500c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12v-68.708c0-4.248-2.246-8.18-5.906-10.338L296 410.288zM160 112c30.879 0 56 25.122 56 56s-25.121 56-56 56-56-25.122-56-56 25.121-56 56-56zm-25.846 168h51.709c.178 25.998 1.867 59.07 12.364 96h-76.479c10.574-37.307 12.262-70.86 12.406-96zM272 464H48v-12.141l24-14.147V424h176v13.712l24 14.147V464z"] };
var faChessQueen = { prefix: 'far', iconName: 'chess-queen', icon: [512, 512, [], "f445", "M64 500v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12zm191.579-388c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zM112 448L6.986 190.552a12 12 0 0 1 5.51-15.145l39.179-20.679c5.642-2.978 12.634-1.027 15.899 4.453 10.608 17.8 23.735 38.025 44.425 38.025 28.753 0 30.635-19.898 31.688-57.539.182-6.493 5.5-11.667 11.995-11.667h41.005c5.175 0 9.754 3.328 11.388 8.238 8.89 26.709 26.074 40.992 47.925 40.992s39.034-14.283 47.924-40.992c1.634-4.91 6.213-8.238 11.388-8.238h41.006c6.494 0 11.812 5.172 11.995 11.664 1.062 37.738 2.973 57.542 31.686 57.542 21.318 0 35.449-22.285 44.065-37.802 3.166-5.702 10.314-7.815 16.082-4.77l39.357 20.773a12 12 0 0 1 5.51 15.145L400 448H112zM77.96 237.46L144.26 400h223.48l66.304-162.55c-37.654 17.908-91.742 6.272-107.557-44.594-37.73 43.31-103.293 43.247-140.969.005-15.977 51.33-70.334 62.305-107.558 44.599z"] };
var faChessQueenAlt = { prefix: 'far', iconName: 'chess-queen-alt', icon: [256, 512, [], "f446", "M99.824 28c0-15.464 12.536-28 28-28s28 12.536 28 28-12.536 28-28 28-28-12.536-28-28zM250.11 425.478a12 12 0 0 1 5.89 10.328V500c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-64.193c0-4.242 2.239-8.169 5.89-10.328L24 414.766V388c0-6.627 5.373-12 12-12h14.712c11.897-42.774 11.446-90.127 11.184-116.942L61.867 256H36c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h13.233L3.669 95.225a6 6 0 0 1 2.762-7.554l19.561-10.324a5.99 5.99 0 0 1 2.801-.696 5.983 5.983 0 0 1 5.146 2.918c5.295 8.886 11.848 18.98 22.176 18.98 14.35 0 15.293-9.928 15.819-28.709A6.003 6.003 0 0 1 77.931 64h20.458a6.001 6.001 0 0 1 5.688 4.113c4.438 13.333 13.016 20.464 23.925 20.464 10.908 0 19.486-7.13 23.925-20.464a6 6 0 0 1 5.688-4.114h20.459a6.005 6.005 0 0 1 5.998 5.839c.53 18.829 1.488 28.71 15.818 28.71 10.635 0 17.687-11.109 21.989-18.855a5.998 5.998 0 0 1 8.046-2.395l19.649 10.371a6 6 0 0 1 2.763 7.553L206.798 208H220c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-25.857l-.022 3.01c-.216 28.846-.55 74.941 11.168 116.99H220c6.627 0 12 5.373 12 12v26.766l18.11 10.712zM75.118 143.933L101.003 208h54.03l25.869-64.063c-9.146-2.64-17.295-7.22-24.02-13.469-8.844 3.984-18.586 6.11-28.88 6.11s-20.035-2.125-28.879-6.11c-6.721 6.246-14.865 10.824-24.005 13.465zM100.227 376h55.537c-10.189-44.325-9.856-88.614-9.642-117.35l.02-2.65H109.87l.024 2.589c.261 26.791.704 72.194-9.667 117.411zM208 456.338l-24-14.197V424H72v18.141l-24 14.197V464h160v-7.662z"] };
var faChessRook = { prefix: 'far', iconName: 'chess-rook', icon: [384, 512, [], "f447", "M31.892 448h320.197C315.718 337.179 319.802 277.193 320 240l40.971-40.971A23.999 23.999 0 0 0 368 182.058V56c0-13.255-10.745-24-24-24H40c-13.255 0-24 10.745-24 24v126.059a23.998 23.998 0 0 0 7.029 16.97L64 240.001c.204 36.961 4.295 96.765-32.108 207.999zM64 80h40v48h48V80h80v48h48V80h40v92.118l-47.894 47.894s-.16 25.561-.202 28.769c-.405 30.978-1.027 78.466 16.548 151.219H95.503c17.634-73.001 17.004-120.401 16.594-151.307-.042-3.18-.207-28.683-.207-28.683L64 172.118V80zm156 208h-56v-56c0-15.464 12.536-28 28-28s28 12.536 28 28v56zm164 188v24c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12z"] };
var faChessRookAlt = { prefix: 'far', iconName: 'chess-rook-alt', icon: [320, 512, [], "f448", "M183.999 312h-47.998v-48.421c0-13.023 10.557-23.579 23.58-23.579h.839c13.023 0 23.58 10.557 23.58 23.579V312zm130.095 108.954A11.999 11.999 0 0 1 320 431.292V500c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-68.708c0-4.248 2.246-8.18 5.906-10.338L24 410.288V388c0-6.627 5.373-12 12-12h8.854c5.067-24.814 11.338-67.806 11.2-140.421l-31.047-24.838A24 24 0 0 1 16 192V88c0-13.255 10.745-24 24-24h240c13.255 0 24 10.745 24 24v104a24 24 0 0 1-9.007 18.741l-31.045 24.836c-.124 72.705 6.135 115.652 11.194 140.423H284c6.627 0 12 5.373 12 12v22.288l18.094 10.666zM93.592 376h132.812c-11.756-65.261-10.504-125.159-10.368-163.564L256 180.465V112h-32v40h-40v-40h-48v40H96v-40H64v68.465l39.963 31.97c.136 37.627 1.493 97.712-10.371 163.565zM272 451.859l-24-14.147V424H72v13.712l-24 14.147V464h224v-12.141z"] };
var faChevronCircleDown = { prefix: 'far', iconName: 'chevron-circle-down', icon: [512, 512, [], "f13a", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm8.5-107.5l122.8-122.8c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L256 277.8l-91.7-91.7c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17l122.8 122.8c4.7 4.7 12.3 4.7 17 0z"] };
var faChevronCircleLeft = { prefix: 'far', iconName: 'chevron-circle-left', icon: [512, 512, [], "f137", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm107.5-8.5l122.8-122.8c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L234.2 256l91.7 91.7c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L163.5 264.5c-4.7-4.7-4.7-12.3 0-17z"] };
var faChevronCircleRight = { prefix: 'far', iconName: 'chevron-circle-right', icon: [512, 512, [], "f138", "M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-107.5 8.5L225.7 387.3c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l91.7-91.7-91.7-91.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l122.8 122.8c4.7 4.7 4.7 12.3 0 17z"] };
var faChevronCircleUp = { prefix: 'far', iconName: 'chevron-circle-up', icon: [512, 512, [], "f139", "M264.5 163.5l122.8 122.8c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 234.2l-91.7 91.7c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l122.8-122.8c4.7-4.7 12.3-4.7 17 0zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"] };
var faChevronDoubleDown = { prefix: 'far', iconName: 'chevron-double-down', icon: [448, 512, [], "f322", "M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"] };
var faChevronDoubleLeft = { prefix: 'far', iconName: 'chevron-double-left', icon: [448, 512, [], "f323", "M390.3 473.9L180.9 264.5c-4.7-4.7-4.7-12.3 0-17L390.3 38.1c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L246.4 256l180.7 181.1c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0zm-143 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L86.4 256 267.1 74.9c4.7-4.7 4.7-12.3 0-17l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L20.9 247.5c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0z"] };
var faChevronDoubleRight = { prefix: 'far', iconName: 'chevron-double-right', icon: [448, 512, [], "f324", "M57.7 38.1l209.4 209.4c4.7 4.7 4.7 12.3 0 17L57.7 473.9c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L201.6 256 20.9 74.9c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0zm143 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L361.6 256 180.9 437.1c-4.7 4.7-4.7 12.3 0 17l19.8 19.8c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17L217.7 38.1c-4.7-4.7-12.3-4.7-17 0z"] };
var faChevronDoubleUp = { prefix: 'far', iconName: 'chevron-double-up', icon: [448, 512, [], "f325", "M6.1 422.3l209.4-209.4c4.7-4.7 12.3-4.7 17 0l209.4 209.4c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L224 278.4 42.9 459.1c-4.7 4.7-12.3 4.7-17 0L6.1 439.3c-4.7-4.7-4.7-12.3 0-17zm0-143l19.8 19.8c4.7 4.7 12.3 4.7 17 0L224 118.4l181.1 180.7c4.7 4.7 12.3 4.7 17 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L232.5 52.9c-4.7-4.7-12.3-4.7-17 0L6.1 262.3c-4.7 4.7-4.7 12.3 0 17z"] };
var faChevronDown = { prefix: 'far', iconName: 'chevron-down', icon: [448, 512, [], "f078", "M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"] };
var faChevronLeft = { prefix: 'far', iconName: 'chevron-left', icon: [256, 512, [], "f053", "M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"] };
var faChevronRight = { prefix: 'far', iconName: 'chevron-right', icon: [256, 512, [], "f054", "M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"] };
var faChevronSquareDown = { prefix: 'far', iconName: 'chevron-square-down', icon: [448, 512, [], "f329", "M215.5 348.5L92.7 225.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l91.7 91.7 91.7-91.7c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L232.5 348.5c-4.7 4.7-12.3 4.7-17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faChevronSquareLeft = { prefix: 'far', iconName: 'chevron-square-left', icon: [448, 512, [], "f32a", "M131.5 247.5l122.8-122.8c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L202.2 256l91.7 91.7c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L131.5 264.5c-4.7-4.7-4.7-12.3 0-17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faChevronSquareRight = { prefix: 'far', iconName: 'chevron-square-right', icon: [448, 512, [], "f32b", "M316.5 264.5L193.7 387.3c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l91.7-91.7-91.7-91.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l122.8 122.8c4.7 4.7 4.7 12.3 0 17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faChevronSquareUp = { prefix: 'far', iconName: 'chevron-square-up', icon: [448, 512, [], "f32c", "M232.5 163.5l122.8 122.8c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L224 234.2l-91.7 91.7c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l122.8-122.8c4.7-4.7 12.3-4.7 17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faChevronUp = { prefix: 'far', iconName: 'chevron-up', icon: [448, 512, [], "f077", "M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z"] };
var faChild = { prefix: 'far', iconName: 'child', icon: [448, 512, [], "f1ae", "M410.947 101.089c-22.433-22.431-55.179-26.458-81.062-14.53C320.167 38.057 277.177 0 224 0c-53.179 0-96.168 38.06-105.885 86.559-25.929-11.95-58.664-7.866-81.06 14.527-28.074 28.075-28.074 73.752-.003 101.825L96 261.823V440c0 39.701 32.299 72 72 72h8c18.423 0 35.253-6.955 48-18.378C236.747 505.045 253.577 512 272 512h8c39.701 0 72-32.299 72-72V261.823l58.946-58.912c28.072-28.073 28.072-73.75.001-101.822zM224 48c33.137 0 60 26.863 60 60s-26.863 60-60 60-60-26.863-60-60 26.863-60 60-60zm152.971 120.971L304 241.941V440c0 13.255-10.745 24-24 24h-8c-13.255 0-24-10.745-24-24v-96h-48v96c0 13.255-10.745 24-24 24h-8c-13.255 0-24-10.745-24-24V241.941L71.029 168.97c-9.372-9.373-9.372-24.569 0-33.942 9.373-9.372 24.568-9.372 33.941 0L177.941 208h92.117l72.971-72.971c9.373-9.372 24.568-9.372 33.941 0 9.373 9.373 9.373 24.569.001 33.942z"] };
var faCircle = { prefix: 'far', iconName: 'circle', icon: [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"] };
var faCircleNotch = { prefix: 'far', iconName: 'circle-notch', icon: [512, 512, [], "f1ce", "M288 28.977v16.391c0 7.477 5.182 13.945 12.474 15.598C389.568 81.162 456 160.742 456 256c0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-95.244 66.422-174.837 155.526-195.034C218.818 59.313 224 52.845 224 45.368V28.981c0-10.141-9.322-17.76-19.246-15.675C91.959 37.004 7.373 137.345 8.004 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-119.349-84.308-219.003-196.617-242.665C297.403 11.232 288 18.779 288 28.977z"] };
var faClipboard = { prefix: 'far', iconName: 'clipboard', icon: [384, 512, [], "f328", "M336 64h-80c0-35.29-28.71-64-64-64s-64 28.71-64 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h42v36c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-36h42a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zM192 40c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24"] };
var faClipboardCheck = { prefix: 'far', iconName: 'clipboard-check', icon: [384, 512, [], "f46c", "M269.3 225.8c-3.9-3.9-10.2-3.9-14.1-.1l-88 87.3-38.1-38.5c-3.9-3.9-10.2-3.9-14.1-.1l-23.6 23.4c-3.9 3.9-3.9 10.2-.1 14.1l68.5 69.1c3.9 3.9 10.2 3.9 14.1.1l118.6-117.6c3.9-3.9 3.9-10.2.1-14.1l-23.3-23.6zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"] };
var faClipboardList = { prefix: 'far', iconName: 'clipboard-list', icon: [384, 512, [], "f46d", "M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"] };
var faClock = { prefix: 'far', iconName: 'clock', icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"] };
var faClone = { prefix: 'far', iconName: 'clone', icon: [512, 512, [], "f24d", "M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"] };
var faClosedCaptioning = { prefix: 'far', iconName: 'closed-captioning', icon: [512, 512, [], "f20a", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z"] };
var faCloud = { prefix: 'far', iconName: 'cloud', icon: [640, 512, [], "f0c2", "M272 80c53.473 0 99.279 32.794 118.426 79.363C401.611 149.793 416.125 144 432 144c35.346 0 64 28.654 64 64 0 11.829-3.222 22.9-8.817 32.407A96.998 96.998 0 0 1 496 240c53.019 0 96 42.981 96 96s-42.981 96-96 96H160c-61.856 0-112-50.144-112-112 0-56.428 41.732-103.101 96.014-110.859-.003-.381-.014-.76-.014-1.141 0-70.692 57.308-128 128-128m0-48c-84.587 0-155.5 59.732-172.272 139.774C39.889 196.13 0 254.416 0 320c0 88.374 71.642 160 160 160h336c79.544 0 144-64.487 144-144 0-61.805-39.188-115.805-96.272-135.891C539.718 142.116 491.432 96 432 96c-7.558 0-15.051.767-22.369 2.262C377.723 58.272 328.091 32 272 32z"] };
var faCloudDownload = { prefix: 'far', iconName: 'cloud-download', icon: [640, 512, [], "f0ed", "M272 80c53.473 0 99.279 32.794 118.426 79.363C401.611 149.793 416.125 144 432 144c35.346 0 64 28.654 64 64 0 11.829-3.222 22.9-8.817 32.407A96.998 96.998 0 0 1 496 240c53.019 0 96 42.981 96 96s-42.981 96-96 96H160c-61.856 0-112-50.144-112-112 0-56.428 41.732-103.101 96.014-110.859-.003-.381-.014-.76-.014-1.141 0-70.692 57.308-128 128-128m0-48c-84.587 0-155.5 59.732-172.272 139.774C39.889 196.13 0 254.416 0 320c0 88.374 71.642 160 160 160h336c79.544 0 144-64.487 144-144 0-61.805-39.188-115.805-96.272-135.891C539.718 142.116 491.432 96 432 96c-7.558 0-15.051.767-22.369 2.262C377.723 58.272 328.091 32 272 32zm-8 140v139.465l-54.545-55.762c-4.671-4.775-12.341-4.817-17.064-.094l-16.877 16.877c-4.686 4.686-4.686 12.284 0 16.971l104 104c4.686 4.686 12.284 4.686 16.971 0l104-104c4.686-4.686 4.686-12.284 0-16.971l-16.877-16.877c-4.723-4.723-12.393-4.681-17.064.094L312 311.465V172c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12z"] };
var faCloudDownloadAlt = { prefix: 'far', iconName: 'cloud-download-alt', icon: [640, 512, [], "f381", "M272 32c-84.587 0-155.5 59.732-172.272 139.774C39.889 196.13 0 254.416 0 320c0 88.374 71.642 160 160 160h336c79.544 0 144-64.487 144-144 0-61.805-39.188-115.805-96.272-135.891C539.718 142.116 491.432 96 432 96c-7.558 0-15.051.767-22.369 2.262C377.723 58.272 328.091 32 272 32zm0 48c53.473 0 99.279 32.794 118.426 79.363C401.611 149.793 416.125 144 432 144c35.346 0 64 28.654 64 64 0 11.829-3.222 22.9-8.817 32.407A96.998 96.998 0 0 1 496 240c53.019 0 96 42.981 96 96s-42.981 96-96 96H160c-61.856 0-112-50.144-112-112 0-56.428 41.732-103.101 96.014-110.859-.003-.381-.014-.76-.014-1.141 0-70.692 57.308-128 128-128m-91.515 196.485l99.029 99.029c4.686 4.686 12.284 4.686 16.971 0l99.029-99.029c7.56-7.56 2.206-20.485-8.485-20.485H320v-84c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v84h-67.029c-10.691 0-16.045 12.926-8.486 20.485z"] };
var faCloudUpload = { prefix: 'far', iconName: 'cloud-upload', icon: [640, 512, [], "f0ee", "M272 80c53.473 0 99.279 32.794 118.426 79.363C401.611 149.793 416.125 144 432 144c35.346 0 64 28.654 64 64 0 11.829-3.222 22.9-8.817 32.407A96.998 96.998 0 0 1 496 240c53.019 0 96 42.981 96 96s-42.981 96-96 96H160c-61.856 0-112-50.144-112-112 0-56.428 41.732-103.101 96.014-110.859-.003-.381-.014-.76-.014-1.141 0-70.692 57.308-128 128-128m0-48c-84.587 0-155.5 59.732-172.272 139.774C39.889 196.13 0 254.416 0 320c0 88.374 71.642 160 160 160h336c79.544 0 144-64.487 144-144 0-61.805-39.188-115.805-96.272-135.891C539.718 142.116 491.432 96 432 96c-7.558 0-15.051.767-22.369 2.262C377.723 58.272 328.091 32 272 32zm40 340V232.535l54.545 55.762c4.671 4.775 12.341 4.817 17.064.094l16.877-16.877c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-104 104c-4.686 4.686-4.686 12.284 0 16.971l16.877 16.877c4.723 4.723 12.393 4.681 17.064-.094L264 232.535V372c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12z"] };
var faCloudUploadAlt = { prefix: 'far', iconName: 'cloud-upload-alt', icon: [640, 512, [], "f382", "M272 32c-84.587 0-155.5 59.732-172.272 139.774C39.889 196.13 0 254.416 0 320c0 88.374 71.642 160 160 160h336c79.544 0 144-64.487 144-144 0-61.805-39.188-115.805-96.272-135.891C539.718 142.116 491.432 96 432 96c-7.558 0-15.051.767-22.369 2.262C377.723 58.272 328.091 32 272 32zm0 48c53.473 0 99.279 32.794 118.426 79.363C401.611 149.793 416.125 144 432 144c35.346 0 64 28.654 64 64 0 11.829-3.222 22.9-8.817 32.407A96.998 96.998 0 0 1 496 240c53.019 0 96 42.981 96 96s-42.981 96-96 96H160c-61.856 0-112-50.144-112-112 0-56.428 41.732-103.101 96.014-110.859-.003-.381-.014-.76-.014-1.141 0-70.692 57.308-128 128-128m123.515 187.515l-99.029-99.029c-4.686-4.686-12.284-4.686-16.971 0l-99.029 99.029c-7.56 7.56-2.206 20.485 8.485 20.485H256v84c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-84h67.029c10.691 0 16.045-12.926 8.486-20.485z"] };
var faClub = { prefix: 'far', iconName: 'club', icon: [512, 512, [], "f327", "M256 48c60.3 0 101.3 60.9 79.6 116.5L321 201.9c-1.6 4 1.4 8.2 5.6 8.2.3 0 .5 0 .8-.1l39.8-5.3c3.9-.5 7.7-.8 11.5-.8 46.8 0 85.5 38.2 85.3 85.8-.2 47.3-39.4 85.1-86.6 85.1h-.8c-38.1-.3-48.9-6-78.4-36.2-1.2-1.3-2.7-1.8-4.2-1.8-3.1 0-6 2.4-6 6V360c0 37.7-2.3 48.8 24.7 82.9 6.8 8.5.7 21.1-10.2 21.1h-93.1c-10.9 0-16.9-12.6-10.2-21.1 27-34 24.7-45.2 24.7-82.9v-17.1c0-3.6-3-6-6-6-1.5 0-3 .6-4.2 1.8-29.2 29.9-40.1 35.8-78.3 36.2h-.8c-47.2 0-86.5-37.9-86.6-85.2-.1-47.5 38.6-85.6 85.3-85.6 3.8 0 7.6.2 11.5.8l39.8 5.3c.3 0 .5.1.8.1 4.1 0 7.1-4.2 5.6-8.2l-14.6-37.4C154.6 108.8 195.8 48 256 48m0-48c-22.4 0-44.5 5.6-63.9 16.2-18.3 10-34.3 24.6-46.2 42-11.9 17.4-19.6 37.6-22.3 58.4-1.7 13.2-1.4 26.6.9 39.7-14.8 1-29.3 4.4-43.1 10.3-15.9 6.8-30.2 16.4-42.4 28.7-25.2 25.3-39.1 58.8-39 94.5.2 73.4 60.5 133.1 134.6 133.1h1.2c6.9-.1 13.5-.3 19.9-.8-3.9 7.2-6.3 15.2-7.1 23.5-1 11 1 22.1 5.9 32 4.8 10 12.2 18.4 21.4 24.5 9.9 6.5 21.5 10 33.5 10h93.1c12 0 23.6-3.5 33.5-10 9.2-6.1 16.6-14.5 21.4-24.5 4.8-10 6.8-21 5.9-32-.7-8.3-3.2-16.2-7.1-23.5 6.4.5 13 .8 20 .8h1.2c73.9 0 134.3-59.6 134.6-132.9.1-35.7-13.7-69.3-38.9-94.6-12.3-12.3-26.5-22-42.5-28.7-13.8-5.9-28.3-9.3-43.1-10.3 2.3-13.1 2.6-26.5.9-39.7-2.7-20.8-10.4-41-22.3-58.4s-27.9-31.9-46.2-41.9C300.5 5.6 278.4 0 256 0z"] };
var faCode = { prefix: 'far', iconName: 'code', icon: [576, 512, [], "f121", "M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"] };
var faCodeBranch = { prefix: 'far', iconName: 'code-branch', icon: [384, 512, [], "f126", "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.5 14-17.4 21.1-39.8 21.6-67.9 31.6-10.7 54.4-40.6 54.4-75.8zM80 48c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 416c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm224-288c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"] };
var faCodeCommit = { prefix: 'far', iconName: 'code-commit', icon: [640, 512, [], "f386", "M128 256c0 10.8.9 21.5 2.6 32H12c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h118.6c-1.7 10.5-2.6 21.2-2.6 32zm500-32H509.4c1.8 10.5 2.6 21.2 2.6 32s-.9 21.5-2.6 32H628c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm-308-80c-29.9 0-58 11.7-79.2 32.8C219.6 198 208 226.1 208 256s11.6 58 32.8 79.2C262 356.3 290.1 368 320 368s58-11.7 79.2-32.8C420.4 314 432 285.9 432 256s-11.6-58-32.8-79.2C378 155.7 349.9 144 320 144m0-48c88.4 0 160 71.6 160 160s-71.6 160-160 160-160-71.6-160-160S231.6 96 320 96z"] };
var faCodeMerge = { prefix: 'far', iconName: 'code-merge', icon: [384, 512, [], "f387", "M304 192c-38 0-69.8 26.5-77.9 62-23.9-3.5-58-12.9-83.9-37.6-16.6-15.9-27.9-36.5-33.7-61.6C138.6 143.3 160 114.1 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3V246.1c1.6 1.7 3.3 3.4 5 5 39.3 37.5 90.4 48.6 121.2 51.8 12.1 28.9 40.6 49.2 73.8 49.2 44.2 0 80-35.8 80-80S348.2 192 304 192zM80 48c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 416c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm224-160c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"] };
var faCoffee = { prefix: 'far', iconName: 'coffee', icon: [640, 512, [], "f0f4", "M512 32H112c-8.8 0-16 7.2-16 16v256c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80v-16h32c70.6 0 128-57.4 128-128S582.6 32 512 32zm-80 272c0 17.6-14.4 32-32 32H176c-17.6 0-32-14.4-32-32V80h288v224zm80-64h-32V80h32c44.1 0 80 35.9 80 80s-35.9 80-80 80zm55.8 240H40.2c-37.3 0-50.2-48-32-48h591.7c18.1 0 5.2 48-32.1 48z"] };
var faCog = { prefix: 'far', iconName: 'cog', icon: [512, 512, [], "f013", "M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z"] };
var faCogs = { prefix: 'far', iconName: 'cogs', icon: [640, 512, [], "f085", "M217.1 478.1c-23.8 0-41.6-3.5-57.5-7.5-10.6-2.7-18.1-12.3-18.1-23.3v-31.7c-9.4-4.4-18.4-9.6-26.9-15.6l-26.7 15.4c-9.6 5.6-21.9 3.8-29.5-4.3-35.4-37.6-44.2-58.6-57.2-98.5-3.6-10.9 1.1-22.7 11-28.4l26.8-15c-.9-10.3-.9-20.7 0-31.1L12.2 223c-10-5.6-14.6-17.5-11-28.4 13.1-40 21.9-60.9 57.2-98.5 7.6-8.1 19.8-9.9 29.5-4.3l26.7 15.4c8.5-6 17.5-11.2 26.9-15.6V61.4c0-11.1 7.6-20.8 18.4-23.3 44.2-10.5 70-10.5 114.3 0 10.8 2.6 18.4 12.2 18.4 23.3v30.4c9.4 4.4 18.4 9.6 26.9 15.6L346.2 92c9.7-5.6 21.9-3.7 29.6 4.4 26.1 27.9 48.4 58.5 56.8 100.3 2 9.8-2.4 19.8-10.9 25.1l-26.6 16.5c.9 10.3.9 20.7 0 31.1l26.6 16.5c8.4 5.2 12.9 15.2 10.9 24.9-8.1 40.5-29.6 71.3-56.9 100.6-7.6 8.1-19.8 9.9-29.5 4.3l-26.7-15.4c-8.5 6-17.5 11.2-26.9 15.6v31.7c0 11-7.4 20.6-18.1 23.3-15.8 3.8-33.6 7.2-57.4 7.2zm-27.6-50.7c18.3 2.9 36.9 2.9 55.1 0v-44.8l16-5.7c15.2-5.4 29.1-13.4 41.3-23.9l12.9-11 38.8 22.4c11.7-14.4 21-30.5 27.6-47.7l-38.8-22.4 3.1-16.7c2.9-15.9 2.9-32 0-47.9l-3.1-16.7 38.8-22.4c-6.6-17.2-15.9-33.3-27.6-47.7l-38.8 22.4-12.9-11c-12.3-10.5-26.2-18.6-41.3-23.9l-16-5.7V80c-18.3-2.9-36.9-2.9-55.1 0v44.8l-16 5.7c-15.2 5.4-29.1 13.4-41.3 23.9l-12.9 11L80.5 143c-11.7 14.4-21 30.5-27.6 47.7l38.8 22.4-3.1 16.7c-2.9 15.9-2.9 32 0 47.9l3.1 16.7-38.8 22.4c6.6 17.2 15.9 33.4 27.6 47.7l38.8-22.4 12.9 11c12.3 10.5 26.2 18.6 41.3 23.9l16 5.7v44.7zm27.1-85.1c-22.6 0-45.2-8.6-62.4-25.8-34.4-34.4-34.4-90.4 0-124.8 34.4-34.4 90.4-34.4 124.8 0 34.4 34.4 34.4 90.4 0 124.8-17.3 17.2-39.9 25.8-62.4 25.8zm0-128.4c-10.3 0-20.6 3.9-28.5 11.8-15.7 15.7-15.7 41.2 0 56.9 15.7 15.7 41.2 15.7 56.9 0 15.7-15.7 15.7-41.2 0-56.9-7.8-7.9-18.1-11.8-28.4-11.8zM638.5 85c-1-5.8-6-10-11.9-10h-16.1c-3.5-9.9-8.8-19-15.5-26.8l8-13.9c2.9-5.1 1.8-11.6-2.7-15.3C591 11.3 580.5 5.1 569 .8c-5.5-2.1-11.8.1-14.7 5.3l-8 13.9c-10.2-1.9-20.7-1.9-30.9 0l-8-13.9c-3-5.1-9.2-7.3-14.7-5.3-11.5 4.3-22.1 10.5-31.4 18.2-4.5 3.7-5.7 10.2-2.7 15.3l8 13.9c-6.7 7.8-12 16.9-15.5 26.8H435c-5.9 0-11 4.3-11.9 10.2-2 12.2-1.9 24.5 0 36.2 1 5.8 6 10 11.9 10h16.1c3.5 9.9 8.8 19 15.5 26.8l-8 13.9c-2.9 5.1-1.8 11.6 2.7 15.3 9.3 7.7 19.9 13.9 31.4 18.2 5.5 2.1 11.8-.1 14.7-5.3l8-13.9c10.2 1.9 20.7 1.9 30.9 0l8 13.9c3 5.1 9.2 7.3 14.7 5.3 11.5-4.3 22.1-10.5 31.4-18.2 4.5-3.7 5.7-10.2 2.7-15.3l-8-13.9c6.7-7.8 12-16.9 15.5-26.8h16.1c5.9 0 11-4.3 11.9-10.2 1.9-12.2 1.9-24.4-.1-36.2zm-107.8 50.2c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm107.8 255.4c-1-5.8-6-10-11.9-10h-16.1c-3.5-9.9-8.8-19-15.5-26.8l8-13.9c2.9-5.1 1.8-11.6-2.7-15.3-9.3-7.7-19.9-13.9-31.4-18.2-5.5-2.1-11.8.1-14.7 5.3l-8 13.9c-10.2-1.9-20.7-1.9-30.9 0l-8-13.9c-3-5.1-9.2-7.3-14.7-5.3-11.5 4.3-22.1 10.5-31.4 18.2-4.5 3.7-5.7 10.2-2.7 15.3l8 13.9c-6.7 7.8-12 16.9-15.5 26.8h-16.1c-5.9 0-11 4.3-11.9 10.2-2 12.2-1.9 24.5 0 36.2 1 5.8 6 10 11.9 10H451c3.5 9.9 8.8 19 15.5 26.8l-8 13.9c-2.9 5.1-1.8 11.6 2.7 15.3 9.3 7.7 19.9 13.9 31.4 18.2 5.5 2.1 11.8-.1 14.7-5.3l8-13.9c10.2 1.9 20.7 1.9 30.9 0l8 13.9c3 5.1 9.2 7.3 14.7 5.3 11.5-4.3 22.1-10.5 31.4-18.2 4.5-3.7 5.7-10.2 2.7-15.3l-8-13.9c6.7-7.8 12-16.9 15.5-26.8h16.1c5.9 0 11-4.3 11.9-10.2 2-12.1 2-24.4 0-36.2zm-107.8 50.2c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"] };
var faColumns = { prefix: 'far', iconName: 'columns', icon: [512, 512, [], "f0db", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM232 432H54a6 6 0 0 1-6-6V112h184v320zm226 0H280V112h184v314a6 6 0 0 1-6 6z"] };
var faComment = { prefix: 'far', iconName: 'comment', icon: [576, 512, [], "f075", "M288 32C129 32 0 125.1 0 240c0 49.3 23.7 94.5 63.3 130.2-8.7 23.3-22.1 32.7-37.1 43.1C15.1 421-6 433 1.6 456.5c5.1 15.4 20.9 24.7 38.1 23.3 57.7-4.6 111.2-19.2 157-42.5 28.7 6.9 59.4 10.7 91.2 10.7 159.1 0 288-93 288-208C576 125.1 447.1 32 288 32zm0 368c-32.5 0-65.4-4.4-97.3-14-32.3 19-78.7 46-134.7 54 32-24 56.8-61.6 61.2-88.4C79.1 325.6 48 286.7 48 240c0-70.9 86.3-160 240-160s240 89.1 240 160c0 71-86.3 160-240 160z"] };
var faCommentAlt = { prefix: 'far', iconName: 'comment-alt', icon: [576, 512, [], "f27a", "M288 32C129 32 0 125.1 0 240c0 49.3 23.7 94.5 63.3 130.2-8.7 23.3-22.1 32.7-37.1 43.1C15.1 421-6 433 1.6 456.5c5.1 15.4 20.9 24.7 38.1 23.3 57.7-4.6 111.2-19.2 157-42.5 28.7 6.9 59.4 10.7 91.2 10.7 159.1 0 288-93 288-208C576 125.1 447.1 32 288 32zm0 368c-32.5 0-65.4-4.4-97.3-14-32.3 19-78.7 46-134.7 54 32-24 56.8-61.6 61.2-88.4C79.1 325.6 48 286.7 48 240c0-70.9 86.3-160 240-160s240 89.1 240 160c0 71-86.3 160-240 160zm-64-160c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm112 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm112 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"] };
var faComments = { prefix: 'far', iconName: 'comments', icon: [576, 512, [], "f086", "M574.507 443.86c-5.421 21.261-24.57 36.14-46.511 36.14-32.246 0-66.511-9.99-102.1-29.734-50.64 11.626-109.151 7.877-157.96-13.437 41.144-2.919 80.361-12.339 116.331-28.705 16.322-1.22 32.674-4.32 48.631-9.593C454.404 412.365 490.663 432 527.996 432c-32-17.455-43.219-38.958-46.159-58.502 25.443-18.848 46.159-47.183 46.159-81.135 0-10.495-2.383-21.536-7.041-32.467 7.405-25.93 8.656-50.194 5.185-73.938 32.164 30.461 49.856 69.128 49.856 106.405 0 33.893-12.913 65.047-34.976 91.119 2.653 2.038 5.924 4.176 9.962 6.378 19.261 10.508 28.947 32.739 23.525 54zM240.002 80C117.068 80 48.004 152.877 48.004 210.909c0 38.196 24.859 70.072 55.391 91.276-3.527 21.988-16.991 46.179-55.391 65.815 44.8 0 88.31-22.089 114.119-37.653 25.52 7.906 51.883 11.471 77.879 11.471C362.998 341.818 432 268.976 432 210.909 432 152.882 362.943 80 240.002 80m0-48C390.193 32 480 126.026 480 210.909c0 22.745-6.506 46.394-18.816 68.391-11.878 21.226-28.539 40.294-49.523 56.674-21.593 16.857-46.798 30.045-74.913 39.197-29.855 9.719-62.405 14.646-96.746 14.646-24.449 0-48.34-2.687-71.292-8.004C126.311 404.512 85.785 416 48.004 416c-22.18 0-41.472-15.197-46.665-36.761-5.194-21.563 5.064-43.878 24.811-53.976 7.663-3.918 13.324-7.737 17.519-11.294-7.393-7.829-13.952-16.124-19.634-24.844C8.09 264.655.005 238.339.005 210.909.005 126.259 89.508 32 240.002 32z"] };
var faCompass = { prefix: 'far', iconName: 'compass', icon: [512, 512, [], "f14e", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm91.326-312.131l-33.359 137.779a24.005 24.005 0 0 1-6.772 11.729l-102.64 97.779c-17.104 16.293-45.56.434-39.88-23.024l33.359-137.779a23.997 23.997 0 0 1 6.772-11.729l102.642-97.779c17.285-16.47 45.494-.175 39.878 23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"] };
var faCompress = { prefix: 'far', iconName: 'compress', icon: [448, 512, [], "f066", "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v100h100c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v100H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm176 0V368h100c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"] };
var faCompressAlt = { prefix: 'far', iconName: 'compress-alt', icon: [448, 512, [], "f422", "M224 232v-95.005c0-21.382 25.851-32.09 40.971-16.971l27.704 27.704L404.888 35.515c4.686-4.686 12.284-4.686 16.971 0l22.627 22.627c4.686 4.686 4.686 12.284 0 16.971L332.272 187.326l27.704 27.704c15.119 15.119 4.411 40.97-16.971 40.97H248c-13.255 0-24-10.745-24-24zM43.112 476.485l112.213-112.213 27.704 27.704c15.12 15.119 40.971 4.411 40.971-16.971V280c0-13.255-10.745-24-24-24h-95.005c-21.382 0-32.09 25.851-16.971 40.971l27.704 27.704L3.515 436.888c-4.686 4.686-4.686 12.284 0 16.971l22.627 22.627c4.686 4.686 12.284 4.686 16.97-.001z"] };
var faCompressWide = { prefix: 'far', iconName: 'compress-wide', icon: [512, 512, [], "f326", "M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v100h100c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v100H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm240 0V336h100c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"] };
var faConveyorBelt = { prefix: 'far', iconName: 'conveyor-belt', icon: [640, 512, [], "f46e", "M544 320H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm0 144H96c-26.5 0-48-21.5-48-48s21.5-48 48-48h448c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-416-80c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm384 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-176-96h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm32-240h80v112l64-32 64 32V48h80v192H176V48z"] };
var faConveyorBeltAlt = { prefix: 'far', iconName: 'conveyor-belt-alt', icon: [640, 512, [], "f46f", "M544 320H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm0 144H96c-26.5 0-48-21.5-48-48s21.5-48 48-48h448c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-416-80c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm384 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-208-96h416c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H384V16c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm272-176h112v128H384V112zM144 48h192v192H144V48z"] };
var faCopy = { prefix: 'far', iconName: 'copy', icon: [448, 512, [], "f0c5", "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"] };
var faCopyright = { prefix: 'far', iconName: 'copyright', icon: [512, 512, [], "f1f9", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z"] };
var faCreditCard = { prefix: 'far', iconName: 'credit-card', icon: [576, 512, [], "f09d", "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"] };
var faCreditCardBlank = { prefix: 'far', iconName: 'credit-card-blank', icon: [576, 512, [], "f389", "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zm-6 400H54.1c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h467.8c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zM192 364v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"] };
var faCreditCardFront = { prefix: 'far', iconName: 'credit-card-front', icon: [576, 512, [], "f38a", "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zm-6 400H54.1c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h467.8c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zM192 364v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12zm-124-44h-56c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm28-12v-40c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12zm-192 0v-40c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12zm384-40v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm0-132v48c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24z"] };
var faCricket = { prefix: 'far', iconName: 'cricket', icon: [640, 512, [], "f449", "M635.7 31.9l-15.2-21.6c-7.6-10.8-22.6-13.5-33.4-5.9L442.6 105.9c-14.5 10.1-34.4 6.6-44.5-7.8L385.4 80c-9.9-14-29.7-18.2-44.5-7.8L13.8 300.7C4.9 306.9-.7 317.2.1 328c5.6 79.3 54.7 149.2 127.4 181.6 15.4 6.9 28.9-2.5 30.4-3.5L485 277.6c14.5-10.1 18-30 7.9-44.4l-15.3-21.8c-10.1-14.4-6.6-34.3 7.9-44.4L629.8 65.2c10.8-7.6 13.5-22.5 5.9-33.3zM138 461.5c-48.8-25.3-82-72.6-89.1-126.9l224.8-157.1-19.1 107.9 108.2 19L138 461.5zM437.8 252l-37.9 26.5-108.2-19 19.1-107.9 37.9-26.5c3.6-2.5 8.6-1.6 11.1 2L439.7 241c2.6 3.5 1.7 8.5-1.9 11zm73.8 68.5c-52.9 0-95.9 42.9-95.9 95.7s43 95.7 95.9 95.7 95.9-42.9 95.9-95.7-43-95.7-95.9-95.7zm0 143.6c-26.4 0-48-21.5-48-47.9s21.5-47.9 48-47.9c26.4 0 48 21.5 48 47.9 0 26.5-21.5 47.9-48 47.9z"] };
var faCrop = { prefix: 'far', iconName: 'crop', icon: [513, 512, [], "f125", "M488 384h-40V99.2l61.9-61.7c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0L415.3 64H128V24c0-13.3-10.7-24-24-24H88C74.7 0 64 10.7 64 24v40H24C10.7 64 0 74.7 0 88v16c0 13.3 10.7 24 24 24h40v296c0 13.3 10.7 24 24 24h296v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24zM351 128L128 350.2V128h223zM162 384l222-221.1V384H162z"] };
var faCrosshairs = { prefix: 'far', iconName: 'crosshairs', icon: [512, 512, [], "f05b", "M500 232h-29.334C459.597 131.885 380.115 52.403 280 41.334V12c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v29.334C131.885 52.403 52.403 131.885 41.334 232H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h29.334C52.403 380.115 131.885 459.597 232 470.666V500c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12v-29.334C380.115 459.597 459.597 380.115 470.666 280H500c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zM280 422.301V380c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v42.301C158.427 411.84 100.154 353.532 89.699 280H132c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H89.699C100.16 158.427 158.468 100.154 232 89.699V132c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V89.699C353.573 100.16 411.846 158.468 422.301 232H380c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h42.301C411.84 353.573 353.532 411.846 280 422.301zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"] };
var faCube = { prefix: 'far', iconName: 'cube', icon: [512, 512, [], "f1b2", "M239.1 7.5l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V130.5c0-20-12.4-37.9-31.1-44.9l-208-78C262 3.4 250 3.4 239.1 7.5zm16.9 45l208 78v.3l-208 84.5-208-84.5v-.3l208-78zM48 182.6l184 74.8v190.2l-184-92v-173zm232 264.9V257.4l184-74.8v172.9l-184 92z"] };
var faCubes = { prefix: 'far', iconName: 'cubes', icon: [512, 512, [], "f1b3", "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"] };
var faCurling = { prefix: 'far', iconName: 'curling', icon: [640, 512, [], "f44a", "M540.5 199.7C529.7 158.5 492.6 128 448 128H288v-16c0-26.5 21.5-48 48-48h128c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H336c-61.9 0-112 50.1-112 112v16h-32c-44.6 0-81.7 30.5-92.5 71.7C41.9 218.6 0 272.1 0 336v32c0 79.5 64.5 144 144 144h352c79.5 0 144-64.5 144-144v-32c0-63.9-41.9-117.4-99.5-136.3zM144 240h352c52.9 0 96 43.1 96 96H48c0-52.9 43.1-96 96-96zm352 224H144c-52.9 0-96-43.1-96-96h544c0 52.9-43.1 96-96 96z"] };
var faCut = { prefix: 'far', iconName: 'cut', icon: [448, 512, [], "f0c4", "M263.391 256L445.657 73.372a8 8 0 0 0 0-11.313c-18.745-18.745-49.137-18.745-67.882 0L223.822 216.352l-43.097-43.183C187.917 159.706 192 144.331 192 128c0-53.019-42.981-96-96-96S0 74.981 0 128s42.981 96 96 96c16.307 0 31.662-4.071 45.111-11.245L184.261 256l-43.149 43.245C127.662 292.071 112.307 288 96 288c-53.019 0-96 42.981-96 96s42.981 96 96 96 96-42.981 96-96c0-16.331-4.083-31.706-11.275-45.169l43.097-43.183 153.953 154.293c18.745 18.745 49.137 18.745 67.882 0a8 8 0 0 0 0-11.313L263.391 256zM96 176c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48zm0 256c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48zm128-168a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"] };
var faDatabase = { prefix: 'far', iconName: 'database', icon: [448, 512, [], "f1c0", "M224 48c97.167 0 176 27.723 176 61.714v4.571C400 148.277 321.167 176 224 176S48 148.277 48 114.286v-4.571C48 75.723 126.833 48 224 48m176 135.018v26.399c0 33.991-78.833 61.714-176 61.714S48 243.408 48 209.417v-26.399C85.813 210.982 155.021 224 224 224s138.187-13.018 176-40.982m0 96v26.834c0 33.991-78.833 61.714-176 61.714S48 339.842 48 305.851v-26.834C85.813 306.982 155.021 320 224 320s138.187-13.018 176-40.982m0 96v27.268C400 436.277 321.167 464 224 464S48 436.277 48 402.286v-27.268C85.813 402.982 155.021 416 224 416s138.187-13.018 176-40.982M224 0C137.052 0 0 23.26 0 109.714v292.571C0 488.758 137.03 512 224 512c86.948 0 224-23.26 224-109.714V109.714C448 23.242 310.97 0 224 0z"] };
var faDeaf = { prefix: 'far', iconName: 'deaf', icon: [512, 512, [], "f2a4", "M404.486 124.485l-16.971-16.971c-4.686-4.686-4.686-12.284 0-16.971l87.029-87.029c4.686-4.686 12.284-4.686 16.971 0l16.971 16.971c4.686 4.686 4.686 12.284 0 16.971l-87.029 87.029c-4.687 4.687-12.285 4.687-16.971 0zm-367.03 384l151.029-151.029c4.686-4.686 4.686-12.284 0-16.971l-16.971-16.971c-4.686-4.686-12.284-4.686-16.971 0L3.515 474.544c-4.686 4.686-4.686 12.284 0 16.971l16.971 16.971c4.686 4.686 12.284 4.686 16.97-.001zM351.15 397.282C351.901 351.835 424 338.659 424 264c0-93.516-75.03-168-168-168-93.134 0-168 74.662-168 168 0 13.255 10.745 24 24 24s24-10.745 24-24c0-67.05 53.62-120 120-120 66.503 0 120 53.082 120 120 0 48.824-71.843 60.62-72.849 132.757l-.002.334c0 36.894-29.607 66.909-66 66.909-13.255 0-24 10.745-24 24s10.745 24 24 24c62.796 0 113.894-51.446 114.001-114.718zM320 288c-13.255 0-24-10.745-24-24 0-22.056-17.944-40-40-40s-40 17.944-40 40c0 13.255-10.745 24-24 24s-24-10.745-24-24c0-48.523 39.477-88 88-88s88 39.477 88 88c0 13.255-10.745 24-24 24z"] };
var faDesktop = { prefix: 'far', iconName: 'desktop', icon: [576, 512, [], "f108", "M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-42 152c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"] };
var faDesktopAlt = { prefix: 'far', iconName: 'desktop-alt', icon: [576, 512, [], "f390", "M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v234H48V54zm432 434c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"] };
var faDiagnoses = { prefix: 'far', iconName: 'diagnoses', icon: [640, 512, [], "f470", "M632 464H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM256 304c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm240-48c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM96 272c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm488.6 56.4l-17.8 26.7c-3.1 4.6-8.1 7.2-13.3 7.2-9.8 0-55.6-34.9-137.5-58.9V416h48v-43.8c26.3 11.7 46.7 23.1 57 29.2 9.9 5.8 21.1 8.9 32.5 8.9 21.4 0 41.3-10.7 53.2-28.6l17.8-26.7c9.7-14.6 13.1-32.7 9.2-49.7-3.8-16.9-14.5-31.7-29.4-40.6-13.8-8.3-35.3-20.1-61.2-32.3 4.2 26.5-13.3 41.5-17.4 44.9 23.2 11.1 42.2 21.6 53.9 28.6 8 4.7 10.1 14.9 5 22.5zM33.2 381.7c11.9 17.9 31.8 28.6 53.2 28.6 11.4 0 22.7-3.1 32.5-8.9 10.3-6.1 30.7-17.5 57-29.2V416h48V303.4C142.8 327.2 96 362.3 86.4 362.3c-5.2 0-10.2-2.5-13.3-7.2l-17.8-26.7c-5.1-7.6-2.9-17.8 4.9-22.5 3.6-2.2 8.5-4.9 13.4-7.7-14.7-7.8-24.9-23-25.5-40.7-4.4 2.5-9.1 5.1-12.6 7.2-14.9 8.9-25.6 23.7-29.4 40.6-3.8 17-.5 35.1 9.2 49.7l17.9 26.7zm110-117.3C192.7 243.5 255.7 224 320 224c44.9 0 89 9.6 128.6 22.4-3.6-26.6 14.1-41.1 18.3-44.4-19.9-6.6-41.1-12.3-63-16.8 17.2-19.7 28-45.1 28-73.3C432 50.2 381.8 0 320 0c-61.8 0-112 50.2-112 112 0 28 10.7 53.4 27.8 73.1-39.8 8.1-77.1 20.8-109.3 34.2 15.3 12.7 19.3 30.2 16.7 45.1zM320 48c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm32 336c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16z"] };
var faDiamond = { prefix: 'far', iconName: 'diamond', icon: [448, 512, [], "f219", "M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z"] };
var faDna = { prefix: 'far', iconName: 'dna', icon: [384, 512, [], "f471", "M384 16.9C384.5 9 378.8 0 368.6 0h-15.4c-8.1 0-14.7 6.2-15.3 14.4-.3 4.5-1 10.5-2.2 17.6h-287c-1.2-7.1-2.1-13.4-2.5-17.7C45.5 6.2 38.9 0 30.9 0H15.4C3.9 0-.4 10.7 0 16.9c2.1 29.5 16.3 126.8 108.5 208.8 12.6-9.3 26.2-18.2 40.9-26.7-9.1-7.5-17-15.2-24.6-23h135.5c-20.6 20.9-46.4 41.3-79.3 59.3C24.2 321.5 2.8 456 0 495.1-.5 503 5.2 512 15.4 512h15.4c8.1 0 14.7-6.2 15.3-14.4.3-4.5 1-10.5 2.2-17.6h287.1c1.2 7.1 2 13.2 2.4 17.7.7 8.1 7.3 14.3 15.3 14.3h15.5c10.2 0 15.9-9 15.3-16.8-2.6-35.7-21.2-153-147.9-238.9C362.7 170.6 381.4 53.1 384 16.9zM61.6 432c5.7-15 13.6-31.3 24.2-48h211.9c10.6 16.8 18.5 33 24.3 48H61.6zM192 283.2c27.4 16.3 49.4 34.3 67.5 52.8H124.2c18.1-18.4 40.2-36.4 67.8-52.8zM322.6 80c-5.7 14.9-13.5 31.2-24.1 48H86.8c-10.6-16.8-18.6-33-24.4-48h260.2z"] };
var faDollarSign = { prefix: 'far', iconName: 'dollar-sign', icon: [256, 512, [], "f155", "M218.782 266.341c-20.786-16.38-47.256-26.923-72.855-37.118-48.469-19.304-77.898-33.306-77.898-64.924 0-12.836 5.969-24.69 16.805-33.379 12.418-9.957 29.923-15.219 50.621-15.219 42.441 0 73.642 28.2 73.928 28.462a11.86 11.86 0 0 0 9.773 3.055 11.916 11.916 0 0 0 8.522-5.704l17.572-29.494c2.775-4.658 2.097-10.612-1.653-14.517-1.326-1.381-31.23-31.907-85.576-38.567V12c0-6.627-5.335-12-11.916-12h-29.82c-6.581 0-11.916 5.373-11.916 12v48.738c-26.955 5.159-50.139 16.64-67.513 33.524-19.647 19.092-30.466 44.346-30.466 71.11 0 32.177 12.571 57.836 38.432 78.443 21.475 17.112 48.609 28.074 74.85 38.674 46.803 18.907 75.222 32.442 75.222 60.921 0 36.707-32.744 53.426-63.167 53.426-51.97 0-88.958-37.173-89.459-37.684a11.877 11.877 0 0 0-9.085-3.596 11.888 11.888 0 0 0-8.721 4.468l-21.833 27.35c-3.637 4.557-3.485 11.09.362 15.47 1.545 1.759 36.761 41.065 101.378 50.01V500c0 6.628 5.335 12 11.916 12h29.82c6.58 0 11.916-5.372 11.916-12v-47.395c27.643-4.67 51.23-16.761 68.688-35.315C245.597 397.215 256 370.405 256 341.802c0-31.041-12.175-55.725-37.218-75.461z"] };
var faDolly = { prefix: 'far', iconName: 'dolly', icon: [576, 512, [], "f472", "M575.2 309.9l-5.1-15.2c-2.8-8.4-11.9-12.9-20.2-10.1L531 291 459.1 75.3C455.7 65.2 448.6 57 439 52.2c-9.5-4.7-20.4-5.5-30.5-2.2l-221.9 74L158 38.3C150.4 15.4 129 0 105 0H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h88.9c3.4 0 6.5 2.2 7.6 5.5l93.6 280.8c-27.6 16.9-46.2 47-46.2 81.7 0 53 43 96 96 96s96-43 96-96c0-4.9-.7-9.5-1.4-14.2L565 330.2c8.4-2.8 13-11.9 10.2-20.3zM256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm75.6-106.5C314 334.8 286.9 320 256 320c-1.3 0-2.6.3-3.9.4l-50.3-150.8 86.5-28.8 19.9 59.7c2.8 8.4 11.9 12.9 20.2 10.1l15.2-5.1c8.4-2.8 12.9-11.9 10.1-20.2l-19.9-59.7 82.3-27.4 69.4 208.1-153.9 51.2z"] };
var faDollyEmpty = { prefix: 'far', iconName: 'dolly-empty', icon: [576, 512, [], "f473", "M575.2 309.9l-5.1-15.2c-2.8-8.4-11.9-12.9-20.2-10.1l-218.3 72.9C314 334.8 286.9 320 256 320c-1.3 0-2.6.3-3.9.4l-94-282.1C150.4 15.4 129 0 105 0H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h88.9c3.4 0 6.5 2.2 7.6 5.5l93.6 280.8c-27.6 16.9-46.2 47-46.2 81.7 0 53 43 96 96 96s96-43 96-96c0-4.9-.7-9.5-1.4-14.2L565 330.2c8.4-2.8 13-11.9 10.2-20.3zM256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"] };
var faDollyFlatbed = { prefix: 'far', iconName: 'dolly-flatbed', icon: [640, 512, [], "f474", "M208 352h384c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm32-240h112v112l48-32 48 32V112h112v192H240V112zm384 288H144V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h80v384c0 8.8 7.2 16 16 16h50.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"] };
var faDollyFlatbedAlt = { prefix: 'far', iconName: 'dolly-flatbed-alt', icon: [640, 512, [], "f475", "M208 352h384c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm208-240h80v80h-80v-80zm0 128h144v64H416v-64zM240 112h128v192H240V112zm384 288H144V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h80v384c0 8.8 7.2 16 16 16h50.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"] };
var faDollyFlatbedEmpty = { prefix: 'far', iconName: 'dolly-flatbed-empty', icon: [640, 512, [], "f476", "M624 400H144V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h80v384c0 8.8 7.2 16 16 16h50.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"] };
var faDotCircle = { prefix: 'far', iconName: 'dot-circle', icon: [512, 512, [], "f192", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"] };
var faDownload = { prefix: 'far', iconName: 'download', icon: [576, 512, [], "f019", "M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"] };
var faDumbbell = { prefix: 'far', iconName: 'dumbbell', icon: [640, 512, [], "f44b", "M632 224h-24v-72c0-30.9-25.1-56-56-56h-32c-2.7 0-5.4.4-8 .8V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v136h-96V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v8.8c-2.6-.4-5.3-.8-8-.8H88c-30.9 0-56 25.1-56 56v72H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v72c0 30.9 25.1 56 56 56h32c2.7 0 5.4-.4 8-.8v8.8c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56V288h96v136c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-8.8c2.6.4 5.3.8 8 .8h32c30.9 0 56-25.1 56-56v-72h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM120 368H88c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8zm104 56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm240 0c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm96-64c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208z"] };
var faEdit = { prefix: 'far', iconName: 'edit', icon: [576, 512, [], "f044", "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"] };
var faEject = { prefix: 'far', iconName: 'eject', icon: [448, 512, [], "f052", "M400 320H48c-26.51 0-48 21.49-48 48v64c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-64c0-26.51-21.49-48-48-48zm0 112H48v-64h352v64zM48.048 304h351.895c42.637 0 64.151-51.731 33.941-81.941l-175.943-176c-18.745-18.745-49.137-18.746-67.882 0l-175.952 176C-16.042 252.208 5.325 304 48.048 304zM224 80l176 176H48L224 80z"] };
var faEllipsisH = { prefix: 'far', iconName: 'ellipsis-h', icon: [512, 512, [], "f141", "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"] };
var faEllipsisHAlt = { prefix: 'far', iconName: 'ellipsis-h-alt', icon: [512, 512, [], "f39b", "M256 184c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm176-96c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zM80 184c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"] };
var faEllipsisV = { prefix: 'far', iconName: 'ellipsis-v', icon: [128, 512, [], "f142", "M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"] };
var faEllipsisVAlt = { prefix: 'far', iconName: 'ellipsis-v-alt', icon: [192, 512, [], "f39c", "M96 184c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm0 80c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm0-304c39.8 0 72-32.2 72-72S135.8 8 96 8 24 40.2 24 80s32.2 72 72 72zm0-96c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24z"] };
var faEnvelope = { prefix: 'far', iconName: 'envelope', icon: [512, 512, [], "f0e0", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"] };
var faEnvelopeOpen = { prefix: 'far', iconName: 'envelope-open', icon: [512, 512, [], "f2b6", "M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"] };
var faEnvelopeSquare = { prefix: 'far', iconName: 'envelope-square', icon: [448, 512, [], "f199", "M187.293 260.374C114.743 210.491 115.482 210.366 96 196v-12c0-13.255 10.745-24 24-24h208c13.255 0 24 10.745 24 24v12c-19.497 14.376-18.747 14.494-91.293 64.374-8.414 5.812-25.104 19.79-36.707 19.625-11.6.166-28.296-13.816-36.707-19.625zm91.563 26.355C267.519 294.575 247.377 312.105 224 312c-23.241.104-43.082-17.118-54.849-25.266-45.054-30.977-62.02-42.883-73.151-50.958V328c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24v-92.224c-11.13 8.074-28.094 19.978-73.144 50.953zM448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6z"] };
var faEraser = { prefix: 'far', iconName: 'eraser', icon: [512, 512, [], "f12d", "M497.942 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.746-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48 48 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H339.883l158.059-158.059zM304 80l160 160-103.029 103.029-160-160L304 80zM144 432l-96-96 119.03-119.029 160 160L272 432H144z"] };
var faEuroSign = { prefix: 'far', iconName: 'euro-sign', icon: [320, 512, [], "f153", "M315.595 458.559l-6.504-29.443c-1.446-6.544-7.962-10.628-14.485-9.087-10.306 2.435-26.461 5.352-44.699 5.352-65.469 0-117.018-39.532-138.208-97.382h129.515a12 12 0 0 0 11.749-9.558l4.989-24c1.549-7.45-4.139-14.442-11.749-14.442H98.159c-1.495-16.139-2.068-32.264-.591-48H260.06a12 12 0 0 0 11.737-9.499l5.114-24c1.591-7.466-4.103-14.501-11.737-14.501H108.057c21.02-58.359 72.527-97.995 140.009-97.995 14.663 0 28.909 2.084 38.245 3.823 6.167 1.149 12.175-2.635 13.796-8.695l7.907-29.567c1.809-6.766-2.528-13.633-9.416-14.902C287.192 34.562 269.204 32 249.294 32 149.268 32 69.61 96.076 43.43 184H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h23.129c-1.159 15.771-1.031 35.474.383 48H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h32.248c25.98 88.704 103.428 152 205.045 152 24.402 0 45.381-4.155 57.538-7.221 6.288-1.585 10.163-7.889 8.764-14.22z"] };
var faExchange = { prefix: 'far', iconName: 'exchange', icon: [512, 512, [], "f0ec", "M508.485 168.485l-100.375 100c-4.686 4.686-12.284 4.686-16.97 0l-19.626-19.626c-4.753-4.753-4.675-12.484.173-17.14L422.916 184H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h410.916l-51.228-47.719c-4.849-4.656-4.927-12.387-.173-17.14l19.626-19.626c4.686-4.686 12.284-4.686 16.97 0l100.375 100c4.685 4.686 4.685 12.284-.001 16.97zm-504.97 192l100.375 100c4.686 4.686 12.284 4.686 16.97 0l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L89.084 376H500c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H89.084l51.228-47.719c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.97 0l-100.375 100c-4.686 4.686-4.686 12.284.001 16.97z"] };
var faExchangeAlt = { prefix: 'far', iconName: 'exchange-alt', icon: [512, 512, [], "f362", "M508.485 168.48l-96.16 96.16c-7.58 7.58-20.485 2.14-20.485-8.485L391.833 184H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h379.833l.01-72.162c.001-10.683 12.949-16.022 20.485-8.485l96.156 96.156c4.687 4.686 4.688 12.285.001 16.971zM3.515 360.491l96.156 96.156c7.536 7.536 20.484 2.198 20.485-8.485l.01-72.162H500c6.627 0 12-5.373 12-12v-24c0-6.628-5.373-12-12-12H120.167l-.007-72.154c0-10.625-12.905-16.066-20.485-8.485l-96.16 96.16c-4.687 4.685-4.686 12.284 0 16.97z"] };
var faExclamation = { prefix: 'far', iconName: 'exclamation', icon: [256, 512, [], "f12a", "M173.854 48c6.874 0 12.343 5.763 11.984 12.628l-11.742 224c-.334 6.375-5.6 11.372-11.984 11.372H93.888c-6.383 0-11.65-4.997-11.984-11.372l-11.742-224C69.802 53.763 75.271 48 82.146 48h91.708M128 336c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64M173.854 0H82.146C47.881 0 20.427 28.783 22.228 63.141l11.742 224c.698 13.309 5.689 25.414 13.592 35.001C28.035 342.31 16 369.777 16 400c0 61.757 50.243 112 112 112s112-50.243 112-112c0-30.223-12.035-57.69-31.561-77.858a59.78 59.78 0 0 0 13.592-35.001l11.742-224C235.566 28.922 208.259 0 173.854 0z"] };
var faExclamationCircle = { prefix: 'far', iconName: 'exclamation-circle', icon: [512, 512, [], "f06a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z"] };
var faExclamationSquare = { prefix: 'far', iconName: 'exclamation-square', icon: [448, 512, [], "f321", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6zm-134-74c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z"] };
var faExclamationTriangle = { prefix: 'far', iconName: 'exclamation-triangle', icon: [576, 512, [], "f071", "M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z"] };
var faExpand = { prefix: 'far', iconName: 'expand', icon: [448, 512, [], "f065", "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H48v100c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-24c-6.6 0-12 5.4-12 12v100H300c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-24c0-6.6-5.4-12-12-12H48V332c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"] };
var faExpandAlt = { prefix: 'far', iconName: 'expand-alt', icon: [448, 512, [], "f424", "M448 56v95.005c0 21.382-25.851 32.09-40.971 16.971l-27.704-27.704-107.242 107.243c-4.686 4.686-12.284 4.686-16.971 0l-22.627-22.627c-4.686-4.686-4.686-12.284 0-16.971l107.243-107.243-27.704-27.704C296.905 57.851 307.613 32 328.995 32H424c13.255 0 24 10.745 24 24zM175.917 264.485L68.674 371.728 40.97 344.024C25.851 328.905 0 339.613 0 360.995V456c0 13.255 10.745 24 24 24h95.005c21.382 0 32.09-25.851 16.971-40.971l-27.704-27.704 107.243-107.243c4.686-4.686 4.686-12.284 0-16.971l-22.627-22.627c-4.687-4.685-12.285-4.685-16.971.001z"] };
var faExpandArrows = { prefix: 'far', iconName: 'expand-arrows', icon: [448, 512, [], "f31d", "M447.9 332l.1 136c0 6.6-5.4 12-12 12l-136-.1c-6.6 0-12-5.4-12-12v-27.8c0-6.7 5.5-12.1 12.2-12l61.4 2.3 1.4-1.4-139-139L85 429l1.4 1.4 61.4-2.3c6.7-.1 12.2 5.3 12.2 12v27.8c0 6.6-5.4 12-12 12L12 480c-6.6 0-12-5.4-12-12l.1-136c0-6.6 5.4-12 12-12h27.8c6.7 0 12.1 5.5 12 12.2l-2.3 61.4L51 395l139-139L51 117l-1.4 1.4 2.3 61.4c.1 6.7-5.3 12.2-12 12.2H12.1c-6.6 0-12-5.4-12-12L0 44c0-6.6 5.4-12 12-12l136 .1c6.6 0 12 5.4 12 12v27.8c0 6.7-5.5 12.1-12.2 12l-61.4-2.3L85 83l139 139L363 83l-1.4-1.4-61.4 2.3c-6.7.1-12.2-5.3-12.2-12V44.1c0-6.6 5.4-12 12-12l136-.1c6.6 0 12 5.4 12 12l-.1 136c0 6.6-5.4 12-12 12h-27.8c-6.7 0-12.1-5.5-12-12.2l2.3-61.4-1.4-1.4-139 139 139 139 1.4-1.4-2.3-61.4c-.1-6.7 5.3-12.2 12-12.2h27.8c6.6 0 12 5.4 12 12z"] };
var faExpandArrowsAlt = { prefix: 'far', iconName: 'expand-arrows-alt', icon: [448, 512, [], "f31e", "M252.3 256l121.4 121.4 53.8-53.8c7.6-7.6 20.5-2.2 20.5 8.5v136c0 6.6-5.4 12-12 12H300c-10.7 0-16-12.9-8.5-20.5l53.8-53.8L224 284.3 102.6 405.7l53.8 53.8c7.6 7.6 2.2 20.5-8.5 20.5h-136c-6.6 0-12-5.4-12-12V332c0-10.7 12.9-16 20.5-8.5l53.8 53.8L195.7 256 74.3 134.6l-53.8 53.8C12.9 196 0 190.7 0 180V44c0-6.6 5.4-12 12-12h136c10.7 0 16 12.9 8.5 20.5l-53.8 53.8L224 227.7l121.4-121.4-53.8-53.8C284 44.9 289.3 32 300 32h136c6.6 0 12 5.4 12 12v136c0 10.7-12.9 16-20.5 8.5l-53.8-53.8L252.3 256z"] };
var faExpandWide = { prefix: 'far', iconName: 'expand-wide', icon: [512, 512, [], "f320", "M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H48v100c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM352 76v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V88c0-13.3-10.7-24-24-24H364c-6.6 0-12 5.4-12 12zm148 212h-24c-6.6 0-12 5.4-12 12v100H364c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V300c0-6.6-5.4-12-12-12zM160 436v-24c0-6.6-5.4-12-12-12H48V300c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"] };
var faExternalLink = { prefix: 'far', iconName: 'external-link', icon: [576, 512, [], "f08e", "M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"] };
var faExternalLinkAlt = { prefix: 'far', iconName: 'external-link-alt', icon: [576, 512, [], "f35d", "M448 241.823V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h339.976c10.691 0 16.045 12.926 8.485 20.485l-24 24a12.002 12.002 0 0 1-8.485 3.515H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6V265.823c0-3.183 1.264-6.235 3.515-8.485l24-24c7.559-7.56 20.485-2.206 20.485 8.485zM564 0H428.015c-10.658 0-16.039 12.93-8.485 20.485l48.187 48.201-272.202 272.202c-4.686 4.686-4.686 12.284 0 16.971l22.627 22.627c4.687 4.686 12.285 4.686 16.971 0l272.201-272.201 48.201 48.192c7.513 7.513 20.485 2.235 20.485-8.485V12c0-6.627-5.373-12-12-12z"] };
var faExternalLinkSquare = { prefix: 'far', iconName: 'external-link-square', icon: [448, 512, [], "f14c", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-54-304l-136 .145c-6.627 0-12 5.373-12 12V167.9c0 6.722 5.522 12.133 12.243 11.998l58.001-2.141L99.515 340.485c-4.686 4.686-4.686 12.284 0 16.971l23.03 23.029c4.686 4.686 12.284 4.686 16.97 0l162.729-162.729-2.141 58.001c-.136 6.721 5.275 12.242 11.998 12.242h27.755c6.628 0 12-5.373 12-12L352 140c0-6.627-5.373-12-12-12z"] };
var faExternalLinkSquareAlt = { prefix: 'far', iconName: 'external-link-square-alt', icon: [448, 512, [], "f360", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-54-304H204.015c-10.658 0-16.039 12.93-8.485 20.485l48.187 48.201L99.515 340.888c-4.686 4.686-4.686 12.284 0 16.971l22.627 22.627c4.687 4.686 12.285 4.686 16.971 0l144.201-144.201 48.201 48.192c7.513 7.513 20.485 2.235 20.485-8.485V140c0-6.627-5.373-12-12-12z"] };
var faEye = { prefix: 'far', iconName: 'eye', icon: [576, 512, [], "f06e", "M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z"] };
var faEyeDropper = { prefix: 'far', iconName: 'eye-dropper', icon: [512, 512, [], "f1fb", "M486.509 27.241C451.298-8.761 393.152-9.152 357.49 26.51l-94.863 94.863-23.515-23.515c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l23.515 23.515L39.029 344.971A24 24 0 0 0 32 361.941V432L0 488l24 24 56-32h70.059a24 24 0 0 0 16.97-7.029l178.343-178.343 23.515 23.515c4.686 4.686 12.284 4.686 16.971 0l28.285-28.285c4.686-4.686 4.686-12.284 0-16.971l-23.515-23.515 94.342-94.046c35.197-35.198 36.344-92.498 1.539-128.085zM140.118 432H80v-60.118l171.314-171.314 60.118 60.118L140.118 432z"] };
var faEyeSlash = { prefix: 'far', iconName: 'eye-slash', icon: [576, 512, [], "f070", "M272.702 359.139c-80.483-9.011-136.212-86.886-116.93-167.042l116.93 167.042zM288 392c-102.556 0-192.092-54.701-240-136 21.755-36.917 52.1-68.342 88.344-91.658l-27.541-39.343C67.001 152.234 31.921 188.741 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.004 376.006 168.14 440 288 440a332.89 332.89 0 0 0 39.648-2.367l-32.021-45.744A284.16 284.16 0 0 1 288 392zm281.354-111.631c-33.232 56.394-83.421 101.742-143.554 129.492l48.116 68.74c3.801 5.429 2.48 12.912-2.949 16.712L450.23 509.83c-5.429 3.801-12.912 2.48-16.712-2.949L102.084 33.399c-3.801-5.429-2.48-12.912 2.949-16.712L125.77 2.17c5.429-3.801 12.912-2.48 16.712 2.949l55.526 79.325C226.612 76.343 256.808 72 288 72c119.86 0 224.996 63.994 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM528 256c-44.157-74.933-123.677-127.27-216.162-135.007C302.042 131.078 296 144.83 296 160c0 30.928 25.072 56 56 56s56-25.072 56-56l-.001-.042c30.632 57.277 16.739 130.26-36.928 171.719l26.695 38.135C452.626 346.551 498.308 306.386 528 256z"] };
var faFastBackward = { prefix: 'far', iconName: 'fast-backward', icon: [512, 512, [], "f049", "M12 448h24c6.6 0 12-5.4 12-12V277.7c1.1 1.2 2.2 2.4 3.5 3.4l184 159.5c20.6 17.2 52.5 2.8 52.5-24.6V292l171.5 148.6c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L288 221.1v-125c0-27.4-31.9-41.8-52.5-24.6L51.5 232c-1.3 1.1-2.4 2.2-3.5 3.4V76c0-6.6-5.4-12-12-12H12C5.4 64 0 69.4 0 76v360c0 6.6 5.4 12 12 12zm452-316.8V381L320.4 256.5 464 131.2zm-224 0V381L96.4 256.5 240 131.2z"] };
var faFastForward = { prefix: 'far', iconName: 'fast-forward', icon: [512, 512, [], "f050", "M500 64h-24c-6.6 0-12 5.4-12 12v158.3c-1.1-1.2-2.2-2.4-3.5-3.4l-184-159.5C255.9 54.3 224 68.6 224 96v124L52.5 71.4C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6L224 291v125c0 27.4 31.9 41.8 52.5 24.6l184-160.5c1.3-1.1 2.4-2.2 3.5-3.4V436c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zM48 380.8V131.1l143.6 124.4L48 380.8zm224 0V131.1l143.6 124.4L272 380.8z"] };
var faFax = { prefix: 'far', iconName: 'fax', icon: [512, 512, [], "f1ac", "M80 96H64c-35.346 0-64 28.654-64 64v288c0 35.346 28.654 64 64 64h16c35.346 0 64-28.654 64-64V160c0-35.346-28.654-64-64-64zm16 352c0 8.823-7.177 16-16 16H64c-8.823 0-16-7.177-16-16V160c0-8.823 7.177-16 16-16h16c8.823 0 16 7.177 16 16v288zm160-124v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm0 96v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm96-96v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm0 96v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm128-289.258V88.568a39.996 39.996 0 0 0-11.716-28.284l-48.569-48.569A39.999 39.999 0 0 0 391.432 0H200c-22.091 0-40 17.909-40 40v424c0 26.51 21.49 48 48 48h256c26.51 0 48-21.49 48-48V176c0-20.898-13.359-38.667-32-45.258zM208 48h176v24c0 13.203 10.797 24 24 24h24v96H208V48zm256 416H208V240h256v224z"] };
var faFemale = { prefix: 'far', iconName: 'female', icon: [320, 512, [], "f182", "M300.621 331.514L252.582 192.47a63.903 63.903 0 0 0-17.386-26.643c15.424-17.601 24.788-40.64 24.788-65.827 0-55.14-44.86-100-100-100s-100 44.86-100 100c0 25.187 9.364 48.226 24.789 65.828a63.905 63.905 0 0 0-17.388 26.647l-47.93 138.686C5.21 373.97 36.902 416 79.999 416l-.014 32c0 35.29 28.71 64 64 64h32c35.29 0 64-28.71 64-64l.014-32c44.01-.246 74.481-42.859 60.622-84.486zM159.985 48c28.719 0 52 23.281 52 52s-23.281 52-52 52-52-23.281-52-52 23.281-52 52-52zm79.629 320h-47.629v80c0 8.837-7.164 16-16 16h-32c-8.837 0-16-7.163-16-16v-80h-48c-10.536 0-18.793-10.217-15.062-21.412L112.806 208a16 16 0 0 1 15.179-10.94h7.91a100.128 100.128 0 0 0 48.18 0h7.91A16 16 0 0 1 207.164 208l48 138.94c3.328 9.986-3.739 21.06-15.55 21.06z"] };
var faFieldHockey = { prefix: 'far', iconName: 'field-hockey', icon: [640, 512, [], "f44c", "M619.5 96.3L558.8 157l-45.2-45.2 91.2-91.2C612.4 12.9 607 0 596.3 0h-33.9c-3.2 0-6.2 1.3-8.5 3.5L214.7 342.7c-29.4 29.5-75.6-14.8-45.3-45.2 31.2-31.2 31.2-81.9 0-113.1-31.2-31.2-81.8-31.3-113.1 0C20 220.6 0 268.8 0 320.1 0 426.7 86.3 512 192 512c86.5 0 131.8-52.2 153.3-73.7 18.2 43.3 61 73.7 110.7 73.7 66.2 0 120-53.8 120-120 0-49.8-30.5-92.5-73.7-110.7l134.2-134.2c2.3-2.3 3.5-5.3 3.5-8.5v-33.9c0-10.6-12.9-16-20.5-8.4zM192 464c-38.5 0-74.7-14.9-101.8-42C63 394.8 48 358.6 48 320.1c0-38.5 15-74.7 42.2-101.8 29.5-29.6 75.6 14.9 45.2 45.3-31.1 31.2-31.1 81.9.2 113.2 31.1 30.8 81.7 31.3 113-.2l231.1-231.1 45.2 45.2-82.5 82.5c-55.2 6.3-98.7 49.8-105 105C293.3 422.5 262.2 464 192 464zm336-72c0 39.7-32.3 72-72 72s-72-32.3-72-72 32.3-72 72-72 72 32.3 72 72z"] };
var faFighterJet = { prefix: 'far', iconName: 'fighter-jet', icon: [640, 512, [], "f0fb", "M519.953 181.397l-107.935-12.336L370.219 152H359.07l-70.571-88.214c22.23-1.229 39.503-7.698 39.503-15.786 0-9-21.383-16-47.189-16H128.002v32H144v63.531L119.476 96H45.185L8 133.185v62.12l-8 .971v119.447l8 .971v62.12L45.185 416h74.291L144 384.469V448h-15.998v32h152.811c25.806 0 47.189-7 47.189-16 0-8.088-17.273-14.558-39.503-15.786L359.07 360h11.149l41.8-17.061 107.935-12.336C580.922 317.055 640.297 308.569 640 256c.298-52.759-59.534-61.154-120.047-74.603zM512 283.2L400 296l-39.2 16H336l-96 120h-48V296h-40l-56 72H65.067L56 358.933V304h8v-16h40v-8l-56-6.8v-34.4l56-6.8v-8H64v-16h-8v-54.933L65.067 144H96l56 72h40V80h48l96 120h24.8l39.2 16 112 12.8c81.6 18.133 80 22.596 80 27.2s1.6 9.067-80 27.2z"] };
var faFile = { prefix: 'far', iconName: 'file', icon: [384, 512, [], "f15b", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"] };
var faFileAlt = { prefix: 'far', iconName: 'file-alt', icon: [384, 512, [], "f15c", "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"] };
var faFileArchive = { prefix: 'far', iconName: 'file-archive', icon: [384, 512, [], "f1c6", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 51.882L332.118 128H256V51.882zM336 464H48V48h79.714v16h32V48H208v104c0 13.255 10.745 24 24 24h104v288zM192.27 96h-32V64h32v32zm-32 0v32h-32V96h32zm0 64v32h-32v-32h32zm32 0h-32v-32h32v32zm1.909 105.678A12 12 0 0 0 182.406 256H160.27v-32h-32v32l-19.69 97.106C101.989 385.611 126.834 416 160 416c33.052 0 57.871-30.192 51.476-62.62l-17.297-87.702zM160.27 390.073c-17.918 0-32.444-12.105-32.444-27.036 0-14.932 14.525-27.036 32.444-27.036s32.444 12.105 32.444 27.036c0 14.931-14.526 27.036-32.444 27.036zm32-166.073h-32v-32h32v32z"] };
var faFileAudio = { prefix: 'far', iconName: 'file-audio', icon: [384, 512, [], "f1c7", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"] };
var faFileCheck = { prefix: 'far', iconName: 'file-check', icon: [384, 512, [], "f316", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm261.151-192.661L166.842 412.508c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.7c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.706 4.636 12.303-.069 16.971z"] };
var faFileCode = { prefix: 'far', iconName: 'file-code', icon: [384, 512, [], "f1c9", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm101.677-115.115L116.854 320l32.822-28.885a8.793 8.793 0 0 0 .605-12.624l-17.403-18.564c-3.384-3.613-8.964-3.662-12.438-.401L62.78 313.58c-3.703 3.474-3.704 9.367.001 12.84l57.659 54.055a8.738 8.738 0 0 0 6.012 2.381 8.746 8.746 0 0 0 6.427-2.782l17.403-18.563a8.795 8.795 0 0 0-.605-12.626zm84.284-127.85l-24.401-7.084a8.796 8.796 0 0 0-10.905 5.998L144.04 408.061c-1.353 4.66 1.338 9.552 5.998 10.905l24.403 7.084c4.68 1.355 9.557-1.354 10.905-5.998l54.612-188.112c1.354-4.66-1.337-9.552-5.997-10.905zm87.258 92.545l-57.658-54.055c-3.526-3.307-9.099-3.165-12.439.401l-17.403 18.563a8.795 8.795 0 0 0 .605 12.625L267.146 320l-32.822 28.885a8.793 8.793 0 0 0-.605 12.624l17.403 18.564a8.797 8.797 0 0 0 12.439.401h-.001l57.66-54.055c3.703-3.473 3.703-9.366-.001-12.839z"] };
var faFileEdit = { prefix: 'far', iconName: 'file-edit', icon: [384, 512, [], "f31c", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm163.1-229.9l46.8 46.8c2 2 2 5.2 0 7.2L143.4 402.6 95.2 408c-6.4.7-11.9-4.7-11.2-11.2l5.4-48.2 114.5-114.5c2-2 5.2-2 7.2 0zm83 17.8l-19.5 19.5c-2 2-5.2 2-7.2 0l-46.8-46.8c-2-2-2-5.2 0-7.2l19.5-19.5c7.9-7.9 20.7-7.9 28.6 0l25.4 25.4c7.9 7.9 7.9 20.7 0 28.6z"] };
var faFileExcel = { prefix: 'far', iconName: 'file-excel', icon: [384, 512, [], "f1c3", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"] };
var faFileExclamation = { prefix: 'far', iconName: 'file-exclamation', icon: [384, 512, [], "f31a", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm108.6-251.3l6.5 104c.4 6.3 5.6 11.3 12 11.3h33.8c6.3 0 11.6-4.9 12-11.3l6.5-104c.4-6.9-5.1-12.7-12-12.7h-46.8c-6.9 0-12.4 5.8-12 12.7zM232 384c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"] };
var faFileImage = { prefix: 'far', iconName: 'file-image', icon: [384, 512, [], "f1c5", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"] };
var faFileMedical = { prefix: 'far', iconName: 'file-medical', icon: [384, 512, [], "f477", "M224 232c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-56v-56zM369.8 98l-83.9-83.9C276.9 5.1 264.7 0 252 0H48C21.5.1 0 21.6 0 48.1V464c0 26.5 21.5 48 48 48h287.9c26.5 0 48.1-21.5 48.1-48V132c0-12.7-5.2-25-14.2-34zM255.9 52l76.1 76.1h-76.1V52zM336 464H48V48.1h160v104c0 13.3 10.7 24 24 24h104V464z"] };
var faFileMedicalAlt = { prefix: 'far', iconName: 'file-medical-alt', icon: [448, 512, [], "f478", "M433.9 98l-84-84c-9-9-21.1-14-33.8-14h-204C85.6.1 64 21.6 64 48.1V272H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h113.2l32.5 65.1c5.9 11.8 22.7 11.8 28.6 0l49.7-99.4 17.2 34.3H344c13.2 0 24-10.8 24-24s-10.8-24-24-24h-57.2l-32.5-65.1c-5.9-11.8-22.7-11.8-28.6 0L176 306.3 158.9 272H112V48.1h160v104c0 13.3 10.7 24 24 24h104V464H112.1v-96H64v96c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V132c0-12.8-5.1-25-14.1-34zM320 128.1V52l76.1 76.1H320z"] };
var faFileMinus = { prefix: 'far', iconName: 'file-minus', icon: [384, 512, [], "f318", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm44-136c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H92z"] };
var faFilePdf = { prefix: 'far', iconName: 'file-pdf', icon: [384, 512, [], "f1c1", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"] };
var faFilePlus = { prefix: 'far', iconName: 'file-plus', icon: [384, 512, [], "f319", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm256-172v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76H92c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12z"] };
var faFilePowerpoint = { prefix: 'far', iconName: 'file-powerpoint', icon: [384, 512, [], "f1c4", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm72-60V236c0-6.6 5.4-12 12-12h69.2c36.7 0 62.8 27 62.8 66.3 0 74.3-68.7 66.5-95.5 66.5V404c0 6.6-5.4 12-12 12H132c-6.6 0-12-5.4-12-12zm48.5-87.4h23c7.9 0 13.9-2.4 18.1-7.2 8.5-9.8 8.4-28.5.1-37.8-4.1-4.6-9.9-7-17.4-7h-23.9v52z"] };
var faFileTimes = { prefix: 'far', iconName: 'file-times', icon: [384, 512, [], "f317", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm231.7-89.3l-17 17c-4.7 4.7-12.3 4.7-17 0L192 337.9l-53.7 53.7c-4.7 4.7-12.3 4.7-17 0l-17-17c-4.7-4.7-4.7-12.3 0-17l53.7-53.7-53.7-53.7c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0L192 270l53.7-53.7c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17L225.9 304l53.7 53.7c4.8 4.7 4.8 12.3.1 17z"] };
var faFileVideo = { prefix: 'far', iconName: 'file-video', icon: [384, 512, [], "f1c8", "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"] };
var faFileWord = { prefix: 'far', iconName: 'file-word', icon: [384, 512, [], "f1c2", "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"] };
var faFilm = { prefix: 'far', iconName: 'film', icon: [512, 512, [], "f008", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 208c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm96 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"] };
var faFilmAlt = { prefix: 'far', iconName: 'film-alt', icon: [512, 512, [], "f3a0", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm280 208c0 6.6-5.4 12-12 12H148c-6.6 0-12-5.4-12-12V124c0-6.6 5.4-12 12-12h216c6.6 0 12 5.4 12 12v264zm104-16c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"] };
var faFilter = { prefix: 'far', iconName: 'filter', icon: [512, 512, [], "f0b0", "M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"] };
var faFire = { prefix: 'far', iconName: 'fire', icon: [384, 512, [], "f06d", "M216 24.008c0-23.802-31.165-33.106-44.149-13.038C76.549 158.254 200 238.729 200 288c0 22.056-17.944 40-40 40s-40-17.944-40-40V182.126c0-19.392-21.856-30.755-37.731-19.684C30.754 198.379 0 257.279 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-192.853-168-295.992zM192 464c-79.402 0-144-64.598-144-144 0-28.66 8.564-64.709 24-88v56c0 48.523 39.477 88 88 88s88-39.477 88-88c0-64.267-88-120-64-208 40 88 152 121.771 152 240 0 79.402-64.598 144-144 144z"] };
var faFireExtinguisher = { prefix: 'far', iconName: 'fire-extinguisher', icon: [448, 512, [], "f134", "M420.054 20.658l-144 24C264.919 46.514 256 54.906 256 72h-58.332C208.353 36.108 181.446 0 144 0c-39.435 0-66.368 39.676-52.228 76.203-52.039 13.051-75.381 54.213-90.049 90.884-4.923 12.307 1.063 26.274 13.37 31.197 12.317 4.926 26.279-1.075 31.196-13.37C75.058 112.99 106.964 120 168 120v27.076c-41.543 10.862-72 49.235-72 94.129V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V240c0-44.731-30.596-82.318-72-92.975V120h40c0 16.871 8.727 25.454 20.054 27.342l144 24C434.681 173.78 448 162.501 448 147.669V44.331c0-14.829-13.316-26.112-27.946-23.673zM144 72c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zm96 168v224h-96V241.205c0-26.936 21.366-49.009 47.632-49.204L192 192c26.467 0 48 21.533 48 48zm168-111.218l-112-18.667v-28.23l112-18.667v65.564z"] };
var faFirstAid = { prefix: 'far', iconName: 'first-aid', icon: [576, 512, [], "f479", "M200 288h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM96 432H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h42v352zm336 0H144V80h288v352zm96-6c0 3.3-2.7 6-6 6h-42V80h42c3.3 0 6 2.7 6 6v340z"] };
var faFlag = { prefix: 'far', iconName: 'flag', icon: [512, 512, [], "f024", "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"] };
var faFlagCheckered = { prefix: 'far', iconName: 'flag-checkered', icon: [512, 512, [], "f11e", "M160 112.71v70.38c-27.96 3.85-56.53 13.43-72 22.87v-69.33c17.18-10.48 43.3-21.14 72-23.92zm144 28.56c-25.921-4.31-48.847-12.909-72-19.65v66.62c23.842 6.27 46.477 15.161 72 20.52v-67.49zm-144 41.82v69.06c30.531-3.016 51.364-1.255 72 3.09v-67c-28.52-7.492-48.717-8.342-72-5.15zm72 139.64c25.944 4.314 48.857 12.914 72 19.65v-66.62c-23.657-6.212-46.507-15.174-72-20.52v67.49zM88 336.76c21.71-6.95 47.24-11.89 72-14.52v-70.09c-24.28 2.38-48.01 7.61-72 15.28v69.33zm360-216.68c-21.23 8.13-46.68 15.82-72 20.19v70.59c25.04-4.04 48.57-12.48 72-21.45v-69.33zm0 207.29v-69.33c-15.47 9.44-44.04 19.02-72 22.87v70.38c28.7-2.78 54.82-13.44 72-23.92zM304 208.76v67c28.52 7.492 48.717 8.342 72 5.15v-70.05c-23.832 3.83-46.524 3.263-72-2.1zM445.096 51.819C476.736 38.169 512 61.478 512 95.937v239.918c0 16.196-8.154 31.306-21.713 40.164C463.711 393.383 420.218 416 361.739 416c-68.608 0-112.781-32-161.913-32-56.567 0-89.957 11.28-127.826 28.557V496c0 8.837-7.163 16-16 16H40c-8.837 0-16-7.163-16-16V89.562C9.657 81.262 0 65.764 0 48 0 20.431 23.242-1.71 51.201.104c22.966 1.49 41.865 19.471 44.48 42.336a48.038 48.038 0 0 1-2.142 20.727C115.958 54.482 142.96 48 174.261 48c68.608 0 112.781 32 161.913 32 35.467 0 73.019-12.691 108.922-28.181zM464 96c-31.507 14.634-84.555 32-127.826 32-59.911 0-101.968-32-161.913-32C132.824 96 93.784 112.588 72 128v232c31.447-14.597 84.465-24 127.826-24 59.911 0 101.968 32 161.913 32 41.437 0 80.478-16.588 102.261-32V96z"] };
var faFlask = { prefix: 'far', iconName: 'flask', icon: [448, 512, [], "f0c3", "M437.2 403.5L320 215V48h20c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h20v167L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM377.1 464H70.9c-18.1 0-28.7-20.1-19.3-35.2l117.2-188.5c4.7-7.6 7.2-16.4 7.2-25.3V48h96v167c0 9 2.5 17.7 7.2 25.3l117.2 188.5c9.4 15.1-1.1 35.2-19.3 35.2z"] };
var faFolder = { prefix: 'far', iconName: 'folder', icon: [512, 512, [], "f07b", "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-6 272H54c-3.314 0-6-2.678-6-5.992V117.992A5.993 5.993 0 0 1 54 112h134.118l64 64H458a6 6 0 0 1 6 6v212a6 6 0 0 1-6 6z"] };
var faFolderOpen = { prefix: 'far', iconName: 'folder-open', icon: [576, 512, [], "f07c", "M527.943 224H480v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h400a48.001 48.001 0 0 0 40.704-22.56l79.942-128c19.948-31.917-3.038-73.44-40.703-73.44zM54 112h134.118l64 64H426a6 6 0 0 1 6 6v42H152a48 48 0 0 0-41.098 23.202L48 351.449V117.993A5.993 5.993 0 0 1 54 112zm394 288H72l77.234-128H528l-80 128z"] };
var faFont = { prefix: 'far', iconName: 'font', icon: [448, 512, [], "f031", "M402.629 430.504L262.703 39.953A12 12 0 0 0 251.406 32h-54.811a12 12 0 0 0-11.297 7.953L45.371 430.504H20c-6.627 0-12 5.373-12 12V468c0 6.627 5.373 12 12 12h120c6.627 0 12-5.373 12-12v-25.496c0-6.627-5.373-12-12-12h-30.538l34.901-99.625h158.64l34.901 99.625H308c-6.627 0-12 5.373-12 12V468c0 6.627 5.373 12 12 12h120c6.627 0 12-5.373 12-12v-25.496c0-6.627-5.373-12-12-12h-25.371zM160.227 280.113l55.206-155.468C221.145 106.244 224 90.38 224 90.38s2.221 15.864 8.566 34.266l54.573 155.468H160.227z"] };
var faFootballBall = { prefix: 'far', iconName: 'football-ball', icon: [496, 512, [], "f44e", "M481.4 60.9c-4.8-18.2-19.1-32.5-37.2-37.4-23.8-6.4-211.8-59.9-349.7 78.2C-28.2 224.6-2.4 386.9 14.6 451.6c4.8 18.2 19.1 31.6 37.2 36.5 23.8 6.4 211.7 60.9 349.7-77.3 122.7-122.9 96.9-285.3 79.9-349.9zM64.3 442.6c-1.6-.4-2.8-1.7-3.2-3.3-5.4-20.3-11.7-51.9-12.8-88.9l105.1 105.1c-36.8-1.2-68.5-7.4-89.1-12.9zm303.3-66.7c-41.2 41.3-91.6 66.6-150.1 75.9L52.3 286.6c8.2-50.2 29.6-103.9 76.1-150.5 41.2-41.3 91.6-66.6 150.1-75.9l165.1 165.1c-8.1 50.3-29.5 104-76 150.6zm-25-319.4c36.8 1.2 68.5 7.4 89.1 12.9 1.6.4 2.8 1.7 3.2 3.3 5.4 20.3 11.7 51.9 12.8 88.9L342.6 56.5zm-88.9 103.3l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-22.7 22.7-28.3-28.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-22.6 22.6-28.3-28.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-28.3 28.3c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l28.3-28.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3 22.6-22.6 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L270.6 256l22.6-22.6 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3 28.3-28.3c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0l-28.3 28.3-28.2-28.4c-3.2-3.1-8.2-3.1-11.3 0z"] };
var faFootballHelmet = { prefix: 'far', iconName: 'football-helmet', icon: [512, 512, [], "f44f", "M479.6 320H355.5l-15.2-76 136.5-17.8c9-1.2 15.6-9.8 13.9-18.7C468.1 93.8 368.3 8 248 8 114.9 8 18.2 109.5 2.6 219.9-7.6 292 13.3 359 53.7 409.9c3.1 3.9 7.8 6.1 12.8 6.1H120c92.7 46.4 95 49.8 115 49.8 17 0 33.8-6.6 46.4-19.2 36.2-36.2 10.9-79.7 5-94.6h42.9l9.5 49.5c9.5 47.4 47.6 83.2 95.6 89.2 42.2 5.3 52.6 9.6 66.5-2.6 14.3-12.6 10.8-18.4 10.8-136.1-.1-17.7-14.4-32-32.1-32zm-206 0l-10.3-25.7c-7.8-19.4 4.9-40.9 25.6-43.6l19.6-2.6 14.4 71.9h-49.3zm9.1-116.9c-51.8 6.7-83.4 60.5-64 109l32.6 81.6c4.6 11.5-3.9 24.1-16.3 24.1-5.9 0 .2 2.1-103.7-49.8H82.4c-28-41.2-39.5-90.9-32.3-141.4C62.3 140.1 139.6 56 248 56c83.2 0 156.4 51.9 185.8 127.4l-151.1 19.7zm196.9 261l-41.3-5.2c-25.9-3.2-47.6-18.7-59.7-40.7h101.1l-.1 45.9zm0-80.1H368.3l-6.4-32h117.7v32zM176 312c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"] };
var faForklift = { prefix: 'far', iconName: 'forklift', icon: [640, 512, [], "f47a", "M416 344.9V237.1c0-8.7-1.8-17.2-5.2-25.2L332.5 29.1C324.9 11.4 307.6 0 288.3 0H144c-26.5 0-48 21.5-48 48v112H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96s96-43 96-96h64c0 53 43 96 96 96s96-43 96-96c0-28.3-12.5-53.5-32-71.1zM144 48h144.3l78.4 182.8c.9 2 1.3 4.1 1.3 6.3v2.9H246.1c-8.9 0-17.7-3-24.7-8.5L144 170.6V48zM96 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm173.3-96h-90.6c-16.6-28.6-47.2-48-82.7-48-17.6 0-33.8 5.1-48 13.3V208h65.9l77.9 61.2c15.4 12.1 34.8 18.8 54.4 18.8H368v33.6c-5.2-.9-10.5-1.6-16-1.6-35.4 0-66.1 19.4-82.7 48zm82.7 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-64h-96V16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"] };
var faForward = { prefix: 'far', iconName: 'forward', icon: [512, 512, [], "f04e", "M244.5 230.8L52.5 71.4C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160.6c15.3-12.8 15.3-36.4 0-49.2zM48 381.7V130.1l151 125.4L48 381.7zm452.5-150.9l-192-159.4C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160.6c15.3-12.8 15.3-36.4 0-49.2zM304 381.7V130.1l151 125.4-151 126.2z"] };
var faFrown = { prefix: 'far', iconName: 'frown', icon: [512, 512, [], "f119", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm64 136c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059s-23.059-10.324-23.059-23.059v-.017C266.386 181.488 264 190.465 264 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm-128 0c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059-12.735 0-23.059-10.324-23.059-23.059v-.017C138.386 181.488 136 190.465 136 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm171.547 201.782c-56.595-76.964-158.383-77.065-215.057-.001-18.82 25.593 19.858 54.018 38.67 28.438 37.511-51.01 100.365-50.796 137.717-.001 18.509 25.172 57.821-2.395 38.67-28.436z"] };
var faFutbol = { prefix: 'far', iconName: 'futbol', icon: [496, 512, [], "f1e3", "M483.8 179.4C449.8 74.6 352.6 8 248.1 8c-25.4 0-51.2 3.9-76.7 12.2C41.2 62.5-30.1 202.4 12.2 332.6 46.2 437.4 143.4 504 247.9 504c25.4 0 51.2-3.9 76.7-12.2 130.2-42.3 201.5-182.2 159.2-312.4zm-74.5 193.7l-52.2 6.4-43.7-60.9 24.4-75.2 71.1-22.1 38.9 36.4c-.2 30.7-7.4 61.1-21.7 89.2-4.7 9.3-10.7 17.8-16.8 26.2zm0-235.4l-10.4 53.1-70.7 22-64.2-46.5V92.5l47.4-26.2c39.2 13 73.4 38 97.9 71.4zM184.9 66.4L232 92.5v73.8l-64.2 46.5-70.6-22-10.1-52.5c24.3-33.4 57.9-58.6 97.8-71.9zM139 379.5L85.9 373c-14.4-20.1-37.3-59.6-37.8-115.3l39-36.4 71.1 22.2 24.3 74.3-43.5 61.7zm48.2 67l-22.4-48.1 43.6-61.7H287l44.3 61.7-22.4 48.1c-6.2 1.8-57.6 20.4-121.7 0z"] };
var faGamepad = { prefix: 'far', iconName: 'gamepad', icon: [640, 512, [], "f11b", "M256 240v32c0 4.4-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-48h-48c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v48h48c4.4 0 8 3.6 8 8zm240-64c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm-64 80c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm32-128H176c-70.8 0-128 57.3-128 128 0 70.8 57.3 128 128 128 56.2 0 86.1-33.3 101.7-48h84.6c16.2 15.3 45.9 48 101.7 48 70.8 0 128-57.3 128-128 0-70.8-57.3-128-128-128m0-48c97.2 0 176 78.8 176 176s-78.8 176-176 176c-46.8 0-89.3-18.2-120.8-48h-46.4c-31.5 29.8-74 48-120.8 48C78.8 432 0 353.2 0 256S78.8 80 176 80h288z"] };
var faGavel = { prefix: 'far', iconName: 'gavel', icon: [512, 512, [], "f0e3", "M497.965 176.618l-23.185-23.185c-13.611-13.61-33.433-17.321-50.434-11.133l-54.624-54.624c6.189-16.998 2.479-36.821-11.133-50.433l-23.185-23.174c-18.757-18.757-49.122-18.76-67.882 0L163.914 117.667c-18.715 18.715-18.715 49.167 0 67.883l23.184 23.184c13.613 13.613 33.433 17.326 50.434 11.133l10.342 10.342-56.543 56.52c-22.021-22.02-51.866-19.249-69.498-1.616L14.069 392.908c-18.757 18.757-18.76 49.122 0 67.882l37.163 37.174c18.714 18.714 49.165 18.715 67.882 0l107.773-107.796c17.412-17.41 20.652-47.231-1.616-69.499l56.543-56.519 10.341 10.341c-6.189 16.998-2.479 36.821 11.134 50.434l25.417 25.417c17.484 17.484 45.932 17.485 63.417 0L497.965 244.5c18.713-18.715 18.713-49.167 0-67.882zM85.195 464.043l-.021-.021L48 426.849l107.773-107.795 37.173 37.173L85.195 464.043zm275.219-149.875l-23.184-23.184 14.793-14.793L235.832 160l-14.792 14.792-23.184-23.184L301.465 48l23.184 23.184L307.832 88l116.191 116.191 16.816-16.816 23.184 23.184-103.609 103.609z"] };
var faGem = { prefix: 'far', iconName: 'gem', icon: [576, 512, [], "f3a5", "M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"] };
var faGenderless = { prefix: 'far', iconName: 'genderless', icon: [288, 512, [], "f22d", "M144 160c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96m0-48C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"] };
var faGift = { prefix: 'far', iconName: 'gift', icon: [512, 512, [], "f06b", "M488 176h-60.167C440.425 160.774 448 141.255 448 120c0-48.523-39.477-88-88-88-41.987 0-69.013 21.733-104 69.643C221.012 53.733 193.987 32 152 32c-48.523 0-88 39.477-88 88 0 21.255 7.575 40.774 20.167 56H24c-13.255 0-24 10.745-24 24v128c0 13.255 10.745 24 24 24h8v80c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-80h8c13.255 0 24-10.745 24-24V200c0-13.255-10.745-24-24-24zm-212.073-18.975C322.531 87.599 337.998 80 360 80c22.056 0 40 17.944 40 40s-17.944 40-40 40h-86.07l1.997-2.975zM152 80c22.002 0 37.469 7.599 84.073 77.025L238.07 160H152c-22.056 0-40-17.944-40-40s17.944-40 40-40zM80 432v-80h128v-48H48v-80h184v208H80zm384-128H304v48h128v80H280V224h184v80z"] };
var faGlassMartini = { prefix: 'far', iconName: 'glass-martini', icon: [512, 512, [], "f000", "M508 26.6C517.1 16.3 509.7 0 496 0H16C2.3 0-5.1 16.3 4 26.6L232 285v187H124c-15.5 0-28 12.5-28 28 0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12 0-15.5-12.5-28-28-28H280V285L508 26.6zM425.1 48L256 239.6 86.9 48h338.2z"] };
var faGlobe = { prefix: 'far', iconName: 'globe', icon: [512, 512, [], "f0ac", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm179.698 160h-84.125c-7.333-37.407-19.309-72.323-35.338-102.801C369.502 81.947 412.301 120.325 435.698 168zm16.318 128h-93.713c2.191-25.905 2.339-52.521-.017-80h93.73c5.309 26.293 5.317 53.669 0 80zm-250.08 0c-2.561-26.498-2.588-53.143-.041-80h108.21c2.545 26.832 2.522 53.475-.041 80H201.936zm100.544 48c-9.351 42.053-25.298 79.912-46.48 109.243-21.183-29.332-37.129-67.19-46.48-109.243h92.96zM59.984 216h93.73c-2.201 25.679-2.361 52.28-.017 80H59.984c-5.309-26.292-5.317-53.669 0-80zm149.41-48c9.275-41.974 25.172-79.655 46.606-109.277 21.434 29.622 37.332 67.304 46.606 109.277h-93.212zm-13.63-102.801C179.736 95.677 167.759 130.593 160.427 168H76.302c23.378-47.636 66.155-86.04 119.462-102.801zM76.302 344h84.043c7.301 37.472 19.247 72.317 35.308 102.766C142.008 429.864 99.48 391.227 76.302 344zm240.045 102.766c16.061-30.449 28.007-65.294 35.308-102.766h84.043c-23.217 47.307-65.791 85.891-119.351 102.766z"] };
var faGolfBall = { prefix: 'far', iconName: 'golf-ball', icon: [416, 512, [], "f450", "M416 208C416 94.2 324.7 1.8 211.3 0 97.3-1.8 2.5 89.4.1 203.4c-1.3 60.7 23.6 115.3 64 154.1V416c0 30.9 25.1 56 56 56h16c4.4 0 8 3.6 8 8v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20c0-30.9-25.1-56-56-56-12.8 0-24 2.1-24-8v-32h192v32c0 10.1-11.2 8-24 8-30.9 0-56 25.1-56 56v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20c0-4.4 3.6-8 8-8h16c30.9 0 56-25.1 56-56v-58.5C391.3 319.7 416 266.8 416 208zM208 48c88.2 0 160 71.8 160 160 0 52.7-25.9 99-65.5 128h-189C73.9 307 48 260.7 48 208c0-88.2 71.8-160 160-160zm48 142.9c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm80 16c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9zm-64 64c0 18.3-14.8 33.1-33.1 33.1-14.4 0-26.3-9.3-30.9-22.1 26.3 9.4 51.5-15.2 41.9-41.9 12.8 4.6 22.1 16.5 22.1 30.9z"] };
var faGolfClub = { prefix: 'far', iconName: 'golf-club', icon: [640, 512, [], "f451", "M631 8.6l-14.4-6.9c-8-3.9-17.5-.5-21.4 7.4L465.5 279.3 75.8 206.2C36 198.7 0 229.5 0 269.1V448c0 35.3 28.6 64 64 64h302.7c24.6 0 47-14.1 57.7-36.3l214-445.8c3.8-7.9.5-17.5-7.4-21.3zM434.9 342.9l-53.8 112c-2.7 5.5-8.3 9.1-14.4 9.1H64c-19.1 0-16-23-16-24h72c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H48v-48h72c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H48v-26.9c0-9.6 8.6-17.7 18.9-15.7l356.5 66.9c10.4 1.9 16 13.1 11.5 22.6z"] };
var faGraduationCap = { prefix: 'far', iconName: 'graduation-cap', icon: [640, 512, [], "f19d", "M607.13 147.683L352.139 68.701l-.311-.094a112.25 112.25 0 0 0-63.656 0l-255.31 79.078C13.505 153.533 0 171.734 0 192s13.505 38.467 32.863 44.315l17.559 5.439c-1.009 5.804-1.619 11.865-1.957 18.27C38.646 265.489 32 275.966 32 288c0 11.952 6.557 22.366 16.265 27.861L32.068 438.956C31.438 443.747 35.172 448 40 448h48c4.832 0 8.562-4.257 7.932-9.044L79.735 315.861C89.443 310.366 96 299.952 96 288c0-11.645-6.222-21.835-15.521-27.433.191-3.236.453-6.305.827-9.245l50.665 15.695C126.234 305.318 120 347.276 120 348.8c0 65.722 134.242 80.32 200 80.32 65.75 0 200-14.593 200-80.32 0-2.037-6.224-43.583-11.983-81.78l99.113-30.703C626.491 230.472 640 212.269 640 192s-13.509-38.472-32.87-44.317zm-135.511 200.37C457.32 365.398 391.446 381.12 320 381.12c-47.192 0-132.44-9.806-151.62-33.067l9.999-66.659 109.482 33.915.312.095A112.432 112.432 0 0 0 320 320.01a112.503 112.503 0 0 0 31.827-4.606l109.793-34.011 9.999 66.66zm-133.512-78.648a64.368 64.368 0 0 1-36.208.002L48 192l253.89-77.404a64.325 64.325 0 0 1 36.216-.001L592 192l-253.893 77.405z"] };
var faHSquare = { prefix: 'far', iconName: 'h-square', icon: [448, 512, [], "f0fd", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-50-292v232c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12v-92H152v92c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V140c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v92h144v-92c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12z"] };
var faH1 = { prefix: 'far', iconName: 'h1', icon: [640, 512, [], "f313", "M156.369 382.846V404c0 6.627-5.373 12-12 12H36.123c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.513v-230.13H36.123c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.951v91.832h149.164v-91.832h-26.951c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.514v230.13h26.514c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H239.632c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.951v-91.394H117.418v91.394h26.951c6.628 0 12 5.373 12 12zM533.293 96h-29.389a12 12 0 0 0-8.357 3.388l-67.423 65.428c-4.751 4.611-4.871 12.199-.266 16.957l17.196 17.77c4.637 4.792 12.292 4.884 17.044.205l24.172-23.806a133.088 133.088 0 0 0 6.009-6.146c-.012 1.15-.018 2.318-.018 3.489v194.061h-56.274c-6.627 0-12 5.373-12 12V404c0 6.627 5.373 12 12 12h164.704c6.627 0 12-5.373 12-12v-24.655c0-6.627-5.373-12-12-12h-55.399V108c.001-6.627-5.372-12-11.999-12z"] };
var faH2 = { prefix: 'far', iconName: 'h2', icon: [640, 512, [], "f314", "M465.047 367.418h140.525c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H418.861a12.003 12.003 0 0 1-11.895-10.404c-.775-5.742-1.411-12.127-1.411-18.694 0-113.15 151.2-130.424 151.2-198.396 0-27.292-20.093-45.629-49.998-45.629-22.424 0-41.163 13.308-54.337 31.805-3.781 5.308-11.073 6.68-16.485 3.049l-21.572-14.475c-5.308-3.562-6.894-10.658-3.61-16.143 5.132-8.572 11.61-16.791 20.528-25.119 15.027-14.032 40.851-30.759 78.535-30.759 60.615 0 102.95 38.741 102.95 94.21 0 101.506-139.073 120.723-147.719 181.973zm-308.678 15.428V404c0 6.627-5.373 12-12 12H36.123c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.513v-230.13H36.123c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.951v91.832h149.164v-91.832h-26.951c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.514v230.13h26.514c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H239.632c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.951v-91.394H117.418v91.394h26.951c6.628 0 12 5.373 12 12z"] };
var faH3 = { prefix: 'far', iconName: 'h3', icon: [640, 512, [], "f315", "M616.045 316.065c0 57.788-45.891 104.698-110.38 104.698-38.959 0-75.124-15.889-99.864-39.575-4.305-4.122-4.876-10.806-1.393-15.643l16.064-22.311c4.201-5.835 12.51-6.64 17.851-1.827 18.495 16.667 41.451 27.278 65.595 27.278 32.739 0 57.428-21.87 57.428-50.872 0-23.669-17.329-51.31-66.167-51.31H478.03a12 12 0 0 1-11.008-7.223l-6.741-15.534a12 12 0 0 1 1.869-12.553l64.673-76.012a253.429 253.429 0 0 1 9.816-10.854c-3.571.149-7.786.252-12.619.252h-97.942c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12H597.49c6.627 0 12 5.373 12 12v18.602c0 2.892-1.044 5.687-2.941 7.87l-75.722 87.159c48.291 9.03 85.218 42.581 85.218 94.434zm-459.676 66.781V404c0 6.627-5.373 12-12 12H36.123c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.513v-230.13H36.123c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.951v91.832h149.164v-91.832h-26.951c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h108.246c6.627 0 12 5.373 12 12v20.716c0 6.627-5.373 12-12 12h-26.514v230.13h26.514c6.627 0 12 5.373 12 12V404c0 6.627-5.373 12-12 12H239.632c-6.627 0-12-5.373-12-12v-21.154c0-6.627 5.373-12 12-12h26.951v-91.394H117.418v91.394h26.951c6.628 0 12 5.373 12 12z"] };
var faHandHoldingBox = { prefix: 'far', iconName: 'hand-holding-box', icon: [576, 512, [], "f47b", "M112 288h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm32-240h80v112l64-32 64 32V48h80v192H144V48zm421.3 280.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H232c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h86.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H160c-27 0-53.1 9.3-74.1 26.3L0 416v96h372.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"] };
var faHandLizard = { prefix: 'far', iconName: 'hand-lizard', icon: [576, 512, [], "f258", "M556.686 290.542L410.328 64.829C397.001 44.272 374.417 32 349.917 32H56C25.121 32 0 57.122 0 88v8c0 44.112 35.888 80 80 80h196.042l-18.333 48H144c-48.523 0-88 39.477-88 88 0 30.879 25.121 56 56 56h131.552c2.987 0 5.914.549 8.697 1.631L352 408.418V480h224V355.829c0-23.225-6.679-45.801-19.314-65.287zM528 432H400v-23.582c0-19.948-12.014-37.508-30.604-44.736l-99.751-38.788A71.733 71.733 0 0 0 243.552 320H112c-4.411 0-8-3.589-8-8 0-22.056 17.944-40 40-40h113.709c19.767 0 37.786-12.407 44.84-30.873l24.552-64.281c8.996-23.553-8.428-48.846-33.63-48.846H80c-17.645 0-32-14.355-32-32v-8c0-4.411 3.589-8 8-8h293.917c8.166 0 15.693 4.09 20.137 10.942l146.358 225.715A71.84 71.84 0 0 1 528 355.829V432z"] };
var faHandPaper = { prefix: 'far', iconName: 'hand-paper', icon: [448, 512, [], "f256", "M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"] };
var faHandPeace = { prefix: 'far', iconName: 'hand-peace', icon: [448, 512, [], "f25b", "M362.146 191.976c-13.71-21.649-38.761-34.016-65.006-30.341V74c0-40.804-32.811-74-73.141-74-40.33 0-73.14 33.196-73.14 74L160 168l-18.679-78.85C126.578 50.843 83.85 32.11 46.209 47.208 8.735 62.238-9.571 104.963 5.008 142.85l55.757 144.927c-30.557 24.956-43.994 57.809-24.733 92.218l54.853 97.999C102.625 498.97 124.73 512 148.575 512h205.702c30.744 0 57.558-21.44 64.555-51.797l27.427-118.999a67.801 67.801 0 0 0 1.729-15.203L448 256c0-44.956-43.263-77.343-85.854-64.024zM399.987 326c0 1.488-.169 2.977-.502 4.423l-27.427 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H148.575c-6.486 0-12.542-3.621-15.805-9.449l-54.854-98c-4.557-8.141-2.619-18.668 4.508-24.488l26.647-21.764a16 16 0 0 0 4.812-18.139l-64.09-166.549C37.226 92.956 84.37 74.837 96.51 106.389l59.784 155.357A16 16 0 0 0 171.227 272h11.632c8.837 0 16-7.163 16-16V74c0-34.375 50.281-34.43 50.281 0v182c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16v-28c0-25.122 36.567-25.159 36.567 0v28c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16 0-25.12 36.567-25.16 36.567 0v70z"] };
var faHandPointDown = { prefix: 'far', iconName: 'hand-point-down', icon: [448, 512, [], "f0a7", "M188.8 512c45.616 0 83.2-37.765 83.2-83.2v-35.647a93.148 93.148 0 0 0 22.064-7.929c22.006 2.507 44.978-3.503 62.791-15.985C409.342 368.1 448 331.841 448 269.299V248c0-60.063-40-98.512-40-127.2v-2.679c4.952-5.747 8-13.536 8-22.12V32c0-17.673-12.894-32-28.8-32H156.8C140.894 0 128 14.327 128 32v64c0 8.584 3.048 16.373 8 22.12v2.679c0 6.964-6.193 14.862-23.668 30.183l-.148.129-.146.131c-9.937 8.856-20.841 18.116-33.253 25.851C48.537 195.798 0 207.486 0 252.8c0 56.928 35.286 92 83.2 92 8.026 0 15.489-.814 22.4-2.176V428.8c0 45.099 38.101 83.2 83.2 83.2zm0-48c-18.7 0-35.2-16.775-35.2-35.2V270.4c-17.325 0-35.2 26.4-70.4 26.4-26.4 0-35.2-20.625-35.2-44 0-8.794 32.712-20.445 56.1-34.926 14.575-9.074 27.225-19.524 39.875-30.799 18.374-16.109 36.633-33.836 39.596-59.075h176.752C364.087 170.79 400 202.509 400 248v21.299c0 40.524-22.197 57.124-61.325 50.601-8.001 14.612-33.979 24.151-53.625 12.925-18.225 19.365-46.381 17.787-61.05 4.95V428.8c0 18.975-16.225 35.2-35.2 35.2zM328 64c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24z"] };
var faHandPointLeft = { prefix: 'far', iconName: 'hand-point-left', icon: [512, 512, [], "f0a5", "M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2 0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4 0-26.4 20.625-35.2 44-35.2 8.794 0 20.445 32.712 34.926 56.1 9.074 14.575 19.524 27.225 30.799 39.875 16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325-14.612-8.001-24.151-33.979-12.925-53.625-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"] };
var faHandPointRight = { prefix: 'far', iconName: 'hand-point-right', icon: [512, 512, [], "f0a4", "M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2-45.314 0-57.002 48.537-75.707 78.784-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145 12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2 0-45.099-38.101-83.2-83.2-83.2zm0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05 11.227 19.646 1.687 45.624-12.925 53.625 6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596 11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2 0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2 0 18.975-16.225 35.2-35.2 35.2zM88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"] };
var faHandPointUp = { prefix: 'far', iconName: 'hand-point-up', icon: [448, 512, [], "f0a6", "M105.6 83.2v86.177a115.52 115.52 0 0 0-22.4-2.176c-47.914 0-83.2 35.072-83.2 92 0 45.314 48.537 57.002 78.784 75.707 12.413 7.735 23.317 16.994 33.253 25.851l.146.131.148.129C129.807 376.338 136 384.236 136 391.2v2.679c-4.952 5.747-8 13.536-8 22.12v64c0 17.673 12.894 32 28.8 32h230.4c15.906 0 28.8-14.327 28.8-32v-64c0-8.584-3.048-16.373-8-22.12V391.2c0-28.688 40-67.137 40-127.2v-21.299c0-62.542-38.658-98.8-91.145-99.94-17.813-12.482-40.785-18.491-62.791-15.985A93.148 93.148 0 0 0 272 118.847V83.2C272 37.765 234.416 0 188.8 0c-45.099 0-83.2 38.101-83.2 83.2zm118.4 0v91.026c14.669-12.837 42.825-14.415 61.05 4.95 19.646-11.227 45.624-1.687 53.625 12.925 39.128-6.524 61.325 10.076 61.325 50.6V264c0 45.491-35.913 77.21-39.676 120H183.571c-2.964-25.239-21.222-42.966-39.596-59.075-12.65-11.275-25.3-21.725-39.875-30.799C80.712 279.645 48 267.994 48 259.2c0-23.375 8.8-44 35.2-44 35.2 0 53.075 26.4 70.4 26.4V83.2c0-18.425 16.5-35.2 35.2-35.2 18.975 0 35.2 16.225 35.2 35.2zM352 424c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z"] };
var faHandPointer = { prefix: 'far', iconName: 'hand-pointer', icon: [448, 512, [], "f25a", "M358.182 179.361c-19.493-24.768-52.679-31.945-79.872-19.098-15.127-15.687-36.182-22.487-56.595-19.629V67c0-36.944-29.736-67-66.286-67S89.143 30.056 89.143 67v161.129c-19.909-7.41-43.272-5.094-62.083 8.872-29.355 21.795-35.793 63.333-14.55 93.152l109.699 154.001C134.632 501.59 154.741 512 176 512h178.286c30.802 0 57.574-21.5 64.557-51.797l27.429-118.999A67.873 67.873 0 0 0 448 326v-84c0-46.844-46.625-79.273-89.818-62.639zM80.985 279.697l27.126 38.079c8.995 12.626 29.031 6.287 29.031-9.283V67c0-25.12 36.571-25.16 36.571 0v175c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16v-35c0-25.12 36.571-25.16 36.571 0v35c0 8.836 7.163 16 16 16H272c8.837 0 16-7.164 16-16v-21c0-25.12 36.571-25.16 36.571 0v21c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16 0-25.121 36.571-25.16 36.571 0v84c0 1.488-.169 2.977-.502 4.423l-27.43 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H176c-5.769 0-11.263-2.878-14.697-7.697l-109.712-154c-14.406-20.223 14.994-42.818 29.394-22.606zM176.143 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.733 0-14-7.163-14-16zm75.428 0v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16zM327 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16z"] };
var faHandReceiving = { prefix: 'far', iconName: 'hand-receiving', icon: [640, 512, [], "f47c", "M608 64c-17.7 0-32 14.3-32 32v148.4l-89.8 107.8c-6 7.2-17 7.7-23.6 1.1l-12.8-12.8c-5.6-5.6-6.3-14.5-1.5-20.9l38.1-50.8c10.6-14.1 7.7-34.2-6.4-44.8-14.1-10.6-34.2-7.7-44.8 6.4l-57.6 76.8C361 329.3 352 356.3 352 384v128h160v-3.9c0-10.9 3.7-21.5 10.5-30l107-133.7c6.8-8.5 10.5-19.1 10.5-30V96c0-17.7-14.3-32-32-32zM204.8 230.4c-10.6-14.1-30.7-17-44.8-6.4-14.1 10.6-17 30.7-6.4 44.8l38.1 50.8c4.8 6.4 4.1 15.3-1.5 20.9l-12.8 12.8c-6.7 6.7-17.6 6.2-23.6-1.1L64 244.4V96c0-17.7-14.3-32-32-32S0 78.3 0 96v218.4c0 10.9 3.7 21.5 10.5 30l107 133.7c6.8 8.5 10.5 19.1 10.5 30v3.9h160V384c0-27.7-9-54.6-25.6-76.8l-57.6-76.8zm235.4-123.5L342.6 9.4C336.4 3.1 328.2 0 320 0s-16.4 3.1-22.6 9.4l-97.5 97.5c-12.5 12.5-12.5 32.8 0 45.3l97.5 97.5c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l97.5-97.5c12.6-12.5 12.6-32.8.1-45.3zM320 204.4l-74.9-74.9L320 54.6l74.9 74.9-74.9 74.9z"] };
var faHandRock = { prefix: 'far', iconName: 'hand-rock', icon: [512, 512, [], "f255", "M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"] };
var faHandScissors = { prefix: 'far', iconName: 'hand-scissors', icon: [512, 512, [], "f257", "M256 480l70-.013c5.114 0 10.231-.583 15.203-1.729l118.999-27.427C490.56 443.835 512 417.02 512 386.277V180.575c0-23.845-13.03-45.951-34.005-57.69l-97.999-54.853c-34.409-19.261-67.263-5.824-92.218 24.733L142.85 37.008c-37.887-14.579-80.612 3.727-95.642 41.201-15.098 37.642 3.635 80.37 41.942 95.112L168 192l-94-9.141c-40.804 0-74 32.811-74 73.14 0 40.33 33.196 73.141 74 73.141h87.635c-3.675 26.245 8.692 51.297 30.341 65.006C178.657 436.737 211.044 480 256 480zm0-48.013c-25.16 0-25.12-36.567 0-36.567 8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16h-28c-25.159 0-25.122-36.567 0-36.567h28c8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16H74c-34.43 0-34.375-50.281 0-50.281h182c8.837 0 16-7.163 16-16v-11.632a16 16 0 0 0-10.254-14.933L106.389 128.51c-31.552-12.14-13.432-59.283 19.222-46.717l166.549 64.091a16.001 16.001 0 0 0 18.139-4.812l21.764-26.647c5.82-7.127 16.348-9.064 24.488-4.508l98 54.854c5.828 3.263 9.449 9.318 9.449 15.805v205.701c0 8.491-5.994 15.804-14.576 17.782l-119.001 27.427a19.743 19.743 0 0 1-4.423.502h-70z"] };
var faHandSpock = { prefix: 'far', iconName: 'hand-spock', icon: [512, 512, [], "f259", "M21.096 381.79l129.092 121.513a32 32 0 0 0 21.932 8.698h237.6c14.17 0 26.653-9.319 30.68-22.904l31.815-107.313A115.955 115.955 0 0 0 477 348.811v-36.839c0-4.051.476-8.104 1.414-12.045l31.73-133.41c10.099-42.412-22.316-82.738-65.544-82.525-4.144-24.856-22.543-47.165-49.85-53.992-35.803-8.952-72.227 12.655-81.25 48.75L296.599 184 274.924 52.01c-8.286-36.07-44.303-58.572-80.304-50.296-29.616 6.804-50.138 32.389-51.882 61.295-42.637.831-73.455 40.563-64.071 81.844l31.04 136.508c-27.194-22.515-67.284-19.992-91.482 5.722-25.376 26.961-24.098 69.325 2.871 94.707zm32.068-61.811l.002-.001c7.219-7.672 19.241-7.98 26.856-.813l53.012 49.894C143.225 378.649 160 371.4 160 357.406v-69.479c0-1.193-.134-2.383-.397-3.546l-34.13-150.172c-5.596-24.617 31.502-32.86 37.054-8.421l30.399 133.757a16 16 0 0 0 15.603 12.454h8.604c10.276 0 17.894-9.567 15.594-19.583l-41.62-181.153c-5.623-24.469 31.39-33.076 37.035-8.508l45.22 196.828A16 16 0 0 0 288.956 272h13.217a16 16 0 0 0 15.522-12.119l42.372-169.49c6.104-24.422 42.962-15.159 36.865 9.217L358.805 252.12c-2.521 10.088 5.115 19.88 15.522 19.88h9.694a16 16 0 0 0 15.565-12.295L426.509 146.6c5.821-24.448 42.797-15.687 36.966 8.802L431.72 288.81a100.094 100.094 0 0 0-2.72 23.162v36.839c0 6.548-.943 13.051-2.805 19.328L397.775 464h-219.31L53.978 346.836c-7.629-7.18-7.994-19.229-.814-26.857z"] };
var faHandshake = { prefix: 'far', iconName: 'handshake', icon: [640, 512, [], "f2b5", "M616 96h-48c-7.107 0-13.49 3.091-17.884 8H526.59l-31.13-36.3-.16-.18A103.974 103.974 0 0 0 417.03 32h-46.55c-17.75 0-34.9 4.94-49.69 14.01C304.33 36.93 285.67 32 266.62 32h-32.11c-28.903 0-57.599 11.219-79.2 32.8L116.12 104H89.884C85.49 99.091 79.107 96 72 96H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h48c10.449 0 19.334-6.68 22.629-16h18.801l75.35 67.57c25.542 26.45 59.925 44.43 96.58 44.43 16.39 0 32.28-3.85 46.1-10.93 24.936.496 51.101-10.368 69.07-31.41 19.684-5.579 37.503-17.426 50.72-34.6 20.989-4.401 40.728-16.492 53.42-35.06h40.701c3.295 9.32 12.18 16 22.629 16h48c13.255 0 24-10.745 24-24V120c0-13.255-10.745-24-24-24zM48 352c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16zm412.52-5.76c-15.35 14.295-36.884 11.328-39.95 8 1.414 13.382-18.257 41.043-49.08 38.88-5.541 18.523-28.218 33.826-51.49 25.75-8.89 8.89-22.46 13.13-34.64 13.13-24.95 0-47.77-14.54-63.14-30.91l-81.3-72.91a31.976 31.976 0 0 0-21.36-8.18H96V152h26.75c8.48 0 16.62-3.37 22.62-9.37l43.88-43.88A64.004 64.004 0 0 1 234.51 80h32.11c5.8 0 11.51.79 17 2.3l-43.27 50.49c-23.56 27.48-23.84 67.62-.66 95.44 32.388 38.866 91.378 39.228 124.48 1.98l25.98-30.08L462.59 296c13.44 14.6 10.95 38.13-2.07 50.24zM544 320h-24.458c.104-20.261-6.799-39.33-19.762-54.4L421.7 162.28c4.51-9.51 2.34-21.23-6.01-28.45-10.075-8.691-25.23-7.499-33.86 2.48l-53.63 62.12c-13.828 15.41-38.223 15.145-51.64-.93a25.857 25.857 0 0 1 .23-33.47l57.92-67.58A47.09 47.09 0 0 1 370.48 80h46.55c16.11 0 31.44 6.94 42.07 19.04L504.52 152H544v168zm48 32c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"] };
var faHashtag = { prefix: 'far', iconName: 'hashtag', icon: [448, 512, [], "f292", "M443.524 190.109l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109h-89.045l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L298.192 152h-111.24l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L138.192 152H44.86a12 12 0 0 0-11.813 9.891l-4.286 24C27.448 193.246 33.103 200 40.575 200h89.045l-20 112H16.289a12 12 0 0 0-11.813 9.891l-4.286 24C-1.123 353.246 4.532 360 12.003 360h89.045L82.139 465.891C80.826 473.246 86.481 480 93.953 480h24.38a12 12 0 0 0 11.813-9.891L149.808 360h111.24l-18.909 105.891c-1.313 7.355 4.342 14.109 11.813 14.109h24.38a12 12 0 0 0 11.813-9.891L309.808 360h93.331a12 12 0 0 0 11.813-9.891l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109H318.38l20-112h93.331a12 12 0 0 0 11.813-9.891zM269.62 312H158.38l20-112h111.24l-20 112z"] };
var faHdd = { prefix: 'far', iconName: 'hdd', icon: [576, 512, [], "f0a0", "M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"] };
var faHeading = { prefix: 'far', iconName: 'heading', icon: [448, 512, [], "f1dc", "M300 80h36.703v149.983H111.297V80H148c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v24c0 6.627 5.373 12 12 12h35.841v352H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h136c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-36.703V282.016h225.406V432H300c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h136c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-35.841V80H436c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12z"] };
var faHeadphones = { prefix: 'far', iconName: 'headphones', icon: [512, 512, [], "f025", "M256 32C114.52 32 0 146.497 0 288v49.714a24.001 24.001 0 0 0 12.319 20.966l19.702 10.977C32.908 430.748 82.698 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-40.744 0-76.402 21.758-96 54.287V288c0-114.691 93.309-208 208-208s208 93.309 208 208v22.287C444.402 277.758 408.744 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c61.302 0 111.092-49.252 111.979-110.344l19.702-10.977A24.001 24.001 0 0 0 512 337.713V288c0-141.48-114.497-256-256-256zM144 304v128c-35.29 0-64-28.71-64-64s28.71-64 64-64zm224 128V304c35.29 0 64 28.71 64 64s-28.71 64-64 64z"] };
var faHeart = { prefix: 'far', iconName: 'heart', icon: [576, 512, [], "f004", "M257.3 475.4L92.5 313.6C85.4 307 24 248.1 24 174.8 24 84.1 80.8 24 176 24c41.4 0 80.6 22.8 112 49.8 31.3-27 70.6-49.8 112-49.8 91.7 0 152 56.5 152 150.8 0 52-31.8 103.5-68.1 138.7l-.4.4-164.8 161.5a43.7 43.7 0 0 1-61.4 0zM125.9 279.1L288 438.3l161.8-158.7c27.3-27 54.2-66.3 54.2-104.8C504 107.9 465.8 72 400 72c-47.2 0-92.8 49.3-112 68.4-17-17-64-68.4-112-68.4-65.9 0-104 35.9-104 102.8 0 37.3 26.7 78.9 53.9 104.3z"] };
var faHeartbeat = { prefix: 'far', iconName: 'heartbeat', icon: [512, 512, [], "f21e", "M266.4 427.7c-5.8 5.7-15.1 5.7-20.9 0L136.7 320H68.5l143.3 141.8c24.5 24.2 63.9 24.3 88.4 0L443.5 320h-68.2L266.4 427.7zM354.7 32c-36.5 0-71 12.3-98.7 34.9C228.3 44.3 193.8 32 157.3 32 86.2 32 0 88.9 0 188c0 37.3 13.7 72.1 37.8 100h116.8l29.9-71.7 56.9 126.3c5.5 12.3 22.9 12.7 28.9.6l49.7-99.4 22.1 44.2h132c24.1-27.9 37.8-62.7 37.8-100 .1-99.1-86.1-156-157.2-156zm83.9 224h-76.7l-27.6-55.2c-5.9-11.8-22.7-11.8-28.6 0l-48.9 97.9-58.2-129.3c-5.7-12.8-24-12.5-29.4.4L133.3 256H73.4c-58.8-69.5-7-176 83.9-176 31 0 51 6.2 98.7 53.4C307.1 82.9 325.1 80 354.7 80c91.2 0 142.7 106.5 83.9 176z"] };
var faHexagon = { prefix: 'far', iconName: 'hexagon', icon: [576, 512, [], "f312", "M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192z"] };
var faHistory = { prefix: 'far', iconName: 'history', icon: [512, 512, [], "f1da", "M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z"] };
var faHockeyPuck = { prefix: 'far', iconName: 'hockey-puck', icon: [544, 512, [], "f453", "M272 48C136.6 48 0 87.6 0 176v144c0 94.5 136.8 144 272 144s272-49.5 272-144V176c0-88.4-136.6-128-272-128zm224 272c0 53-100.3 96-224 96S48 373 48 320v-66.3c101.2 67.2 346.8 67.2 448 0V320zm-224-64c-123.7 0-224-35.8-224-80s100.3-80 224-80 224 35.8 224 80-100.3 80-224 80z"] };
var faHockeySticks = { prefix: 'far', iconName: 'hockey-sticks', icon: [640, 512, [], "f454", "M600 304H407.3L520 86.5c9.9-19.7 1.8-43.7-17.9-53.6L444.8 4.2c-19.7-9.9-43.7-1.9-53.6 17.7L320 158.2 248.8 21.9c-9.9-19.6-33.9-27.6-53.6-17.7l-57.3 28.6c-19.7 9.9-27.8 34-17.9 53.6L232.7 304H40c-22.1 0-40 18-40 40v128c0 22.1 17.9 40 40 40h186.5c37.2 0 71.2-17 93.6-45.1 22.4 28.1 56.3 45.1 93.5 45.1H600c22.1 0 40-17.9 40-40V344c0-22-17.9-40-40-40zM166.6 72.2l43-21.5 83.3 159.4-27.5 52.7-98.8-190.6zM79.6 464H48V352h31.6v112zm211.3-39.8c-12.3 24.6-37 39.8-64.5 39.8H111.6V352h141.9c12.3 0 23.3-6.8 28.5-17.3l148.4-284 43 21.5-182.5 352zm237 39.8H413.5c-6.6 0-43.4.8-66.5-43.7l35.7-68.9c7.2.9-21.4.6 145.2.6v112zm64.1 0h-32V352h32v112z"] };
var faHome = { prefix: 'far', iconName: 'home', icon: [576, 512, [], "f015", "M557.1 240.7L512 203.8V104c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v60.5L313.4 41.1c-14.7-12.1-36-12.1-50.7 0L18.9 240.7c-3.4 2.8-3.9 7.8-1.1 11.3l20.3 24.8c2.8 3.4 7.8 3.9 11.3 1.1l14.7-12V464c0 8.8 7.2 16 16 16h168c4.4 0 8-3.6 8-8V344h64v128c0 4.4 3.6 8 8 8h168c8.8 0 16-7.2 16-16V265.8l14.7 12c3.4 2.8 8.5 2.3 11.3-1.1l20.3-24.8c2.6-3.4 2.1-8.4-1.3-11.2zM464 432h-96V304c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v128h-96V226.5l170.9-140c2.9-2.4 7.2-2.4 10.1 0l170.9 140V432z"] };
var faHospital = { prefix: 'far', iconName: 'hospital', icon: [448, 512, [], "f0f8", "M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"] };
var faHospitalAlt = { prefix: 'far', iconName: 'hospital-alt', icon: [640, 512, [], "f47d", "M500 416h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-160h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM340 416h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-160h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM180 416h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0-160h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm182-144h-26V86c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v26h-26c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h26v26c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26h26c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6zm222-16H464V53.7C464 24.1 439.9 0 410.3 0H229.7C200.1 0 176 24.1 176 53.7V96H56c-30.9 0-56 25.1-56 56v352c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V152c0-4.4 3.6-8 8-8h168V53.7c0-3.2 2.6-5.7 5.7-5.7h180.6c3.2 0 5.7 2.6 5.7 5.7V144h168c4.4 0 8 3.6 8 8v352c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V152c0-30.9-25.1-56-56-56z"] };
var faHospitalSymbol = { prefix: 'far', iconName: 'hospital-symbol', icon: [512, 512, [], "f47e", "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208zm88-320h-32c-4.4 0-8 3.6-8 8v80h-96v-80c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-80h96v80c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8z"] };
var faHourglass = { prefix: 'far', iconName: 'hourglass', icon: [384, 512, [], "f254", "M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.899 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zM64 48h256c0 101.62-57.307 184-128 184S64 149.621 64 48zm256 416H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"] };
var faHourglassEnd = { prefix: 'far', iconName: 'hourglass-end', icon: [384, 512, [], "f253", "M372 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.898 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12zM192 232c-70.692 0-128-82.379-128-184h256c0 101.621-57.308 184-128 184z"] };
var faHourglassHalf = { prefix: 'far', iconName: 'hourglass-half', icon: [384, 512, [], "f252", "M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.898 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zm-48 0c0 28.672-4.564 55.81-12.701 80H76.701C68.564 103.81 64 76.672 64 48h256zm-12.701 336H76.701C97.405 322.453 141.253 280 192 280s94.595 42.453 115.299 104z"] };
var faHourglassStart = { prefix: 'far', iconName: 'hourglass-start', icon: [384, 512, [], "f251", "M372 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.898 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12zm-52 464H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"] };
var faICursor = { prefix: 'far', iconName: 'i-cursor', icon: [256, 512, [], "f246", "M128 41.522C91.867.049 43.399-.377 11.818.076 5.26.17 0 5.516 0 12.075v23.609c0 6.641 5.393 12.037 12.034 12C39.464 47.528 104 52.257 104 104v128H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h36v128c0 51.494-62.335 55.801-92.092 55.985C5.314 464.026 0 469.39 0 475.984v23.943c0 6.558 5.258 11.903 11.815 11.999 31.535.46 80.027.054 116.185-41.448 36.132 41.473 84.601 41.899 116.182 41.446 6.558-.094 11.818-5.44 11.818-11.999v-23.608c0-6.641-5.393-12.037-12.034-12C216.538 464.47 152 459.731 152 408V280h36c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-36V104c0-51.514 62.301-55.805 92.092-55.985C250.686 47.975 256 42.61 256 36.016V12.073C256 5.515 250.742.17 244.185.074 212.65-.386 164.157.02 128 41.522z"] };
var faIdBadge = { prefix: 'far', iconName: 'id-badge', icon: [384, 512, [], "f2c1", "M0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48zm336 32v378a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V80h288zm-144 80c38.66 0 70 31.34 70 70s-31.34 70-70 70-70-31.34-70-70 31.34-70 70-70zm80.187 146.047l-31.2-7.8c-32.779 23.577-72.51 18.316-97.974 0l-31.2 7.8C93.116 310.721 80 327.52 80 346.793V363c0 11.598 9.402 21 21 21h182c11.598 0 21-9.402 21-21v-16.207c0-19.273-13.116-36.072-31.813-40.746z"] };
var faIdCard = { prefix: 'far', iconName: 'id-card', icon: [512, 512, [], "f2c2", "M404 256H300c-6.627 0-12-5.373-12-12v-16c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12zm12 60v-16c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12zm96-204v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zm-48 282V144H48v250a6 6 0 0 0 6 6h404a6 6 0 0 0 6-6zM176 192c27.614 0 50 22.386 50 50s-22.386 50-50 50-50-22.386-50-50 22.386-50 50-50zm57.276 104.319l-22.285-5.571c-23.413 16.841-51.793 13.083-69.981 0l-22.285 5.571C105.369 299.658 96 311.657 96 325.423V337c0 8.284 6.716 15 15 15h130c8.284 0 15-6.716 15-15v-11.577c0-13.766-9.369-25.765-22.724-29.104z"] };
var faIdCardAlt = { prefix: 'far', iconName: 'id-card-alt', icon: [576, 512, [], "f47f", "M544 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H32C14.3 64 0 78.3 0 96v384c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM272 48h32v64h-32V48zm16 304c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56zm-40 48h80c22.1 0 40 17.9 40 40v24H208v-24c0-22.1 17.9-40 40-40zm280 64H416v-24c0-34.2-19.7-63.5-48.2-78.1 14.9-18 24.2-40.8 24.2-65.9 0-57.3-46.7-104-104-104s-104 46.7-104 104c0 25.1 9.3 47.9 24.2 65.9-28.5 14.6-48.2 43.9-48.2 78.1v24H48V112h176v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-32h176v352z"] };
var faImage = { prefix: 'far', iconName: 'image', icon: [512, 512, [], "f03e", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"] };
var faImages = { prefix: 'far', iconName: 'images', icon: [576, 512, [], "f302", "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"] };
var faInbox = { prefix: 'far', iconName: 'inbox', icon: [576, 512, [], "f01c", "M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H378.334l-32 64H229.666l-32-64H75.168l77.913-112zM528 400H48V272h120l32 64h176l32-64h120v128z"] };
var faInboxIn = { prefix: 'far', iconName: 'inbox-in', icon: [576, 512, [], "f310", "M395.5 185.5l-99 99c-4.7 4.7-12.3 4.7-17 0l-99-99c-7.6-7.6-2.2-20.5 8.5-20.5h67V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v153h67c10.7 0 16.1 12.9 8.5 20.5zM528 352H408l-32 64H200l-32-64H48v112h480V352zm48 2.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V354.2c0-11.8 4.3-23.1 12.1-31.9l101.6-114.2c2.3-2.6 4.9-4.9 7.7-7 2.4-1.7 5.6-1.4 7.7.7l24.8 24.9c2.2 2.2 2.3 5.9.2 8.2L92.7 304h105l32 64h116.7l32-64h105L422 234.9c-2.1-2.4-2-5.9.2-8.2l24.6-25c2-2.1 5.3-2.4 7.7-.7 2.9 2.1 5.5 4.4 7.9 7.1L564 322.3c7.7 8.8 12 20.2 12 31.9z"] };
var faInboxOut = { prefix: 'far', iconName: 'inbox-out', icon: [576, 512, [], "f311", "M180.5 102.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v153c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V123h-67c-10.7 0-16.1-12.9-8.5-20.5zM576 354.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V354.2c0-11.8 4.3-23.1 12.1-31.9l101.6-114.2c9.1-10.2 22.2-16.1 35.9-16.1H202c3.3 0 6 2.7 6 6v36c0 3.3-2.7 6-6 6h-52.4l-56.9 64h105l32 64h116.7l32-64h105l-56.9-64H374c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h52.4c13.7 0 26.8 5.9 35.9 16.1l101.6 114.2c7.8 8.8 12.1 20.2 12.1 31.9zm-48-2.2H408l-32 64H200l-32-64H48v112h480V352z"] };
var faIndent = { prefix: 'far', iconName: 'indent', icon: [448, 512, [], "f03c", "M0 80V48c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12H12C5.373 92 0 86.627 0 80zm172 140h264c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zM12 476h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm160-128h264c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm-48.687-103.313l-96-95.984C17.266 138.652 0 145.776 0 160.016v191.975c0 14.329 17.325 21.304 27.313 11.313l96-95.992c6.249-6.247 6.249-16.377 0-22.625z"] };
var faIndustry = { prefix: 'far', iconName: 'industry', icon: [512, 512, [], "f275", "M475.115 163.723L336 252.251v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.251V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V183.971c0-18.917-20.931-30.399-36.885-20.248zM464 432H48V80h64v215.971c0 18.916 20.931 30.399 36.885 20.248L288 227.691v68.28c0 18.915 20.931 30.399 36.885 20.248L464 227.691V432z"] };
var faIndustryAlt = { prefix: 'far', iconName: 'industry-alt', icon: [512, 512, [], "f3b3", "M475.115 131.752L336 220.28V152c0-18.916-20.931-30.399-36.885-20.248L160 220.28V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V152c0-18.917-20.931-30.399-36.885-20.248zM464 432H48V80h64v184c0 18.916 20.931 30.399 36.885 20.248L288 195.72V264c0 18.915 20.931 30.399 36.885 20.248L464 195.72V432zm-60-48h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"] };
var faInfo = { prefix: 'far', iconName: 'info', icon: [256, 512, [], "f129", "M224 352.589V224c0-16.475-6.258-31.517-16.521-42.872C225.905 161.14 236 135.346 236 108 236 48.313 187.697 0 128 0 68.313 0 20 48.303 20 108c0 20.882 5.886 40.859 16.874 58.037C15.107 176.264 0 198.401 0 224v39.314c0 23.641 12.884 44.329 32 55.411v33.864C12.884 363.671 0 384.359 0 408v40c0 35.29 28.71 64 64 64h128c35.29 0 64-28.71 64-64v-40c0-23.641-12.884-44.329-32-55.411zM128 48c33.137 0 60 26.863 60 60s-26.863 60-60 60-60-26.863-60-60 26.863-60 60-60zm80 400c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16v-40c0-8.836 7.164-16 16-16h16V279.314H64c-8.836 0-16-7.164-16-16V224c0-8.836 7.164-16 16-16h96c8.836 0 16 7.164 16 16v168h16c8.836 0 16 7.164 16 16v40z"] };
var faInfoCircle = { prefix: 'far', iconName: 'info-circle', icon: [512, 512, [], "f05a", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"] };
var faInfoSquare = { prefix: 'far', iconName: 'info-square', icon: [448, 512, [], "f30f", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6zM224 118c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"] };
var faInventory = { prefix: 'far', iconName: 'inventory', icon: [640, 512, [], "f480", "M624 0h-16c-8.8 0-16 7.2-16 16v144h-48V16c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16v144H48V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v496h48v-32h544v32h48V16c0-8.8-7.2-16-16-16zM368 48h128v112H368V48zM144 432V304h120v128H144zm168 0V304h120v128H312zm168 0V272c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v160H48V208h544v224H480z"] };
var faItalic = { prefix: 'far', iconName: 'italic', icon: [256, 512, [], "f033", "M89.42 80h40.484L62.006 432H16.763a12 12 0 0 0-11.771 9.666l-4.759 24C-1.238 473.086 4.439 480 12.004 480H161.82a12 12 0 0 0 11.771-9.666l4.759-24c1.471-7.42-4.206-14.334-11.771-14.334h-41.118L193.36 80h45.877a12 12 0 0 0 11.771-9.666l4.759-24C257.238 38.914 251.56 32 243.996 32H94.179a12 12 0 0 0-11.771 9.666l-4.759 24C76.178 73.086 81.856 80 89.42 80z"] };
var faJackOLantern = { prefix: 'far', iconName: 'jack-o-lantern', icon: [576, 512, [], "f30e", "M312 64.4c0-2.5 3.8-12.7 17.2-18.3 12.2-5.1 18-19.1 12.9-31.4-5.1-12.2-19.2-18-31.4-12.9-31.1 13-47.1 41-46.8 62.6C66.7 71.2 0 162.3 0 288c0 130.7 72 224 288 224s288-93.3 288-224c0-125.7-66.7-216.8-264-223.6zM288 464c-142.5 0-240-37.6-240-176 0-139 97.9-176 240-176 142.5 0 240 37.6 240 176 0 139-97.9 176-240 176zM153.1 275.9l48-80c3.1-5.2 10.6-5.2 13.7 0l48 80c3.2 5.3-.6 12.1-6.9 12.1h-96c-6.1 0-10-6.8-6.8-12.1zm160 0l48-80c3.1-5.2 10.6-5.2 13.7 0l48 80c3.2 5.3-.6 12.1-6.9 12.1h-96c-6.1 0-10-6.8-6.8-12.1zm150.6 46.3c-10.7 37.3-43.3 62.2-79.7 76.6V374c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v34.7c-20.2 4.7-41.9 7.3-64 7.3s-43.8-2.5-64-7.3V374c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v24.8c-36.4-14.4-69-39.3-79.7-76.6-1.8-6.3 4.3-11.9 10.4-9.7 34.2 12.4 81.5 20.4 133.3 22.8V362c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6v-26c63.9 0 124.2-8.6 165.3-23.5 6.1-2.2 12.2 3.4 10.4 9.7z"] };
var faKey = { prefix: 'far', iconName: 'key', icon: [512, 512, [], "f084", "M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"] };
var faKeyboard = { prefix: 'far', iconName: 'keyboard', icon: [576, 512, [], "f11c", "M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"] };
var faLanguage = { prefix: 'far', iconName: 'language', icon: [640, 512, [], "f1ab", "M616 96H24c-13.255 0-24 10.745-24 24v272c0 13.255 10.745 24 24 24h592c13.255 0 24-10.745 24-24V120c0-13.255-10.745-24-24-24zM233.209 352h-22.598a12 12 0 0 1-11.515-8.622l-9.286-31.657h-59.882l-9.055 31.586A12 12 0 0 1 109.338 352h-22.54c-8.22 0-14.007-8.078-11.362-15.861l57.097-168A12 12 0 0 1 143.895 160h32.218c5.139 0 9.708 3.273 11.362 8.139l57.097 168c2.644 7.783-3.142 15.861-11.363 15.861zM600 376H320V136h280v240zM168.059 236.8l10.741 37.327h-37.863l11.01-37.327c3.491-12.084 7.787-33.029 7.787-33.029h.537c.001 0 4.298 20.945 7.788 33.029zM360 216v-16c0-6.627 5.373-12 12-12h64v-16c0-6.627 5.373-12 12-12h16c6.627 0 12 5.373 12 12v16h64c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12h-13.879c-7.154 20.37-19.616 41.465-36.757 62.034a266.517 266.517 0 0 1-4.297 5.016c8.879 7.822 18.065 14.917 27.25 20.925 5.308 3.472 6.987 10.474 3.84 15.981l-7.962 13.934c-3.429 6.001-11.185 7.839-16.992 4.09-12.378-7.99-23.974-17.062-34.635-26.638-11.361 9.856-23.48 18.914-35.96 26.819-5.754 3.645-13.397 1.687-16.776-4.227l-7.942-13.898c-3.162-5.533-1.473-12.614 3.906-16.032 10.079-6.405 19.718-13.566 28.728-21.227-9.083-10.466-16.972-20.883-23.475-30.6-3.83-5.723-2.111-13.48 3.802-17.01l13.744-8.204c5.469-3.265 12.545-1.698 16.092 3.592 5.453 8.134 11.621 16.179 18.269 23.952 10.764-12.61 19.603-25.709 25.86-38.504H372c-6.627-.003-12-5.376-12-12.003z"] };
var faLaptop = { prefix: 'far', iconName: 'laptop', icon: [640, 512, [], "f109", "M628 352H358c-3.3 0-6 2.7-6 6v18c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-18c0-3.3-2.7-6-6-6H12c-6.6 0-12 5.4-12 12v100c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V364c0-6.6-5.4-12-12-12zm-36 112H48v-64h208c0 13.3 10.7 32 24 32h80c13.3 0 24-18.7 24-32h208v64zM112 320h416c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v224c0 26.5 21.5 48 48 48zm0-266c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v212c0 3.3-2.7 6-6 6H118c-3.3 0-6-2.7-6-6V54z"] };
var faLeaf = { prefix: 'far', iconName: 'leaf', icon: [576, 512, [], "f06c", "M487.8 80c30.3 0 40.2 73.3 40.2 94.5 0 156.3-157.8 238-267.9 238-68.5 0-125.9-31.5-125.9-31.5-13.4 0-29.5 51-52.8 51C59 432 48 413.1 48 401.7c0-26 53-46.2 53-60.7 0 0-10.4-16.6-10.4-46.5 0-79.5 67.8-136.2 143.8-159.8 54.9-17 171.7 2.8 208.9-30.2 14.8-12.8 22-24.5 44.5-24.5m0-48c-43.2 0-62.4 24.5-75.9 36.2-17.4 15.1-137.1 3.8-191.7 20.7-96.4 29.8-177.6 103.9-177.6 205.6 0 12.9 1.4 24.2 3.5 33.9C21.8 346.9 0 368.9 0 401.7 0 441 33.8 480 81.5 480c28.7 0 49.5-17.8 65.9-40.9 35.9 13.3 74.3 21.4 112.7 21.4 126.8 0 315.9-93.7 315.9-286C576 112.7 550.9 32 487.8 32zM173.9 333.3c50.4-67.2 114.2-96.8 205.7-90.1 13.2 1 24.7-9 25.7-22.2s-9-24.7-22.2-25.7c-109.2-8-188.3 30-247.6 109.1-8 10.6-5.8 25.6 4.8 33.6s25.6 5.9 33.6-4.7z"] };
var faLemon = { prefix: 'far', iconName: 'lemon', icon: [512, 512, [], "f094", "M484.112 27.889C455.989-.233 416.108-8.057 387.059 8.865 347.604 31.848 223.504-41.111 91.196 91.197-41.277 223.672 31.923 347.472 8.866 387.058c-16.922 29.051-9.1 68.932 19.022 97.054 28.135 28.135 68.011 35.938 97.057 19.021 39.423-22.97 163.557 49.969 295.858-82.329 132.474-132.477 59.273-256.277 82.331-295.861 16.922-29.05 9.1-68.931-19.022-97.054zm-22.405 72.894c-38.8 66.609 45.6 165.635-74.845 286.08-120.44 120.443-219.475 36.048-286.076 74.843-22.679 13.207-64.035-27.241-50.493-50.488 38.8-66.609-45.6-165.635 74.845-286.08C245.573 4.702 344.616 89.086 411.219 50.292c22.73-13.24 64.005 27.288 50.488 50.491zm-169.861 8.736c1.37 10.96-6.404 20.957-17.365 22.327-54.846 6.855-135.779 87.787-142.635 142.635-1.373 10.989-11.399 18.734-22.326 17.365-10.961-1.37-18.735-11.366-17.365-22.326 9.162-73.286 104.167-168.215 177.365-177.365 10.953-1.368 20.956 6.403 22.326 17.364z"] };
var faLevelDown = { prefix: 'far', iconName: 'level-down', icon: [320, 512, [], "f149", "M316.485 392l-116 116.485c-4.686 4.686-12.284 4.686-16.971 0L67.515 392c-4.686-4.686-4.686-12.284 0-16.971l22.312-22.312c4.808-4.808 12.646-4.665 17.275.315L164 414.996V56H44.024a11.996 11.996 0 0 1-8.485-3.515l-32-32C-4.021 12.926 1.333 0 12.024 0H196c13.255 0 24 10.745 24 24v390.996l56.899-61.963c4.629-4.98 12.467-5.123 17.275-.315l22.312 22.312c4.686 4.686 4.686 12.284-.001 16.97z"] };
var faLevelDownAlt = { prefix: 'far', iconName: 'level-down-alt', icon: [320, 512, [], "f3be", "M296.64 412.326l-96.16 96.16c-4.686 4.687-12.285 4.686-16.97 0L87.354 412.33c-7.536-7.536-2.198-20.484 8.485-20.485l68.161-.002V56H64a11.996 11.996 0 0 1-8.485-3.515l-32-32C15.955 12.926 21.309 0 32 0h164c13.255 0 24 10.745 24 24v367.842l68.154-.001c10.626-.001 16.066 12.905 8.486 20.485z"] };
var faLevelUp = { prefix: 'far', iconName: 'level-up', icon: [320, 512, [], "f148", "M316.485 120l-116-116.485c-4.686-4.686-12.284-4.686-16.971 0L67.515 120c-4.686 4.686-4.686 12.284 0 16.971l22.312 22.312c4.808 4.808 12.646 4.665 17.275-.315L164 97.004V456H44.024a11.996 11.996 0 0 0-8.485 3.515l-32 32C-4.021 499.074 1.333 512 12.024 512H196c13.255 0 24-10.745 24-24V97.004l56.899 61.963c4.629 4.98 12.467 5.123 17.275.315l22.312-22.312c4.686-4.686 4.686-12.284-.001-16.97z"] };
var faLevelUpAlt = { prefix: 'far', iconName: 'level-up-alt', icon: [320, 512, [], "f3bf", "M296.64 99.674l-96.16-96.16c-4.686-4.687-12.285-4.686-16.97 0L87.353 99.671c-7.536 7.536-2.198 20.484 8.485 20.485l68.162.002V456H64a11.996 11.996 0 0 0-8.485 3.515l-32 32C15.955 499.074 21.309 512 32 512h164c13.255 0 24-10.745 24-24V120.159l68.154.001c10.626 0 16.066-12.906 8.486-20.486z"] };
var faLifeRing = { prefix: 'far', iconName: 'life-ring', icon: [512, 512, [], "f1cd", "M256 504c136.967 0 248-111.033 248-248S392.967 8 256 8 8 119.033 8 256s111.033 248 248 248zm-103.398-76.72l53.411-53.411c31.806 13.506 68.128 13.522 99.974 0l53.411 53.411c-63.217 38.319-143.579 38.319-206.796 0zM336 256c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zm91.28 103.398l-53.411-53.411c13.505-31.806 13.522-68.128 0-99.974l53.411-53.411c38.319 63.217 38.319 143.579 0 206.796zM359.397 84.72l-53.411 53.411c-31.806-13.505-68.128-13.522-99.973 0L152.602 84.72c63.217-38.319 143.579-38.319 206.795 0zM84.72 152.602l53.411 53.411c-13.506 31.806-13.522 68.128 0 99.974L84.72 359.398c-38.319-63.217-38.319-143.579 0-206.796z"] };
var faLightbulb = { prefix: 'far', iconName: 'lightbulb', icon: [384, 512, [], "f0eb", "M272 428v28c0 10.449-6.68 19.334-16 22.629V488c0 13.255-10.745 24-24 24h-80c-13.255 0-24-10.745-24-24v-9.371c-9.32-3.295-16-12.18-16-22.629v-28c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12zM128 176c0-35.29 28.71-64 64-64 8.837 0 16-7.164 16-16s-7.163-16-16-16c-52.935 0-96 43.065-96 96 0 8.836 7.164 16 16 16s16-7.164 16-16zm64-128c70.734 0 128 57.254 128 128 0 77.602-37.383 60.477-80.98 160h-94.04C101.318 236.33 64 253.869 64 176c0-70.735 57.254-128 128-128m0-48C94.805 0 16 78.803 16 176c0 101.731 51.697 91.541 90.516 192.674 3.55 9.249 12.47 15.326 22.376 15.326h126.215c9.906 0 18.826-6.078 22.376-15.326C316.303 267.541 368 277.731 368 176 368 78.803 289.195 0 192 0z"] };
var faLink = { prefix: 'far', iconName: 'link', icon: [512, 512, [], "f0c1", "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"] };
var faLiraSign = { prefix: 'far', iconName: 'lira-sign', icon: [384, 512, [], "f195", "M371.994 256H336c-6.415 0-11.7 5.049-11.982 11.457C319.492 370.307 253.298 424 156.041 424H128V252.141l150.603-33.467A12 12 0 0 0 288 206.96v-24.585c0-7.677-7.109-13.38-14.603-11.714L128 202.97v-46.829l150.603-33.467A12 12 0 0 0 288 110.96V86.374c0-7.677-7.109-13.38-14.603-11.714L128 106.97V44c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v77.192L9.397 133.326A12 12 0 0 0 0 145.041v24.585c0 7.677 7.109 13.38 14.603 11.714L64 170.363v46.829L9.397 229.326A12 12 0 0 0 0 241.041v24.585c0 7.677 7.109 13.38 14.603 11.714L64 266.363V468c0 6.627 5.373 12 12 12h81.026c132.906 0 221.849-77.22 226.965-211.595.259-6.78-5.212-12.405-11.997-12.405z"] };
var faList = { prefix: 'far', iconName: 'list', icon: [512, 512, [], "f03a", "M500 124H140c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm12 148v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zm0 160v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zM92 128V64c0-6.627-5.373-12-12-12H16C9.373 52 4 57.373 4 64v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12zm0 160v-64c0-6.627-5.373-12-12-12H16c-6.627 0-12 5.373-12 12v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12zm0 160v-64c0-6.627-5.373-12-12-12H16c-6.627 0-12 5.373-12 12v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12z"] };
var faListAlt = { prefix: 'far', iconName: 'list-alt', icon: [512, 512, [], "f022", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"] };
var faListOl = { prefix: 'far', iconName: 'list-ol', icon: [512, 512, [], "f0cb", "M500 124H140c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm12 148v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zm0 160v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zM3.263 148.428C3.263 155.905 7.18 160 14.836 160h67.293c7.655 0 11.572-4.095 11.572-11.572v-8.901c0-7.477-3.917-11.572-11.572-11.572H66.64V43.572C66.64 35.916 62.547 32 54.891 32H42.785c-6.053 0-9.97 1.602-14.42 5.697L6.646 57.635C1.128 62.798.771 68.673 6.112 74.014l5.518 6.231c5.162 5.519 11.216 5.341 15.666 1.068 1.069-1.068 2.848-3.738 2.848-3.738h.356s-.534 5.34-.534 10.503v39.878h-15.13c-7.656 0-11.573 4.094-11.573 11.572v8.9zm-1.052 160.19c0 7.354 5.078 11.382 12.083 11.382h67.939c7.529 0 11.557-4.028 11.557-11.382v-8.755c0-7.355-4.028-11.382-11.557-11.382H43.184c1.926-10.507 48.679-18.561 48.679-56.909 0-29.067-25.039-39.573-44.476-39.573-21.362 0-33.795 9.981-40.449 18.736-4.378 5.604-2.976 10.857 2.803 15.409l8.579 6.829c5.604 4.553 11.032 2.452 16.111-2.451 2.976-2.801 6.303-3.852 9.455-3.852 3.326 0 9.28 1.576 9.28 8.755 0 12.782-50.955 21.888-50.955 69.165v4.028zM8.28 470.545C15.984 475.272 27.54 480 44.176 480c34.145 0 48.503-22.763 48.503-44.126 0-14.358-9.105-29.767-28.716-34.845l17.509-20.137c3.678-4.377 5.079-8.405 5.079-14.183v-3.327c0-7.355-3.853-11.382-11.382-11.382H16.685c-7.53 0-11.383 3.852-11.383 11.382v8.755c0 7.354 3.853 11.382 11.383 11.382h12.957c8.405 0 12.608-1.051 12.608-1.051v.35s-5.428 5.078-12.257 13.483l-5.604 7.004c-4.028 5.078-5.253 10.156-2.801 14.884l1.05 1.926c2.978 5.779 6.304 7.88 12.258 7.88h4.728c10.33 0 15.934 2.452 15.934 9.106 0 4.728-4.203 8.23-14.358 8.23-4.729 0-9.457-1.051-14.359-3.152-6.479-3.852-11.732-3.502-15.584 3.152l-5.603 9.28c-3.678 6.128-3.153 11.731 2.626 15.934z"] };
var faListUl = { prefix: 'far', iconName: 'list-ul', icon: [512, 512, [], "f0ca", "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm464-256V80c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zm0 160v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12zm0 160v-32c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12z"] };
var faLocationArrow = { prefix: 'far', iconName: 'location-arrow', icon: [512, 512, [], "f124", "M507.38 68.225L315.582 484.108C294.161 530.519 224 515.72 224 463.993V288H47.933c-51.323 0-66.635-70.111-20.115-91.582L443.683 4.529c39.945-18.437 82.602 22.735 63.697 63.696zM272 464L464 48 48 240h224v224z"] };
var faLock = { prefix: 'far', iconName: 'lock', icon: [448, 512, [], "f023", "M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z"] };
var faLockAlt = { prefix: 'far', iconName: 'lock-alt', icon: [448, 512, [], "f30d", "M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z"] };
var faLockOpen = { prefix: 'far', iconName: 'lock-open', icon: [576, 512, [], "f3c1", "M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352z"] };
var faLockOpenAlt = { prefix: 'far', iconName: 'lock-open-alt', icon: [576, 512, [], "f3c2", "M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352zM225 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28z"] };
var faLongArrowAltDown = { prefix: 'far', iconName: 'long-arrow-alt-down', icon: [256, 512, [], "f309", "M20.485 372.485l99.029 99.03c4.686 4.686 12.284 4.686 16.971 0l99.029-99.03c7.56-7.56 2.206-20.485-8.485-20.485H156V44c0-6.627-5.373-12-12-12h-32c-6.627 0-12 5.373-12 12v308H28.97c-10.69 0-16.044 12.926-8.485 20.485z"] };
var faLongArrowAltLeft = { prefix: 'far', iconName: 'long-arrow-alt-left', icon: [448, 512, [], "f30a", "M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z"] };
var faLongArrowAltRight = { prefix: 'far', iconName: 'long-arrow-alt-right', icon: [448, 512, [], "f30b", "M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z"] };
var faLongArrowAltUp = { prefix: 'far', iconName: 'long-arrow-alt-up', icon: [256, 512, [], "f30c", "M235.515 139.515l-99.029-99.03c-4.686-4.686-12.284-4.686-16.971 0l-99.029 99.03C12.926 147.074 18.28 160 28.97 160H100v308c0 6.627 5.373 12 12 12h32c6.627 0 12-5.373 12-12V160h71.03c10.69 0 16.044-12.926 8.485-20.485z"] };
var faLongArrowDown = { prefix: 'far', iconName: 'long-arrow-down', icon: [320, 512, [], "f175", "M300.3 327.5l-19.6-19.6c-4.8-4.8-12.5-4.7-17.1.2L186 388.8V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v344.8l-77.5-80.7c-4.7-4.8-12.4-4.9-17.1-.2l-19.6 19.6c-4.7 4.7-4.7 12.3 0 17l131.8 131.8c4.7 4.7 12.3 4.7 17 0l131.8-131.8c4.6-4.7 4.6-12.3-.1-17z"] };
var faLongArrowLeft = { prefix: 'far', iconName: 'long-arrow-left', icon: [448, 512, [], "f177", "M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"] };
var faLongArrowRight = { prefix: 'far', iconName: 'long-arrow-right', icon: [448, 512, [], "f178", "M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"] };
var faLongArrowUp = { prefix: 'far', iconName: 'long-arrow-up', icon: [320, 512, [], "f176", "M19.716 184.485l19.626 19.626c4.753 4.753 12.484 4.675 17.14-.173L134 123.22V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V123.22l77.518 80.717c4.656 4.849 12.387 4.927 17.14.173l19.626-19.626c4.686-4.686 4.686-12.284 0-16.971L168.485 35.716c-4.686-4.686-12.284-4.686-16.971 0L19.716 167.515c-4.686 4.686-4.686 12.284 0 16.97z"] };
var faLowVision = { prefix: 'far', iconName: 'low-vision', icon: [576, 512, [], "f2a8", "M569.348 231.63C512.968 135.95 407.81 72 288 72c-31.44 0-61.87 4.4-90.67 12.63L144 5.12c-3.8-5.429-11.282-6.75-16.712-2.95l-19.657 13.758c-5.43 3.8-6.751 11.284-2.95 16.713L150.8 101.84c-58.851 27-110.003 71.82-144.147 129.79a47.963 47.963 0 0 0 0 48.74c36.15 61.35 92.357 109.66 159.637 136.42L50.65 251.6a273.208 273.208 0 0 1 38.609-49.099L254.32 438.3c19.795 2.055 40.851 2.183 59.09.73L126.009 171.311a277.521 277.521 0 0 1 52.851-29.381l.34.49L432 506.881c3.8 5.429 11.282 6.75 16.712 2.95l19.657-13.758c5.43-3.8 6.751-11.283 2.95-16.713l-46.119-69.2c60.42-27.72 110.818-73.22 144.148-129.79a47.963 47.963 0 0 0 0-48.74zM397.15 370.08l-26.59-37.99c54.022-41.348 68.205-114.637 37.44-172.13v.04c0 30.93-25.07 56-56 56s-56-25.07-56-56c0-15.17 6.04-28.92 15.84-39.01 92.48 7.74 172 60.08 216.16 135.01-29.8 50.57-75.71 90.86-130.85 114.08z"] };
var faLuchador = { prefix: 'far', iconName: 'luchador', icon: [448, 512, [], "f455", "M224 0C100.3 0 0 100.3 0 224v128c0 88.4 71.6 160 160 160h128c88.4 0 160-71.6 160-160V224C448 100.3 347.7 0 224 0zm176 352c0 61.8-50.2 112-112 112H160c-61.8 0-112-50.2-112-112V224c0-97 79-176 176-176s176 79 176 176v128zM226.5 226.2c-.9-.7-4.2-.7-5.1 0C213.3 188.3 182 160 144 160H76c-6.6 0-12 5.4-12 12v30.7c0 47.1 35.8 85.3 80 85.3h22.4c-7.4 12.2-12.5 23.5-15.8 32.9-30.9 4.6-54.6 31-54.6 63.1 0 35.5 29.4 64 64.9 64H287c35.5 0 64.9-28.5 64.9-64 0-32.1-23.7-58.5-54.6-63.1-3.3-9.5-8.4-20.7-15.8-32.9H304c44.2 0 80-38.2 80-85.3V172c0-6.6-5.4-12-12-12h-68c-37.9 0-69.3 28.3-77.5 66.2zm-2.5 40.5c20.2 19.9 31.9 38.6 38.7 53.3h-77.4c6.8-14.8 18.5-33.4 38.7-53.3zM144 256c-26.5 0-48-23.9-48-53.3V192h48c26.5 0 48 23.9 48 53.3v8.7c-.6.7-1.2 1.3-1.8 2H144zm144 96c17.6 0 32 14.4 32 32s-14.4 32-32 32H160c-17.6 0-32-14.4-32-32s14.4-32 32-32h128zm64-149.3c0 29.4-21.5 53.3-48 53.3h-46.2c-.6-.7-1.2-1.3-1.8-2v-8.7c0-29.4 21.5-53.3 48-53.3h48v10.7z"] };
var faMagic = { prefix: 'far', iconName: 'magic', icon: [512, 512, [], "f0d0", "M83.1 500.3l-71.4-71.4c-15.6-15.6-15.6-40.9 0-56.6L372.3 11.7c15.6-15.6 40.9-15.6 56.6 0l71.4 71.4c15.6 15.6 15.6 40.9 0 56.6L139.7 500.3c-15.6 15.6-40.9 15.6-56.6 0zm266-277.3L289 162.9 51.3 400.6l60.1 60.1L349.1 223zm111.6-111.6l-60.1-60.1-77.7 77.7 60.1 60.1 77.7-77.7zM138.9 39.3l-11.7 23.8-26.2 3.8c-4.7.7-6.6 6.5-3.2 9.8l19 18.5-4.5 26.1c-.8 4.7 4.1 8.3 8.3 6.1L144 115l23.4 12.3c4.2 2.2 9.1-1.4 8.3-6.1l-4.5-26.1 19-18.5c3.4-3.3 1.5-9.1-3.2-9.8L160.8 63l-11.7-23.8c-2-4.1-8.1-4.1-10.2.1zm97.7-20.7l-7.8 15.8-17.5 2.6c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L240 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm-192 0l-7.8 15.8L19.3 37c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L48 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm416 223.5l-7.8 15.8-17.5 2.5c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4l15.6-8.2 15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-2.8-5.4-2.8-6.8 0z"] };
var faMagnet = { prefix: 'far', iconName: 'magnet', icon: [512, 512, [], "f076", "M509.8 55.6c-1.2-3.3-2.9-6.4-5-9.2-6.6-8.8-17-14.5-28.8-14.5H372c-12.4 0-23.4 6.3-29.9 15.9-1 1.4-1.8 2.9-2.6 4.5-2.3 4.7-3.5 10-3.5 15.6v172c0 64-40 96-79.9 96-40 0-80.1-32-80.1-96V68c0-4.3-.8-8.5-2.2-12.4-1.2-3.3-2.9-6.4-5-9.2-6.6-8.8-17-14.5-28.8-14.5H36c-11.8 0-22.3 5.7-28.8 14.5-2.1 2.8-3.8 5.9-5 9.2C.8 59.5 0 63.7 0 68v189.3C0 408 136.2 504 256.8 504 377.5 504 512 408 512 257.3V68c0-4.3-.8-8.5-2.2-12.4zM464 257.3c0 28.9-6.1 56.2-18.2 81.3-11.2 23.4-27.3 44.4-47.9 62.5-19.5 17.2-42.9 31.2-67.6 40.7-24.1 9.3-49.6 14.2-73.6 14.2-49.5 0-102.6-20.6-142.1-55-20.7-18.1-37-39.1-48.4-62.5-12-25.1-18.2-52.4-18.2-81.2V176h80v64c0 53.1 20.7 86.3 38 104.8 11.9 12.7 26 22.6 41.8 29.3 15.3 6.5 31.6 9.9 48.2 9.9 16.7 0 32.9-3.3 48.2-9.8 15.8-6.8 29.9-16.6 41.8-29.3 17.3-18.5 38-51.7 38-104.8v-64h80v81.2z"] };
var faMale = { prefix: 'far', iconName: 'male', icon: [256, 512, [], "f183", "M211.421 155.079C221.892 139.273 228 120.338 228 100 228 44.86 183.14 0 128 0S28 44.86 28 100c0 20.338 6.108 39.273 16.579 55.079C18.005 169.985 0 198.424 0 231v89c0 26.039 15.629 48.494 38 58.479V448c0 35.29 28.71 64 64 64h52c35.29 0 64-28.71 64-64v-69.521c22.371-9.984 38-32.44 38-58.479v-89c0-32.576-18.005-61.015-44.579-75.921zM128 48c28.719 0 52 23.281 52 52s-23.281 52-52 52-52-23.281-52-52 23.281-52 52-52zm80 272c0 8.8-7.2 16-16 16h-22v112c0 8.837-7.163 16-16 16h-52c-8.837 0-16-7.163-16-16V336H64c-8.837 0-16-7.163-16-16v-89c0-19.793 15.074-39 40.818-39 24.961 10.671 53.4 10.672 78.364 0 25.37 0 40.818 18.885 40.818 39v89z"] };
var faMap = { prefix: 'far', iconName: 'map', icon: [576, 512, [], "f279", "M508.505 36.17L381.517 92.576 207.179 34.463a47.992 47.992 0 0 0-34.674 1.674l-144 64A48 48 0 0 0 0 144v287.967c0 34.938 35.991 57.864 67.495 43.863l126.988-56.406 174.339 58.113a47.992 47.992 0 0 0 34.674-1.674l144-64A48 48 0 0 0 576 368V80.033c0-34.938-35.991-57.864-67.495-43.863zM360 424l-144-48V88l144 48v288zm-312 8V144l120-53.333v288L48 432zm480-64l-120 53.333v-288L528 80v288z"] };
var faMapMarker = { prefix: 'far', iconName: 'map-marker', icon: [384, 512, [], "f041", "M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272z"] };
var faMapMarkerAlt = { prefix: 'far', iconName: 'map-marker-alt', icon: [384, 512, [], "f3c5", "M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"] };
var faMapPin = { prefix: 'far', iconName: 'map-pin', icon: [320, 512, [], "f276", "M320 160C320 71.965 248.9.536 160.99.003 72.711-.532-.001 71.721 0 160.002c.001 80.207 59.021 146.626 136 158.206v160.625l13.267 26.534c4.422 8.845 17.044 8.845 21.466 0L184 478.833V318.208c76.98-11.581 136-78 136-158.208zM160 272c-61.898 0-112-50.092-112-112C48 98.102 98.092 48 160 48c61.898 0 112 50.092 112 112 0 61.898-50.092 112-112 112zm8-176c0 8.836-7.163 16-16 16-22.056 0-40 17.944-40 40 0 8.836-7.163 16-16 16s-16-7.164-16-16c0-39.701 32.299-72 72-72 8.837 0 16 7.164 16 16z"] };
var faMapSigns = { prefix: 'far', iconName: 'map-signs', icon: [512, 512, [], "f277", "M424 192a24 24 0 0 0 16.971-7.029l56-56c9.372-9.373 9.372-24.569 0-33.941l-56-56A23.997 23.997 0 0 0 424 32H280V12c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v20H56c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h176v32H88a24 24 0 0 0-16.971 7.029l-56 56c-9.372 9.373-9.372 24.568 0 33.941l56 56A23.997 23.997 0 0 0 88 384h144v116c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V384h176c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24H280v-32h144zm8 80v64H97.941l-32-32 32-32H432zM80 144V80h334.059l32 32-32 32H80z"] };
var faMars = { prefix: 'far', iconName: 'mars', icon: [384, 512, [], "f222", "M372 64h-63c-10.7 0-16 12.9-8.5 20.5L315 99l-87.6 87.6C203.9 169.9 175.1 160 144 160 64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-31.1-9.9-59.9-26.6-83.4L349 133l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 400c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faMarsDouble = { prefix: 'far', iconName: 'mars-double', icon: [512, 512, [], "f227", "M288 208c0-31.1-9.9-59.9-26.6-83.4L317 69l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12h-63c-10.7 0-16 12.9-8.5 20.5L283 35l-55.6 55.6C203.9 73.9 175.1 64 144 64 64.5 64 0 128.5 0 208s64.5 144 144 144 144-64.5 144-144zm-144 96c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96zm368-132v63c0 10.7-12.9 16-20.5 8.5L477 229l-55.6 55.6c16.8 23.5 26.6 52.3 26.6 83.4 0 79.5-64.5 144-144 144-74.4 0-135.6-56.4-143.2-128.8 16.1-1.5 32-5.3 47.3-11.2 2.1 51.1 44.3 92 95.9 92 52.9 0 96-43.1 96-96 0-51.6-40.9-93.8-92-95.9 6-15.3 9.7-31.2 11.2-47.3 25.3 2.7 48.6 11.8 68.2 25.8L443 195l-14.5-14.5c-7.6-7.6-2.2-20.5 8.5-20.5h63c6.6 0 12 5.4 12 12z"] };
var faMarsStroke = { prefix: 'far', iconName: 'mars-stroke', icon: [384, 512, [], "f229", "M372 64h-63c-10.7 0-16 12.9-8.5 20.5L315 99l-23.4 23.4-14.1-14.1c-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17l14.1 14.1-30.2 30.2C203.9 169.9 175.1 160 144 160 64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-31.1-9.9-59.9-26.6-83.4l30.2-30.2 14.1 14.1c4.7 4.7 12.3 4.7 17 0l17-17c4.7-4.7 4.7-12.3 0-17l-14.1-14.1L349 133l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 400c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faMarsStrokeH = { prefix: 'far', iconName: 'mars-stroke-h', icon: [480, 512, [], "f22b", "M476.5 247.5l-44.6-44.6c-7.6-7.6-20.5-2.2-20.5 8.5V232H376v-20c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v20h-42c-4.8-28.5-18.2-55.8-40.2-77.8C189.6 98 98.4 98 42.2 154.2c-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 22-22 35.4-49.3 40.2-77.8h42v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20h35.4v20.6c0 10.7 12.9 16 20.5 8.5l44.6-44.6c4.7-4.7 4.7-12.3 0-17zm-264.6 76.4c-37.4 37.4-98.3 37.4-135.8 0-37.4-37.4-37.4-98.3 0-135.8 37.4-37.4 98.3-37.4 135.8 0 37.4 37.4 37.4 98.4 0 135.8z"] };
var faMarsStrokeV = { prefix: 'far', iconName: 'mars-stroke-v', icon: [288, 512, [], "f22a", "M245.8 234.2c-22-22-49.3-35.4-77.8-40.2v-42.7h20c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-20V70.1h20.6c10.7 0 16-12.9 8.5-20.5L152.5 5.1c-4.7-4.7-12.3-4.7-17 0L90.9 49.6c-7.6 7.6-2.2 20.5 8.5 20.5H120v33.1h-20c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h20V194c-28.5 4.8-55.8 18.2-77.8 40.2-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 56.3-56.2 56.3-147.4 0-203.6zm-33.9 169.7c-37.4 37.4-98.3 37.4-135.8 0-37.4-37.4-37.4-98.3 0-135.8 37.4-37.4 98.3-37.4 135.8 0 37.4 37.4 37.4 98.4 0 135.8z"] };
var faMedkit = { prefix: 'far', iconName: 'medkit', icon: [512, 512, [], "f0fa", "M464 96H352V80c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v16H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM208 80h96v16h-96V80zM54 432a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6H54zm298-160v32c0 6.627-5.373 12-12 12h-56v56c0 6.627-5.373 12-12 12h-32c-6.627 0-12-5.373-12-12v-56h-56c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h56v-56c0-6.627 5.373-12 12-12h32c6.627 0 12 5.373 12 12v56h56c6.627 0 12 5.373 12 12z"] };
var faMeh = { prefix: 'far', iconName: 'meh', icon: [512, 512, [], "f11a", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm64 136c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059s-23.059-10.324-23.059-23.059v-.017C266.386 181.488 264 190.465 264 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm-128 0c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059-12.735 0-23.059-10.324-23.059-23.059v-.017C138.386 181.488 136 190.465 136 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm136 184H184c-31.776 0-31.749 48 0 48h144c31.776 0 31.749-48 0-48z"] };
var faMercury = { prefix: 'far', iconName: 'mercury', icon: [288, 512, [], "f223", "M288 208c0-50.3-25.8-94.6-65-120.4 3.2-2.2 6.2-4.6 9.2-7.2 21.1-18.1 34.1-41.4 37.5-66.8 1-7.2-4.6-13.6-11.9-13.6h-24.3c-5.7 0-10.7 4-11.8 9.7C216 40.4 183.3 64 144 64S72 40.4 66.2 9.7C65.2 4 60.2 0 54.5 0H30.1c-7.3 0-12.9 6.4-11.9 13.6C21.7 39 34.7 62.4 55.8 80.4c3 2.5 6 4.9 9.2 7.2C25.8 113.4 0 157.7 0 208c0 71.6 52.2 130.9 120.6 142.1-.4 1.2-.6 2.4-.6 3.7V408H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-54.2c0-1.3-.2-2.6-.6-3.7C235.8 338.9 288 279.6 288 208zm-144 96c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faMicrochip = { prefix: 'far', iconName: 'microchip', icon: [512, 512, [], "f2db", "M368.5 0H144c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48h224.5c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 457c0 3.3-2.7 7-6 7H150c-3.3 0-6-3.7-6-7V54c0-3.3 2.7-6 6-6h212.5c3.3 0 6 2.7 6 6v403zM512 106v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42V88h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zM30 376h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6z"] };
var faMicrophone = { prefix: 'far', iconName: 'microphone', icon: [384, 512, [], "f130", "M192 360c61.856 0 112-50.144 112-112V112C304 50.144 253.856 0 192 0S80 50.144 80 112v136c0 61.856 50.144 112 112 112zm-64-248c0-35.29 28.71-64 64-64s64 28.71 64 64v136c0 35.29-28.71 64-64 64s-64-28.71-64-64V112zm248 100v36c0 93.325-69.841 170.638-160 182.435V468h68c6.627 0 12 5.373 12 12v16c0 8.837-7.163 16-16 16H104c-8.837 0-16-7.163-16-16v-16c0-6.627 5.373-12 12-12h68v-37.565C77.841 418.638 8 341.325 8 248v-36c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v36c0 74.99 61.009 136 136 136 74.99 0 136-61.01 136-136v-36c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12z"] };
var faMicrophoneAlt = { prefix: 'far', iconName: 'microphone-alt', icon: [384, 512, [], "f3c9", "M192 360c61.856 0 112-50.144 112-112V112C304 50.144 253.856 0 192 0S80 50.144 80 112v136c0 61.856 50.144 112 112 112zm-64-248c0-35.29 28.71-64 64-64 28.306 0 52.363 18.478 60.782 44H204c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h52v24h-52c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h52v24h-52c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h50.855c-5.635 29.571-31.668 52-62.855 52-35.29 0-64-28.71-64-64V112zm248 100v36c0 93.325-69.841 170.638-160 182.435V468h68c6.627 0 12 5.373 12 12v16c0 8.837-7.163 16-16 16H104c-8.837 0-16-7.163-16-16v-16c0-6.627 5.373-12 12-12h68v-37.565C77.841 418.638 8 341.325 8 248v-36c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v36c0 74.99 61.009 136 136 136 74.99 0 136-61.01 136-136v-36c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12z"] };
var faMicrophoneSlash = { prefix: 'far', iconName: 'microphone-slash', icon: [512, 512, [], "f131", "M194.895 92.953l-36.287-36.287C177.876 22.823 214.271 0 256 0c61.856 0 112 50.144 112 112v136c0 5.711-.43 11.322-1.255 16.804L320 218.059V112c0-35.29-28.71-64-64-64-28.659 0-52.978 18.936-61.105 44.953zM440 248v-36c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v36a135.66 135.66 0 0 1-5.104 36.954l37.4 37.4C434.387 299.606 440 274.447 440 248zm68.485 243.514l-16.971 16.971c-4.686 4.686-12.284 4.686-16.97 0L363.375 397.317c-24.097 17.379-52.544 29.084-83.375 33.118V468h68c6.627 0 12 5.373 12 12v16c0 8.837-7.163 16-16 16H168c-8.837 0-16-7.163-16-16v-16c0-6.627 5.373-12 12-12h68v-37.565C141.841 418.638 72 341.325 72 248v-36c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v36c0 74.99 61.009 136 136 136 26.782 0 51.77-7.795 72.842-21.217l-17.435-17.435C295.067 354.669 276.158 360 256 360c-61.856 0-112-50.144-112-112v-70.059L3.515 37.456c-4.686-4.686-4.686-12.284 0-16.971l16.971-16.97c4.686-4.686 12.284-4.686 16.97 0l471.029 471.029c4.687 4.686 4.687 12.284 0 16.97zM275.131 309.072L192 225.941V248c0 35.29 28.71 64 64 64a63.75 63.75 0 0 0 19.131-2.928z"] };
var faMinus = { prefix: 'far', iconName: 'minus', icon: [448, 512, [], "f068", "M436 284c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h424z"] };
var faMinusCircle = { prefix: 'far', iconName: 'minus-circle', icon: [512, 512, [], "f056", "M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"] };
var faMinusHexagon = { prefix: 'far', iconName: 'minus-hexagon', icon: [576, 512, [], "f307", "M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192zM172 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H172z"] };
var faMinusOctagon = { prefix: 'far', iconName: 'minus-octagon', icon: [512, 512, [], "f308", "M497.9 150.5L361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c-.1-12.8-5.2-25-14.2-34zm-33.9 177L327.5 464h-143L48 327.5v-143L184.5 48h143.1L464 184.5v143zM140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H140z"] };
var faMinusSquare = { prefix: 'far', iconName: 'minus-square', icon: [448, 512, [], "f146", "M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faMobile = { prefix: 'far', iconName: 'mobile', icon: [320, 512, [], "f10b", "M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z"] };
var faMobileAlt = { prefix: 'far', iconName: 'mobile-alt', icon: [320, 512, [], "f3cd", "M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm48-60V92c0-6.6-5.4-12-12-12H92c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h136c6.6 0 12-5.4 12-12zm80-308v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z"] };
var faMobileAndroid = { prefix: 'far', iconName: 'mobile-android', icon: [320, 512, [], "f3ce", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 464H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6zm-70-32h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"] };
var faMobileAndroidAlt = { prefix: 'far', iconName: 'mobile-android-alt', icon: [320, 512, [], "f3cf", "M228 368H92c-6.6 0-12-5.4-12-12V92c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12zm92-320v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6zm-64-38v-8c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12z"] };
var faMoneyBill = { prefix: 'far', iconName: 'money-bill', icon: [640, 512, [], "f0d6", "M616 64H24C10.745 64 0 74.745 0 88v335c0 13.255 10.745 24 24 24h592c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 192c44.183 0 80-35.817 80-80h384c0 44.183 35.817 80 80 80v128c-44.183 0-80 35.817-80 80H128c0-44.183-35.817-80-80-80V192zm176 64c0-61.857 42.979-112 96-112s96 50.143 96 112c0 61.87-43 112-96 112-53.023 0-96-50.153-96-112z"] };
var faMoneyBillAlt = { prefix: 'far', iconName: 'money-bill-alt', icon: [640, 512, [], "f3d1", "M320 144c-53.021 0-96 50.143-96 112 0 61.847 42.977 112 96 112 53 0 96-50.13 96-112 0-61.857-42.979-112-96-112zm48 164.428c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.901c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.75 3.916 11.75 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.902zM616 64H24C10.745 64 0 74.745 0 88v335c0 13.255 10.745 24 24 24h592c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM512 400H128c0-44.183-35.817-80-80-80V192c44.183 0 80-35.817 80-80h384c0 44.183 35.817 80 80 80v128c-44.183 0-80 35.817-80 80z"] };
var faMoon = { prefix: 'far', iconName: 'moon', icon: [512, 512, [], "f186", "M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"] };
var faMotorcycle = { prefix: 'far', iconName: 'motorcycle', icon: [640, 512, [], "f21c", "M512 192c-15.601 0-30.548 2.795-44.374 7.905L434.633 144H520c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24h-45.312a24 24 0 0 0-17.839 7.945l-39.101 43.445-24.524-41.555A20 20 0 0 0 376 64h-76c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h64.58l30.688 52h-175.86c-4.01-4.393-8.542-8.531-13.783-12.275C186.784 130.268 162.118 124 128 124H72c-11.046 0-20 8.954-20 20s8.954 20 20 20h56c22.885 0 37.946 8.448 48.662 20.205l-7.936 14.43A127.765 127.765 0 0 0 128 192C57.308 192 0 249.308 0 320s57.308 128 128 128c58.192 0 107.311-38.834 122.863-92h81.327c11.396 0 20.491-9.517 19.979-20.897-2.456-54.98 23.782-106.017 68.372-136.28l12.198 20.668C403.054 242.932 384 279.24 384 320c0 70.692 57.308 128 128 128s128-57.308 128-128-57.308-128-128-128zM128 408c-48.523 0-88-39.477-88-88s39.477-88 88-88c7.229 0 14.256.878 20.983 2.53l-50.507 91.831C91.156 339.672 100.802 356 116 356h92.27c-13.787 30.62-44.569 52-80.27 52zm184.367-92H149.825l66-120h147.308c-30.834 33.811-48.088 76.226-50.766 120zM512 408c-48.523 0-88-39.477-88-88 0-26.019 11.354-49.434 29.365-65.559l53.477 90.614c3.369 5.708 10.726 7.604 16.434 4.236l13.78-8.132c5.708-3.368 7.604-10.726 4.236-16.434l-52.833-89.522A87.769 87.769 0 0 1 512 232c48.523 0 88 39.477 88 88s-39.477 88-88 88z"] };
var faMousePointer = { prefix: 'far', iconName: 'mouse-pointer', icon: [384, 512, [], "f245", "M356.683 255.576L115.915 18.636C77.055-21.086 8 6.909 8 62.87v349.112c0 55.241 67.457 83.887 107.414 44.727l23.927-23.449 17.535 40.669.121.281.125.274c13.903 31.145 50.295 45.894 82.155 32.648l41.903-17.395.254-.106.253-.109c15.618-6.697 27.662-19.038 33.912-34.749 6.184-15.545 5.927-32.568-.724-47.933l-18.71-43.423h16.527c55.848.002 85.165-68.485 43.991-107.841zm-43.872 59.843h-89.594l47.607 110.491c3.316 7.661-.474 16.249-8.053 19.499l-41.922 17.409c-7.816 3.25-16.58-.465-19.895-7.892l-45.238-104.92-73.898 72.423C72.038 432.012 56 424.734 56 411.982V62.868c0-13.309 16.978-19.829 25.817-10.445L323.47 290.117c9.79 9.091 2.553 25.302-10.659 25.302z"] };
var faMusic = { prefix: 'far', iconName: 'music', icon: [512, 512, [], "f001", "M470.4 1.5l-304 96C153.1 101.7 144 114 144 128v227.1C130 348 113.6 344 96 344c-54.2 0-96 38.1-96 84 0 46.1 42.1 84 96 84 54.2 0 96-38.1 96-84V252.5l272-85.9v124.5c-14-7.1-30.4-11.1-48-11.1-54.2 0-96 38.1-96 84 0 46.1 42.1 84 96 84 54.2 0 96-38.1 96-84V32c0-21.7-21.1-37-41.6-30.5zM464 116.3l-272 85.9v-62.4l272-85.9v62.4zM96 472c-30.9 0-56-19.7-56-44s25.1-44 56-44 56 19.7 56 44-25.1 44-56 44zm320-64c-30.9 0-56-19.7-56-44s25.1-44 56-44 56 19.7 56 44-25.1 44-56 44z"] };
var faNeuter = { prefix: 'far', iconName: 'neuter', icon: [288, 512, [], "f22c", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 71.4 51.9 130.6 120 142v150c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V318c68.1-11.4 120-70.6 120-142zm-144 96c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faNewspaper = { prefix: 'far', iconName: 'newspaper', icon: [576, 512, [], "f1ea", "M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"] };
var faNotesMedical = { prefix: 'far', iconName: 'notes-medical', icon: [384, 512, [], "f481", "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6v340zm-56-170h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"] };
var faObjectGroup = { prefix: 'far', iconName: 'object-group', icon: [512, 512, [], "f247", "M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z"] };
var faObjectUngroup = { prefix: 'far', iconName: 'object-ungroup', icon: [576, 512, [], "f248", "M564 224c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12h-88v-24h12c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v160H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h88v24h-12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V224h12zM352 64h32v32h-32V64zm0 256h32v32h-32v-32zM64 352H32v-32h32v32zm0-256H32V64h32v32zm32 216v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h12v160h-12c-6.627 0-12 5.373-12 12v12H96zm128 136h-32v-32h32v32zm280-64h-12c-6.627 0-12 5.373-12 12v12H256v-12c0-6.627-5.373-12-12-12h-12v-24h88v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12v-88h88v12c0 6.627 5.373 12 12 12h12v160zm40 64h-32v-32h32v32zm0-256h-32v-32h32v32z"] };
var faOctagon = { prefix: 'far', iconName: 'octagon', icon: [512, 512, [], "f306", "M497.9 150.5L361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c-.1-12.8-5.2-25-14.2-34zm-33.9 177L327.5 464h-143L48 327.5v-143L184.5 48h143.1L464 184.5v143z"] };
var faOutdent = { prefix: 'far', iconName: 'outdent', icon: [448, 512, [], "f03b", "M0 80V48c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12H12C5.373 92 0 86.627 0 80zm204 140h232c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zM12 476h424c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zm192-128h232c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12zM4.687 267.313l96 95.984C110.734 373.348 128 366.224 128 351.984V160.008c0-14.329-17.325-21.304-27.313-11.313l-96 95.992c-6.249 6.248-6.249 16.378 0 22.626z"] };
var faPaintBrush = { prefix: 'far', iconName: 'paint-brush', icon: [512, 512, [], "f1fc", "M439.3 0c-18.7 0-37.3 7.5-52.2 21C273.9 122.9 224 162.7 199.5 192.2c-15.7 18.9-24.6 38.1-23.5 65.6-49.4 6.9-81.7 34.5-101 79.2-22.4-5.8-46.9-26-61.6-39.9C8.4 292.3 0 296 0 303v26.7c0 49.7 12.2 92.9 35.3 124.8 27.2 37.6 67.9 57.5 117.8 57.5 91.4 0 150.6-57.4 150.9-146.2 28.8-4.5 52.4-20.5 77.9-52C405.2 285.2 512 118.9 512 69c0-38.1-32.6-69-72.7-69zM228.5 438.4C210.7 455.2 184.6 464 153 464c-34.3 0-60.8-12.7-78.9-37.6-9.1-12.6-16-28.3-20.4-46.2 10.1 5.8 18 8.6 25.4 8.6 16.6 0 31.1-10.1 37-25.6l.1-.2c15.4-41.6 39.5-54.9 70.7-58.1 13.3 27.3 38.3 49.5 69 58.2.9 27.3-7.1 56.2-27.4 75.3zM454.2 99.5c-45.4 85.4-81.4 149.3-109.6 184-24.3 29.9-40.1 35.7-59.2 35.7-33.3 0-61.4-28.4-61.4-62.1 0-35.6 13.8-37.2 195.2-200.4 6.1-5.5 13.4-8.7 20.1-8.7 15.2 0 24.7 10.9 24.7 21 0 10-4.9 21-9.8 30.5z"] };
var faPallet = { prefix: 'far', iconName: 'pallet', icon: [640, 512, [], "f482", "M144 288h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm32-240h80v80l64-32 64 32V48h80v192H176V48zm448 320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-96h48zm-448 96h-64v-96h64v96zm240 0H224v-96h192v96zm112 0h-64v-96h64v96z"] };
var faPalletAlt = { prefix: 'far', iconName: 'pallet-alt', icon: [640, 512, [], "f483", "M112 288h416c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H384V16c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm272-176h112v128H384V112zM144 48h192v192H144V48zm480 320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-96h48zm-448 96h-64v-96h64v96zm240 0H224v-96h192v96zm112 0h-64v-96h64v96z"] };
var faPaperPlane = { prefix: 'far', iconName: 'paper-plane', icon: [512, 512, [], "f1d8", "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"] };
var faPaperclip = { prefix: 'far', iconName: 'paperclip', icon: [512, 512, [], "f0c6", "M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z"] };
var faParagraph = { prefix: 'far', iconName: 'paragraph', icon: [384, 512, [], "f1dd", "M372 32H165.588C74.935 32 .254 104.882.001 195.535-.252 286.177 73.415 360 164 360v108c0 6.627 5.373 12 12 12h32c6.627 0 12-5.373 12-12V88h40v380c0 6.627 5.373 12 12 12h32c6.627 0 12-5.373 12-12V88h56c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12zM164 304c-59.552 0-108-48.449-108-108S104.448 88 164 88v216z"] };
var faPaste = { prefix: 'far', iconName: 'paste', icon: [448, 512, [], "f0ea", "M433.941 193.941l-51.882-51.882A48 48 0 0 0 348.118 128H320V80c0-26.51-21.49-48-48-48h-61.414C201.582 13.098 182.294 0 160 0s-41.582 13.098-50.586 32H48C21.49 32 0 53.49 0 80v288c0 26.51 21.49 48 48 48h80v48c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V227.882a48 48 0 0 0-14.059-33.941zm-84.066-16.184l48.368 48.368a6 6 0 0 1 1.757 4.243V240h-64v-64h9.632a6 6 0 0 1 4.243 1.757zM160 38c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18zm-32 138v192H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h55.414c9.004 18.902 28.292 32 50.586 32s41.582-13.098 50.586-32H266a6 6 0 0 1 6 6v42h-96c-26.51 0-48 21.49-48 48zm266 288H182a6 6 0 0 1-6-6V182a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v170a6 6 0 0 1-6 6z"] };
var faPause = { prefix: 'far', iconName: 'pause', icon: [448, 512, [], "f04c", "M192 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6zM448 79v352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6h-84c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6z"] };
var faPauseCircle = { prefix: 'far', iconName: 'pause-circle', icon: [512, 512, [], "f28b", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"] };
var faPaw = { prefix: 'far', iconName: 'paw', icon: [512, 512, [], "f1b0", "M443.105 158.302c-11.441 0-22.623 2.362-33.214 6.91 5.949-14.899 9.253-30.705 9.253-45.411C419.145 73.618 390.117 32 343 32c-40.683 0-71.752 29.702-87 67.421C240.752 61.701 209.682 32 169 32c-47.068 0-76.144 41.569-76.144 87.802 0 14.706 3.304 30.512 9.252 45.411-10.59-4.548-21.773-6.911-33.214-6.911C26.859 158.302 0 193.129 0 234.125c0 50.125 40.821 108.798 95.472 112.602-15.491 24.515-24.087 49.249-24.087 70.992 0 35.125 23.929 62.021 75.029 62.021 44.855 0 77.959-23.177 109.586-23.177 29.605 0 61.023 23.438 103.173 23.438 46.474 0 81.442-16.704 81.442-62.281 0-21.714-8.619-46.45-24.152-70.988C471.296 342.959 512 284.094 512 234.125c0-40.975-26.843-75.823-68.895-75.823zM343 80c19.102 0 28.145 20.699 28.145 39.802 0 27.129-20.591 65.583-48.5 65.583-19.102 0-28.145-20.699-28.145-39.802C294.5 118.293 314.926 80 343 80zm-87 109.192c18.835 40.539 59.663 52.462 95.147 38.961-5.91 14.112-9.2 28.879-9.281 42.694-60.451-40.621-111.663-40.363-171.734-.058-.089-13.798-3.379-28.545-9.281-42.636 35.188 13.384 76.176 1.865 95.149-38.961zM169 80c28.215 0 48.5 38.513 48.5 65.583 0 19.1-9.042 39.802-28.144 39.802-28.089 0-48.5-38.733-48.5-65.583C140.856 100.701 149.898 80 169 80zm-67.76 218.927c-28.693 0-53.24-37.685-53.24-64.802 0-2.848.586-27.823 20.894-27.823 29.389 0 53.24 39.37 53.24 65.062 0 14.567-6.263 27.563-20.894 27.563zm286.533 128.895c-34.2 17.209-89.74-19.26-131.773-19.26-42.74 0-104.861 36.037-132.576 18.817C96.995 410.952 181.138 288.333 256 288.333c75.483 0 160.489 125.041 131.773 139.489zm22.987-128.895c-14.632 0-20.895-12.995-20.895-27.562 0-25.692 23.852-65.062 53.24-65.062 20.309 0 20.895 24.975 20.895 27.823 0 27.376-24.741 64.801-53.24 64.801z"] };
var faPen = { prefix: 'far', iconName: 'pen', icon: [512, 512, [], "f304", "M492.2 74.3l-54.5-54.5c-26.4-26.4-69.1-26.4-95.5 0L12.7 349.3.3 461.2c-3.2 29.2 21.5 53.7 50.5 50.5l111.8-12.4 329.6-329.6c26.4-26.4 26.4-69.1 0-95.4zM140.6 453.4l-92.3 10.3 10.3-92.3L294 135.9l82.1 82.1-235.5 235.4zm317.7-317.6L410 184.1 327.9 102l48.3-48.3c7.6-7.6 20-7.6 27.6 0l54.5 54.5c7.6 7.6 7.6 19.9 0 27.6z"] };
var faPenAlt = { prefix: 'far', iconName: 'pen-alt', icon: [512, 512, [], "f305", "M492.2 74.3l-54.5-54.5c-26.4-26.4-69.1-26.4-95.5 0L294 68.1l-37-37c-9.4-9.4-24.6-9.4-33.9 0L71.5 182.5c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0L240 81.9l20.1 20.1L12.7 349.3.3 461.2c-3.2 29.2 21.4 53.8 50.5 50.5l111.8-12.4 329.6-329.6c26.4-26.4 26.4-69.1 0-95.4zM140.6 453.4l-92.3 10.3 10.3-92.3L294 135.9l82.1 82.1-235.5 235.4zm317.7-317.6L410 184.1 327.9 102l48.3-48.3c7.6-7.6 20-7.6 27.6 0l54.5 54.5c7.6 7.6 7.6 19.9 0 27.6z"] };
var faPenSquare = { prefix: 'far', iconName: 'pen-square', icon: [448, 512, [], "f14b", "M246.6 177.9l55.5 55.5c2.3 2.3 2.3 6.1 0 8.5L166.4 377.6l-57.1 6.3c-7.6.8-14.1-5.6-13.3-13.3l6.3-57.1L238 177.8c2.4-2.2 6.2-2.2 8.6.1zm98.4-12.8L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faPencil = { prefix: 'far', iconName: 'pencil', icon: [512, 512, [], "f040", "M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329 484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331 26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210 391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409 338H126v48h48v41.59l-18.282 18.401-73.586 12.141zm378.985-319.533l-.051.051-.051.051-48.03 48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259 33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z"] };
var faPencilAlt = { prefix: 'far', iconName: 'pencil-alt', icon: [512, 512, [], "f303", "M491.609 73.625l-53.861-53.839c-26.378-26.379-69.075-26.383-95.46-.001L24.91 335.089.329 484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331 26.581-68.879-.628-96.087zM200.443 311.557C204.739 315.853 210.37 318 216 318s11.261-2.147 15.557-6.443l119.029-119.03 28.569 28.569L210 391.355V350h-48v-48h-41.356l170.259-169.155 28.569 28.569-119.03 119.029c-8.589 8.592-8.589 22.522.001 31.114zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409 338H126v48h48v41.59l-18.282 18.401-73.586 12.141zm378.985-319.533l-.051.051-.051.051-48.03 48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259 33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z"] };
var faPennant = { prefix: 'far', iconName: 'pennant', icon: [576, 512, [], "f456", "M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z"] };
var faPercent = { prefix: 'far', iconName: 'percent', icon: [384, 512, [], "f295", "M96 224c53 0 96-43 96-96s-43-96-96-96S0 75 0 128s43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm192 208c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm93.9-381.2L57.2 475c-2.3 3.1-5.9 5-9.7 5H12c-9.6 0-15.3-10.7-10-18.7L327.2 37c2.3-3.1 5.9-5 9.7-5H372c9.6 0 15.3 10.8 9.9 18.8z"] };
var faPhone = { prefix: 'far', iconName: 'phone', icon: [512, 512, [], "f095", "M476.536 22.921L382.288 1.18c-21.6-4.984-43.609 6.185-52.339 26.556l-43.5 101.492c-7.982 18.626-2.604 40.598 13.081 53.43l40.016 32.741c-28.537 52.375-71.771 95.609-124.147 124.147l-32.741-40.015c-12.832-15.685-34.804-21.063-53.43-13.081L27.736 329.949C7.365 338.68-3.804 360.691 1.18 382.287l21.742 94.25C27.74 497.417 46.072 512 67.5 512 312.347 512 512 313.731 512 67.5c0-21.429-14.583-39.761-35.464-44.579zM69.289 463.996l-20.921-90.669 98.212-42.091 55.716 68.094c98.805-46.353 150.588-98.036 197.036-197.035l-68.097-55.715 42.092-98.212 90.669 20.921c-.947 217.588-177.09 393.755-394.707 394.707z"] };
var faPhoneSlash = { prefix: 'far', iconName: 'phone-slash', icon: [512, 512, [], "f3dd", "M279.432 402.687l34.679 34.679C243.472 484.536 158.618 512 67.501 512c-21.429 0-39.76-14.583-44.579-35.463L1.18 382.287c-4.983-21.596 6.185-43.606 26.556-52.338 0 0 102.555-43.943 103.091-44.148 14.105-5.417 30.106-1.612 40.79 9.072l79.049 79.049c-14.801 8.793-30.842 17.186-48.37 25.409l-55.716-68.094-98.212 42.091 20.921 90.669c77.275-.339 149.315-22.776 210.143-61.31zm229.054 71.857c4.686 4.686 4.686 12.284 0 16.971l-16.971 16.971c-4.686 4.686-12.284 4.686-16.97 0L3.515 37.456c-4.686-4.686-4.686-12.284 0-16.971l16.971-16.97c4.686-4.686 12.284-4.686 16.971 0l265.258 265.258a310.201 310.201 0 0 0 36.832-53.374l-40.016-32.741c-15.685-12.832-21.063-34.804-13.081-53.43l43.5-101.492c8.729-20.371 30.739-31.541 52.339-26.556l94.248 21.741C497.417 27.739 512 46.071 512 67.5c0 114.321-43.046 218.295-113.663 296.895l110.149 110.149zM336.814 302.872l27.527 27.527c61.648-69.558 99.219-160.942 99.655-261.11l-90.669-20.921-42.092 98.212 68.097 55.715c-18.994 40.484-38.888 73.048-62.518 100.577z"] };
var faPhoneSquare = { prefix: 'far', iconName: 'phone-square', icon: [448, 512, [], "f098", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-280c0 128.234-103.956 232-232 232a12.004 12.004 0 0 1-11.693-9.302l-11.999-52a12 12 0 0 1 6.966-13.728l55.999-23.999a12 12 0 0 1 14.015 3.431l24.798 30.308c39.155-18.37 70.638-50.287 88.624-88.624l-30.309-24.798a12 12 0 0 1-3.431-14.015l24-55.999a12 12 0 0 1 13.728-6.966l52 11.999A12 12 0 0 1 352 152z"] };
var faPhoneVolume = { prefix: 'far', iconName: 'phone-volume', icon: [448, 512, [], "f2a0", "M226.615 412.576l-28.086-70.218c-7.914-19.785-27.631-31.304-48.207-29.247l-21.97 2.197c-6.25-27.912-6.442-57.872-.002-86.618l21.97 2.197c20.541 2.055 40.282-9.433 48.208-29.246l28.087-70.218c8.438-21.094.579-45.143-18.686-57.184l-56.175-35.107c-18.097-11.311-42.199-9.21-58.016 6.606-124.622 124.622-125.347 327.175 0 452.523 15.816 15.814 39.913 17.922 58.017 6.606l56.174-35.107c19.265-12.041 27.124-36.091 18.686-57.184zm-99.556 51.125C21.661 357.639 21.517 186.505 127.06 80.297l54.646 34.156-27.437 68.589-59.946-5.993c-25.22 69.795-25.241 120.05 0 189.901l59.947-5.995 27.436 68.591-54.647 34.155zm155.728-362.488l-11.476 11.476c-4.117 4.117-4.671 10.584-1.341 15.36A55.7 55.7 0 0 1 280 160a55.688 55.688 0 0 1-10.031 31.95c-3.329 4.776-2.775 11.244 1.341 15.36l11.476 11.476c5.191 5.191 13.751 4.52 18.149-1.359C312.913 201.414 320 181.535 320 160s-7.087-41.414-19.064-57.428c-4.398-5.88-12.958-6.55-18.149-1.359zm90.875-90.875l-11.323 11.323c-4.461 4.461-4.746 11.651-.559 16.37C391.666 71.708 408 114.595 408 160s-16.334 88.292-46.22 121.969c-4.188 4.719-3.902 11.909.559 16.37l11.323 11.323c4.871 4.871 12.843 4.658 17.434-.479C426.488 269.575 448 217.302 448 160S426.488 50.425 391.096 10.817c-4.591-5.137-12.563-5.35-17.434-.479zm-45.355 45.355l-11.355 11.355c-4.406 4.406-4.679 11.429-.685 16.213C334.227 104.771 344 131.638 344 160s-9.773 55.229-27.733 76.74c-3.994 4.783-3.721 11.807.685 16.213l11.355 11.355c4.935 4.935 13.059 4.665 17.582-.65C369.655 235.731 384 199.54 384 160s-14.345-75.731-38.111-103.657c-4.523-5.315-12.647-5.584-17.582-.65z"] };
var faPills = { prefix: 'far', iconName: 'pills', icon: [576, 512, [], "f484", "M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm64 224H48V144c0-84.7 128-84.7 128 0v112zm353.1-49.1c-62.4-62.4-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c62.4 62.4 163.8 62.5 226.3 0s62.5-163.9 0-226.3zm-207.3 52.8l154.5 154.5C375.7 478.8 257 360.5 321.8 259.7zm188.4 120.6L355.7 225.8c100.6-64.7 219.3 53.7 154.5 154.5z"] };
var faPlane = { prefix: 'far', iconName: 'plane', icon: [576, 512, [], "f072", "M456 176h-88.402L280.016 17.564l-.565-.969C273.151 6.359 261.77 0 249.75 0h-52.369c-22.479 0-38.954 20.875-34.012 42.587L188.111 176H136l-24.285-36.444c-6.343-10.076-17.586-16.306-29.52-16.306H34.887c-21.985 0-38.519 20.112-34.198 41.714l18.207 91.037L.69 347.033c-4.313 21.561 12.171 41.72 34.199 41.716l47.313-.001c11.932-.003 23.17-6.231 29.512-16.304L135.999 336h52.112l-24.743 133.413C158.42 491.157 174.934 512 197.381 512h52.369c12.021 0 23.402-6.36 29.702-16.598l.293-.477L367.599 336H456c65.047 0 120-36.636 120-80s-54.953-80-120-80zm0 112H339.286l-97.292 176H213.19l32.641-176H110.305l-35.151 52.748-24.265.001 16.949-84.748-16.949-84.751h24.266l35.15 52.75h135.527L213.191 48h28.804l97.29 176H456c39.07 0 72 16 72 32s-32.817 32-72 32z"] };
var faPlaneAlt = { prefix: 'far', iconName: 'plane-alt', icon: [576, 512, [], "f3de", "M457.75 176.563H356.417L329.66 128H340c6.627 0 12-5.373 12-12V76c0-6.627-5.373-12-12-12h-45.602l-25.569-46.406-.581-.998C261.947 6.359 250.566 0 238.547 0h-52.369c-22.472 0-38.951 20.866-34.015 42.578l25.086 135.738a624.765 624.765 0 0 0-37.477 3.772l-27.581-42.387c-6.326-10.162-17.62-16.451-29.61-16.451H44.004c-22.029 0-38.509 20.155-34.198 41.714l11.961 59.805C7.821 234.229 0 244.818 0 256.001s7.821 21.772 21.766 31.231l-11.96 59.803c-4.319 21.601 12.212 41.718 34.199 41.714l38.582-.001c11.988-.003 23.278-6.292 29.604-16.45l27.58-42.386a624.11 624.11 0 0 0 37.477 3.772L152.163 469.42c-4.941 21.739 11.568 42.58 34.015 42.58h52.369c12.021 0 23.401-6.36 29.702-16.598l.302-.491L294.397 448H340c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-10.341l26.758-48.565 101.333.001C510.814 335.436 576 306.854 576 256c0-50.872-65.216-79.437-118.25-79.437zm0 110.873l-129.69-.001L230.778 464h-28.801l32.542-176.087c-53.455-1.594-62.567-1.471-118.194-9.978l-40.872 62.812-15.439.001L76.964 256l-16.95-84.751h15.44l40.872 62.814c55.671-8.515 64.832-8.386 118.194-9.979L201.979 48h28.8l97.281 176.563h129.69C496.424 224.563 528 240 528 256s-31.58 31.436-70.25 31.436z"] };
var faPlay = { prefix: 'far', iconName: 'play', icon: [448, 512, [], "f04b", "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"] };
var faPlayCircle = { prefix: 'far', iconName: 'play-circle', icon: [512, 512, [], "f144", "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"] };
var faPlug = { prefix: 'far', iconName: 'plug', icon: [384, 512, [], "f1e6", "M360 144H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h8c0 80.208 59.02 146.628 136 158.208V512h48v-81.792c76.979-11.58 136-78 136-158.208h8c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zm-24 80h-32v48c0 61.898-50.092 112-112 112-61.898 0-112-50.092-112-112v-48H48v-32h288v32zm-72-96V24c0-13.255 10.745-24 24-24s24 10.745 24 24v104h-48zm-192 0V24C72 10.745 82.745 0 96 0s24 10.745 24 24v104H72z"] };
var faPlus = { prefix: 'far', iconName: 'plus', icon: [448, 512, [], "f067", "M436 228H252V44c0-6.6-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12v184H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h184v184c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12V284h184c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12z"] };
var faPlusCircle = { prefix: 'far', iconName: 'plus-circle', icon: [512, 512, [], "f055", "M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"] };
var faPlusHexagon = { prefix: 'far', iconName: 'plus-hexagon', icon: [576, 512, [], "f300", "M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192zm16-208v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12z"] };
var faPlusOctagon = { prefix: 'far', iconName: 'plus-octagon', icon: [512, 512, [], "f301", "M497.9 150.5L361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c-.1-12.8-5.2-25-14.2-34zm-33.9 177L327.5 464h-143L48 327.5v-143L184.5 48h143.1L464 184.5v143zM384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12z"] };
var faPlusSquare = { prefix: 'far', iconName: 'plus-square', icon: [448, 512, [], "f0fe", "M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faPodcast = { prefix: 'far', iconName: 'podcast', icon: [512, 512, [], "f2ce", "M299.429 488.563C294.286 507.573 274.858 512 256 512c-18.857 0-38.286-4.427-43.428-23.437C204.927 460.134 192 388.898 192 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM144 232c0-61.19 48.953-110.852 109.88-111.98 61.961-1.147 114.04 49.862 114.12 111.833.035 27.659-9.892 53.792-28.077 74.313-1.843 2.08-2.077 5.144-.48 7.418 5.296 7.541 8.981 16.176 10.931 25.69.947 4.623 6.573 6.453 10.003 3.211 29.469-27.847 47.806-67.348 47.623-111.136-.352-84.131-69.885-152.428-154.01-151.337C170.968 81.09 104 148.724 104 232c0 43.523 18.297 82.768 47.614 110.476 3.434 3.246 9.064 1.427 10.013-3.203 1.949-9.514 5.635-18.149 10.931-25.69 1.596-2.272 1.365-5.335-.477-7.413C153.926 285.685 144 259.607 144 232zM256.503.001C126.406-.271 21.207 103.688 20.01 233.78c-.902 98.093 58.054 182.512 142.555 218.984 4.388 1.894 9.108-1.9 8.253-6.602a985.559 985.559 0 0 1-5.517-33.559 6.014 6.014 0 0 0-3.088-4.407C102.605 375.626 60 311.84 60 236c0-108.321 87.662-196 196-196 108.321 0 196 87.661 196 196 0 74.634-41.538 139.051-102.213 172.196a6.01 6.01 0 0 0-3.088 4.406 986.377 986.377 0 0 1-5.517 33.559c-.855 4.703 3.866 8.496 8.255 6.602C433.298 416.566 492 333.145 492 236 492 105.828 386.611.272 256.503.001zM256 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"] };
var faPoo = { prefix: 'far', iconName: 'poo', icon: [512, 512, [], "f2fe", "M256 48c25.778 0 64.035 29.781 64.035 58.5 0 22.528-5.535 32.5-14.306 45.5H334c28.719 0 52 23.281 52 52 0 18.617-7.805 36.04-23.195 51.783l-.213.217c68.119 0 78.945 63.358 40.035 104C444.288 360 464 383.724 464 412c0 28.719-23.281 52-52 52H100c-60.777 0-73.352-91.152-9.583-103.109.23-.044 10.646-2.01 27.155-5.505-32.367-14.655-48.53-78.657 4.799-96.656.2-.068 11.59-3.927 28.567-10.203-38.738-23.167-29.9-77.037 6.28-92.197C158.841 155.577 256 138.035 256 48M208 0v48c0 51.396-57.388 58.99-69.524 64.141-48.482 20.426-67.516 72.637-58.808 114.545-37.027 25.385-45.085 70.757-37.124 102.688C16.903 346.574 0 375.777 0 412c0 54.249 46.769 100 100 100h312c55.14 0 100-44.86 100-100 0-33.227-16.293-62.724-41.306-80.919 8.63-42.822-7.85-81.381-39.068-104.05 11.403-54.583-19.645-101.133-63.625-117.08C368 80 344 0 208 0zm-47.996 352c-6.589 0-10.367 7.53-6.41 12.799C176.946 395.889 214.123 416 256 416s79.054-20.111 102.406-51.201c3.957-5.269.18-12.799-6.41-12.799H160.004zM312 224a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 264 272c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48zm-112 0a47.789 47.789 0 0 0-22.603 5.647h.015c10.916 0 19.765 8.849 19.765 19.765s-8.849 19.765-19.765 19.765-19.765-8.849-19.765-19.765v-.015A47.789 47.789 0 0 0 152 272c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48z"] };
var faPortrait = { prefix: 'far', iconName: 'portrait', icon: [384, 512, [], "f3e0", "M0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48zm336 6v404a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h276a6 6 0 0 1 6 6zm-144 74c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm91.642 166.91l-35.657-8.914c-37.461 26.945-82.869 20.932-111.97 0l-35.657 8.914C78.99 300.252 64 319.452 64 341.477V360c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24v-18.523c0-22.025-14.99-41.225-36.358-46.567z"] };
var faPoundSign = { prefix: 'far', iconName: 'pound-sign', icon: [320, 512, [], "f154", "M308 360h-30.284c-6.627 0-12 5.373-12 12v56.835H112V280h100c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H112v-77.081c0-37.438 26.786-67.388 72.958-67.388 25.94 0 48.692 11.882 60.552 19.451 5.141 3.28 11.923 2.156 15.758-2.586l19.658-24.305c4.35-5.378 3.262-13.296-2.365-17.32C262.736 51.456 229.027 32 184.334 32 105.716 32 48 83.164 48 152.423V232H20c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h28v148.835H12c-6.627 0-12 5.373-12 12V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12z"] };
var faPowerOff = { prefix: 'far', iconName: 'power-off', icon: [512, 512, [], "f011", "M388.5 46.3C457.9 90.3 504 167.8 504 256c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 168 54 90.3 123.5 46.3c5.8-3.7 13.5-1.8 16.9 4.2l11.8 20.9c3.1 5.5 1.4 12.5-3.9 15.9C92.8 122.9 56 185.1 56 256c0 110.5 89.5 200 200 200s200-89.5 200-200c0-70.9-36.8-133.1-92.3-168.6-5.3-3.4-7-10.4-3.9-15.9l11.8-20.9c3.3-6.1 11.1-7.9 16.9-4.3zM280 276V12c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"] };
var faPrescriptionBottle = { prefix: 'far', iconName: 'prescription-bottle', icon: [448, 512, [], "f485", "M416 0H32C14.3 0 0 14.3 0 32v96c0 8.8 7.2 16 16 16h16v336c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V144h16c8.8 0 16-7.2 16-16V32c0-17.7-14.3-32-32-32zM48 48h352v48H48V48zm320 416H80v-40h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-48h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-48h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-40h288v320z"] };
var faPrescriptionBottleAlt = { prefix: 'far', iconName: 'prescription-bottle-alt', icon: [448, 512, [], "f486", "M136 320h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM416 0H32C14.3 0 0 14.3 0 32v96c0 8.8 7.2 16 16 16h16v336c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V144h16c8.8 0 16-7.2 16-16V32c0-17.7-14.3-32-32-32zm-48 464H80V144h288v320zm32-368H48V48h352v48z"] };
var faPrint = { prefix: 'far', iconName: 'print', icon: [512, 512, [], "f02f", "M416 192V81.9c0-6.4-2.5-12.5-7-17L351 7c-4.5-4.5-10.6-7-17-7H120c-13.3 0-24 10.7-24 24v168c-53 0-96 43-96 96v136c0 13.3 10.7 24 24 24h72v40c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24v-40h72c13.3 0 24-10.7 24-24V288c0-53-43-96-96-96zM144 48h180.1L368 91.9V240H144V48zm224 416H144v-80h224v80zm96-64h-48v-40c0-13.2-10.8-24-24-24H120c-13.2 0-24 10.8-24 24v40H48V288c0-26.5 21.5-48 48-48v24c0 13.2 10.8 24 24 24h272c13.2 0 24-10.8 24-24v-24c26.5 0 48 21.5 48 48v112zm-8-96c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"] };
var faProcedures = { prefix: 'far', iconName: 'procedures', icon: [640, 512, [], "f487", "M520 240H312c-22.1 0-40 17.9-40 40v136H48V136c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-40h544v40c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V360c0-66.2-53.8-120-120-120zm72 176H320V288h200c39.7 0 72 32.3 72 72v56zm-432-32c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm0-112c17.7 0 32 14.4 32 32s-14.3 32-32 32-32-14.4-32-32 14.3-32 32-32zm-16-144h114.3l36.9 73.9c4.1 8.2 15.7 8.2 19.8 0l54.1-108.2 17.2 34.3H504c13.2 0 24-10.7 24-24s-10.8-24-24-24h-88L379.1 6.1C375-2 363.3-2 359.3 6.1l-54.1 108.2L288 80H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16z"] };
var faPuzzlePiece = { prefix: 'far', iconName: 'puzzle-piece', icon: [576, 512, [], "f12e", "M437.983 261.352c-4.321 2.778-10.839 6.969-13.122 7.279-24.067-.092.757-103.841 5.813-124.714-29.614 5.697-134.448 26.337-159.932 7.046C271.197 132.585 304 116.55 304 73.588 304 28.222 261.986 0 216.994 0 171.147 0 112 25.756 112 75.063c0 40.881 28.702 64.642 31.994 74.559-.739 28.838-115.981 1.752-143.994-5.469v351.556C10.464 498.412 56.682 512 104 512c45.3-.001 88-15.737 88-60.854 0-31.773-32-45.657-32-73.834 0-16.521 29.235-27.063 49.361-27.063 21.125 0 46.639 11.414 46.639 25.588 0 24.02-32 36.882-32 77.924 0 66.838 81.555 58.073 134.44 51.225 37.039-4.797 33.159-3.906 73.069-3.906-2.799-8.954-28.061-81.125-13.892-100.4 10.021-13.639 39.371 31.32 84.037 31.32C548.715 432 576 380.487 576 336c0-57.793-45.975-133.814-138.017-74.648zM501.654 384c-24.507 0-37.496-32.763-79.116-32.763-35.286 0-67.12 27.143-53.431 104.031-19.03 2.234-84.249 12.922-96.329 2.29C261.633 447.771 304 419.385 304 375.837c0-46.326-49.475-73.588-94.639-73.588-46.686 0-97.361 27.417-97.361 75.063 0 50.809 41.414 70.396 29.601 79.554-16.851 13.064-71.854 5.122-93.601.935V204.584c63.934 10.948 144 9.33 144-55.435 0-31.802-32-45.775-32-74.086C160 58.488 199.338 48 216.994 48 233.19 48 256 55.938 256 73.588c0 23.524-33.264 36.842-33.264 77.924 0 60.396 86.897 58.813 146.508 51.68-6.592 53.714 1.669 113.439 55.691 113.439 31.223 0 45.141-28.631 75.22-28.631C517.407 288 528 315.957 528 336c0 21.606-12.157 48-26.346 48z"] };
var faQrcode = { prefix: 'far', iconName: 'qrcode', icon: [448, 512, [], "f029", "M0 224h192V32H0v192zM40 72h112v112H40V72zm216-40v192h192V32H256zm152 152H296V72h112v112zM0 480h192V288H0v192zm40-152h112v112H40V328zm32 32h48v48H72v-48zm0-256h48v48H72v-48zm304 48h-48v-48h48v48zm40 136h32v128H320v-32h-32v96h-32V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"] };
var faQuestion = { prefix: 'far', iconName: 'question', icon: [384, 512, [], "f128", "M199.65 0C125.625 0 69.665 30.187 27.21 92.51c-19.17 28.15-12.94 66.3 14.17 86.86l36.73 27.85c10.81 8.2 24.19 12.79 37.74 12.96-11.84 19-17.82 40.61-17.82 64.55v11.43c0 16.38 6.2 31.34 16.38 42.65C97.99 357.2 88 381.45 88 408c0 57.35 46.65 104 104 104s104-46.65 104-104c0-26.55-9.99-50.8-26.41-69.19 8.66-9.62 14.43-21.87 15.97-35.38 28.287-16.853 96-48.895 96-138.21C381.56 71.151 290.539 0 199.65 0zM192 464c-30.88 0-56-25.12-56-56 0-30.873 25.118-56 56-56 30.887 0 56 25.132 56 56 0 30.88-25.12 56-56 56zm45.97-176.21v8.37c0 8.788-7.131 15.84-15.84 15.84h-60.26c-8.708 0-15.84-7.051-15.84-15.84v-11.43c0-47.18 35.77-66.04 62.81-81.2 23.18-13 37.39-21.83 37.39-39.04 0-22.77-29.04-37.88-52.52-37.88-30.61 0-44.74 14.49-64.6 39.56-5.365 6.771-15.157 8.01-22 2.8l-36.73-27.85c-6.74-5.11-8.25-14.6-3.49-21.59C98.08 73.73 137.8 48 199.65 48c64.77 0 133.91 50.56 133.91 117.22 0 88.51-95.59 89.87-95.59 122.57z"] };
var faQuestionCircle = { prefix: 'far', iconName: 'question-circle', icon: [512, 512, [], "f059", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"] };
var faQuestionSquare = { prefix: 'far', iconName: 'question-square', icon: [448, 512, [], "f2fd", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6zm-68.756-225.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C152.846 131.491 182.94 112 229.794 112c49.071 0 101.45 38.304 101.45 88.8zM266 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"] };
var faQuidditch = { prefix: 'far', iconName: 'quidditch', icon: [640, 512, [], "f458", "M636.5 31L616.6 6c-5.5-6.9-15.6-8-22.5-2.6l-230.7 178-34.7-43.6c-4.8-6.1-14-6-18.8.1L252.2 211c-31.1.7-104 6.6-151.9 44.7C38.3 305 0 511.3 0 511.3c15.1.7 212.4 7.4 272.2-40.1 47.7-37.9 70-107.4 77.8-137.6l84.3-39.5c7-3.3 9.1-12.3 4.3-18.3l-35.3-44.3L634 53.5c6.9-5.5 8-15.6 2.5-22.5zM242.3 433.7c-16.6 13.2-74.3 28.5-182.8 30.2 4.8-19.1 10.1-38.2 15.8-56.4l45.3-36c5-3.9 1.2-11.9-5-10.6l-26.1 5.5c13.4-35.3 27.7-63 40.7-73.4 27-21.5 71.3-31 109.7-33.5l59.8 75c-9.3 31.2-28 75.9-57.4 99.2zm88-143.9l-39.8-49.9 24.2-30.8c2.4-3 7-3.1 9.4 0l43.8 54.9c2.4 3 1.4 7.5-2.1 9.2l-35.5 16.6zm181.8 29.9c-52.9 0-96 43-96 95.8s43.1 95.8 96 95.8 96-43 96-95.8-43.1-95.8-96-95.8zm0 143.8c-26.5 0-48-21.5-48-47.9s21.5-47.9 48-47.9 48 21.5 48 47.9-21.6 47.9-48 47.9z"] };
var faQuoteLeft = { prefix: 'far', iconName: 'quote-left', icon: [512, 512, [], "f10d", "M48 480h176c12.296 0 23.507-4.629 32-12.232 8.493 7.603 19.704 12.232 32 12.232h176c26.51 0 48-21.49 48-48V256c0-26.51-21.49-48-48-48h-21.225c9.011-6.709 20.734-12.249 35.024-16.538 20.3-6.093 34.201-24.779 34.201-45.974V80.01c0-30.142-27.371-52.601-56.685-47.208C347.147 52.703 276.367 118.75 250.74 216.136A47.767 47.767 0 0 0 224 208h-21.225c9.011-6.709 20.734-12.249 35.024-16.538 20.3-6.093 34.201-24.779 34.201-45.974V80.01c0-30.142-27.371-52.601-56.685-47.208C77.171 58.218 0 158.893 0 304v128c0 26.51 21.49 48 48 48zm240-176c0-118.68 57.851-202.263 176-224v65.488c-56.449 16.943-90.755 51.883-94.007 110.512H464v176H288V304zm-240 0c0-118.68 57.851-202.263 176-224v65.488c-56.449 16.943-90.755 51.883-94.007 110.512H224v176H48V304z"] };
var faQuoteRight = { prefix: 'far', iconName: 'quote-right', icon: [512, 512, [], "f10e", "M464 32H288c-12.296 0-23.507 4.629-32 12.232C247.507 36.629 236.296 32 224 32H48C21.49 32 0 53.49 0 80v176c0 26.51 21.49 48 48 48h21.225c-9.011 6.709-20.734 12.249-35.024 16.538C13.901 326.631 0 345.317 0 366.512v65.478c0 30.142 27.371 52.602 56.685 47.208 108.168-19.901 178.948-85.947 204.574-183.333A47.78 47.78 0 0 0 288 304h21.225c-9.011 6.709-20.734 12.249-35.024 16.538-20.3 6.093-34.201 24.779-34.201 45.974v65.478c0 30.142 27.371 52.602 56.685 47.208C434.829 453.782 512 353.107 512 208V80c0-26.51-21.49-48-48-48zM224 208c0 118.68-57.851 202.263-176 224v-65.488c56.449-16.943 90.755-51.883 94.007-110.512H48V80h176v128zm240 0c0 118.68-57.851 202.263-176 224v-65.488c56.449-16.943 90.755-51.883 94.007-110.512H288V80h176v128z"] };
var faRacquet = { prefix: 'far', iconName: 'racquet', icon: [640, 512, [], "f45a", "M616.3 61.3C562-17.2 434.4-19.7 333 50.4c-57.7 40-95.6 95.3-108.4 149.9-10 42.6-30.1 81.5-56.6 115.8-.4-.2-15.1-8.1-30.7 2.8L13.6 405.6c-14.5 10.1-18 30.1-7.9 44.6l33.8 48.2c10.5 15 30.5 17.7 44.6 7.9l123.7-86.6c9.8-6.8 14-18.1 13-29.2 30.3-9.2 61.7-14.3 93.4-14 28.7.3 34.9 3.8 58.3 4.1 49.7.5 104.6-16.1 154.1-50.3 103-71.4 143.2-191.8 89.7-269zM69.7 457.7l-15.4-22 97.5-68.3 15.4 22-97.5 68.3zM207.9 344c9.9-12.9 18.4-26.5 26.4-40.4 8.4 16.8 12.6 20.5 20.9 29.6-15.8 2.6-31.6 6.1-47.3 10.8zm291.4-53.3c-39.7 27.5-84.7 42.4-126.6 41.9-139.4-1.5-135.7-157.3-12.4-242.7C416.9 50.8 466.3 48 486.9 48c10 0 10 0 0 0 138.2 1.5 137.2 156.4 12.4 242.7z"] };
var faRandom = { prefix: 'far', iconName: 'random', icon: [512, 512, [], "f074", "M505 400l-79.2 72.9c-15.1 15.1-41.8 4.4-41.8-17v-40h-31c-3.3 0-6.5-1.4-8.8-3.9l-89.8-97.2 38.1-41.3 79.8 86.3H384v-48c0-21.4 26.7-32.1 41.8-17l79.2 71c9.3 9.6 9.3 24.8 0 34.2zM12 152h91.8l79.8 86.3 38.1-41.3-89.8-97.2c-2.3-2.5-5.5-3.9-8.8-3.9H12c-6.6 0-12 5.4-12 12v32c0 6.7 5.4 12.1 12 12.1zm493-41.9l-79.2-71C410.7 24 384 34.7 384 56v40h-31c-3.3 0-6.5 1.4-8.8 3.9L103.8 360H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h111c3.3 0 6.5-1.4 8.8-3.9L372.2 152H384v48c0 21.4 26.7 32.1 41.8 17l79.2-73c9.3-9.4 9.3-24.6 0-33.9z"] };
var faRectangleLandscape = { prefix: 'far', iconName: 'rectangle-landscape', icon: [510, 512, [], "f2fa", "M462 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h414c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h402c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6z"] };
var faRectanglePortrait = { prefix: 'far', iconName: 'rectangle-portrait', icon: [385, 512, [], "f2fb", "M385 464V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h289c26.5 0 48-21.5 48-48zm-337-6V54c0-3.3 2.7-6 6-6h277c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6z"] };
var faRectangleWide = { prefix: 'far', iconName: 'rectangle-wide', icon: [640, 512, [], "f2fc", "M592 96.5H48c-26.5 0-48 21.5-48 48v223c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48v-223c0-26.5-21.5-48-48-48zm-6 271H54c-3.3 0-6-2.7-6-6v-211c0-3.3 2.7-6 6-6h532c3.3 0 6 2.7 6 6v211c0 3.3-2.7 6-6 6z"] };
var faRecycle = { prefix: 'far', iconName: 'recycle', icon: [512, 512, [], "f1b8", "M214.951 71.068l-29.543 48.77c-3.425 5.654-10.778 7.473-16.444 4.069l-20.562-12.355c-5.694-3.422-7.525-10.819-4.085-16.501l29.585-48.861c37.33-61.594 126.877-61.579 164.198 0l44.115 72.856 34.93-20.988c12.268-7.371 27.19 3.858 23.765 17.585l-21.886 87.815c-2.137 8.574-10.821 13.792-19.395 11.654l-87.804-21.906c-13.822-3.446-16.55-21.921-4.37-29.239l33.631-20.208-44.045-72.707c-18.636-30.747-63.456-30.73-82.09.016zM55.006 335.104l49.596-81.873 34.03 20.447c12.18 7.318 27.211-3.763 23.765-17.585l-21.88-87.811c-2.137-8.574-10.821-13.792-19.395-11.654l-87.81 21.902c-13.729 3.421-16.638 21.868-4.37 29.239l34.554 20.762-49.475 81.711C-24.729 374.181 21.448 456 96.12 456H164c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H96.045c-37.259 0-60.426-40.907-41.039-72.896zm442.98-24.861l-34.991-57.788c-3.424-5.655-10.778-7.476-16.445-4.071l-20.53 12.336c-5.695 3.422-7.526 10.821-4.083 16.504l35.074 57.897C476.323 366.988 453.337 408 415.96 408H320v-39.98c0-14.21-17.24-21.386-27.313-11.313l-64 63.98c-6.249 6.248-6.249 16.379 0 22.627l64 63.989C302.689 517.308 320 510.3 320 495.989V456h95.887c74.764 0 120.802-81.898 82.099-145.757z"] };
var faRedo = { prefix: 'far', iconName: 'redo', icon: [512, 512, [], "f01e", "M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.568C418.075 51.834 341.788 7.73 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.165 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.322 0-196-87.662-196-196 0-108.322 87.662-196 196-196 79.545 0 147.941 47.282 178.675 115.302l-126.389-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z"] };
var faRedoAlt = { prefix: 'far', iconName: 'redo-alt', icon: [512, 512, [], "f2f9", "M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256.001 8 119.34 8 7.9 119.525 8 256.185 8.1 393.067 119.095 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.353-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.321 0-196-87.662-196-196 0-108.321 87.662-196 196-196 54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486z"] };
var faRegistered = { prefix: 'far', iconName: 'registered', icon: [512, 512, [], "f25d", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm110.442-81.791c-53.046-96.284-50.25-91.468-53.271-96.085 24.267-13.879 39.482-41.563 39.482-73.176 0-52.503-30.247-85.252-101.498-85.252h-78.667c-6.617 0-12 5.383-12 12V380c0 6.617 5.383 12 12 12h38.568c6.617 0 12-5.383 12-12v-83.663h31.958l47.515 89.303a11.98 11.98 0 0 0 10.593 6.36h42.81c9.14 0 14.914-9.799 10.51-17.791zM256.933 239.906h-33.875v-64.14h27.377c32.417 0 38.929 12.133 38.929 31.709-.001 20.913-11.518 32.431-32.431 32.431z"] };
var faRepeat = { prefix: 'far', iconName: 'repeat', icon: [512, 512, [], "f363", "M512 256c0 83.813-68.187 152-152 152H136.535l55.762 54.545c4.775 4.67 4.817 12.341.094 17.064l-16.877 16.877c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971l104-104c4.686-4.686 12.284-4.686 16.971 0l16.877 16.877c4.723 4.723 4.681 12.393-.094 17.064L136.535 360H360c57.346 0 104-46.654 104-104 0-19.452-5.372-37.671-14.706-53.258a11.991 11.991 0 0 1 1.804-14.644l17.392-17.392c5.362-5.362 14.316-4.484 18.491 1.847C502.788 196.521 512 225.203 512 256zM62.706 309.258C53.372 293.671 48 275.452 48 256c0-57.346 46.654-104 104-104h223.465l-55.762 54.545c-4.775 4.67-4.817 12.341-.094 17.064l16.877 16.877c4.686 4.686 12.284 4.686 16.971 0l104-104c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-16.877 16.877c-4.723 4.723-4.681 12.393.094 17.064L375.465 104H152C68.187 104 0 172.187 0 256c0 30.797 9.212 59.479 25.019 83.447 4.175 6.331 13.129 7.209 18.491 1.847l17.392-17.392a11.991 11.991 0 0 0 1.804-14.644z"] };
var faRepeat1 = { prefix: 'far', iconName: 'repeat-1', icon: [512, 512, [], "f365", "M512 256c0 83.813-68.187 152-152 152H136.535l55.762 54.545c4.775 4.67 4.817 12.341.094 17.064l-16.877 16.877c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971L154.59 275.468c4.686-4.686 12.284-4.686 16.971 0l16.877 16.877c4.723 4.723 4.681 12.393-.094 17.064L136.535 360H360c57.346 0 104-46.654 104-104 0-19.452-5.372-37.671-14.706-53.258a11.991 11.991 0 0 1 1.804-14.644l17.392-17.392c5.362-5.362 14.316-4.484 18.491 1.847C502.788 196.521 512 225.203 512 256zM62.706 309.258C53.372 293.671 48 275.452 48 256c0-57.346 46.654-104 104-104h223.465l-51.809 50.592c-4.775 4.67-4.817 12.341-.094 17.064l16.877 16.877c4.686 4.686 12.284 4.686 16.971 0l100.047-100.047c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-16.877 16.877c-4.723 4.723-4.681 12.393.094 17.064L375.465 104H152C68.187 104 0 172.187 0 256c0 30.797 9.212 59.479 25.019 83.447 4.175 6.331 13.129 7.209 18.491 1.847l17.392-17.392a11.991 11.991 0 0 0 1.804-14.644zm164.557-9.731c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"] };
var faRepeat1Alt = { prefix: 'far', iconName: 'repeat-1-alt', icon: [512, 512, [], "f366", "M481.162 164.326c19.478 25.678 30.997 57.709 30.836 92.388C511.61 340.638 442.361 408 358.436 408H176v64c-.001 10.683-12.949 16.021-20.485 8.485l-88-87.995c-4.686-4.686-4.687-12.284 0-16.971l88-88.005c7.58-7.58 20.485-2.14 20.485 8.485v64h182.668C415.933 360 464.06 313.154 464 255.889c-.023-22.372-7.149-43.111-19.237-60.082-3.431-4.817-2.962-11.387 1.223-15.564 8.269-8.255 13.592-13.545 17.137-17.104 5.131-5.152 13.645-4.605 18.039 1.187zM48 256.111C47.94 198.846 96.067 152 153.332 152H336v64c0 10.625 12.905 16.066 20.485 8.485l88-88.005c4.687-4.686 4.686-12.285 0-16.971l-88-87.995C348.949 23.979 336.001 29.317 336 40v64H153.564C69.639 104 .389 171.362.002 255.286c-.16 34.679 11.358 66.71 30.836 92.388 4.394 5.792 12.908 6.339 18.039 1.188 3.545-3.559 8.867-8.849 17.137-17.105 4.185-4.178 4.653-10.748 1.223-15.564-12.088-16.971-19.213-37.71-19.237-60.082zm179.263 43.416c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z"] };
var faRepeatAlt = { prefix: 'far', iconName: 'repeat-alt', icon: [512, 512, [], "f364", "M481.162 164.326c19.478 25.678 30.997 57.709 30.836 92.388C511.61 340.638 442.361 408 358.436 408H176v64c-.001 10.683-12.949 16.021-20.485 8.485l-88-87.995c-4.686-4.686-4.687-12.284 0-16.971l88-88.005c7.58-7.58 20.485-2.14 20.485 8.485v64h182.668C415.933 360 464.06 313.154 464 255.889c-.023-22.372-7.149-43.111-19.237-60.082-3.431-4.817-2.962-11.387 1.223-15.564 8.269-8.255 13.592-13.545 17.137-17.104 5.131-5.152 13.645-4.605 18.039 1.187zM48 256.111C47.94 198.846 96.067 152 153.332 152H336v64c0 10.625 12.905 16.066 20.485 8.485l88-88.005c4.687-4.686 4.686-12.285 0-16.971l-88-87.995C348.949 23.979 336.001 29.317 336 40v64H153.564C69.639 104 .389 171.362.002 255.286c-.16 34.679 11.358 66.71 30.836 92.388 4.394 5.792 12.908 6.339 18.039 1.188 3.545-3.559 8.867-8.849 17.137-17.105 4.185-4.178 4.653-10.748 1.223-15.564-12.088-16.971-19.213-37.71-19.237-60.082z"] };
var faReply = { prefix: 'far', iconName: 'reply', icon: [576, 512, [], "f3e5", "M14.062 257.94L190.06 433.88c30.21 30.21 81.94 8.7 81.94-33.94v-78.28c146.59 8.54 158.53 50.199 134.18 127.879-13.65 43.56 35.07 78.89 72.19 54.46C537.98 464.768 576 403.8 576 330.05c0-170.37-166.04-197.15-304-201.3V48.047c0-42.72-51.79-64.09-81.94-33.94L14.062 190.06c-18.75 18.74-18.75 49.14 0 67.88zM48 224L224 48v128.03c143.181.63 304 11.778 304 154.02 0 66.96-40 109.95-76.02 133.65C501.44 305.911 388.521 273.88 224 272.09V400L48 224z"] };
var faReplyAll = { prefix: 'far', iconName: 'reply-all', icon: [640, 512, [], "f122", "M142.06 273.94l160 159.97c30.02 30.02 81.94 8.98 81.94-33.94v-71.08c118.18 4.94 121.95 30.99 104.44 89.17-13.17 43.75 36.21 78.71 73.1 53.43 50.61-34.7 78.46-79.33 78.46-143.11 0-142.4-127.16-171.02-256-175.61V80.04c0-42.88-51.89-64-81.94-33.94l-160 159.96c-18.75 18.74-18.75 49.14 0 67.88zM176 240L336 80v120c120.616 0 256 6.513 256 128.38 0 55.8-28.79 83.87-57.6 103.62 41.002-136.247-60.829-152-198.4-152v120L176 240zM14.059 206.059l160-159.962c20.389-20.389 50.822-17.22 68.29.31L48 240l194.35 193.603c-17.474 17.531-47.921 20.675-68.291.306l-160-159.967c-18.745-18.746-18.745-49.138 0-67.883z"] };
var faRetweet = { prefix: 'far', iconName: 'retweet', icon: [640, 512, [], "f079", "M624.485 353.456l-104 104c-4.686 4.686-12.284 4.686-16.971 0l-104-104c-4.686-4.686-4.686-12.284 0-16.971l16.877-16.877c4.723-4.723 12.393-4.681 17.064.094L488 375.465V152H284.024a11.996 11.996 0 0 1-8.485-3.515l-24-24c-7.56-7.56-2.206-20.485 8.485-20.485H512c13.255 0 24 10.745 24 24v247.465l54.545-55.762c4.671-4.775 12.341-4.817 17.064-.094l16.877 16.877c4.686 4.686 4.686 12.284-.001 16.97zm-260.024 10.059a12.002 12.002 0 0 0-8.485-3.515H152V136.535l54.545 55.762c4.671 4.775 12.341 4.817 17.064.094l16.877-16.877c4.686-4.686 4.686-12.284 0-16.971l-104-104c-4.686-4.686-12.284-4.686-16.971 0l-104 104c-4.686 4.686-4.686 12.284 0 16.971l16.877 16.877c4.723 4.723 12.393 4.681 17.064-.094L104 136.535V384c0 13.255 10.745 24 24 24h251.976c10.691 0 16.045-12.926 8.485-20.485l-24-24z"] };
var faRetweetAlt = { prefix: 'far', iconName: 'retweet-alt', icon: [640, 512, [], "f361", "M388.461 387.515c7.56 7.56 2.206 20.485-8.485 20.485H128c-13.255 0-24-10.745-24-24V171.187l-72.162-.001c-10.683-.001-16.022-12.949-8.485-20.485l96.156-96.156c4.686-4.686 12.284-4.687 16.971 0l96.16 96.16c7.58 7.58 2.14 20.485-8.485 20.485L152 171.188V360h203.976c3.183 0 6.235 1.264 8.485 3.515l24 24zm219.701-46.7L536 340.813V128c0-13.255-10.745-24-24-24H260.024c-10.691 0-16.045 12.926-8.485 20.485l24 24a12.002 12.002 0 0 0 8.485 3.515H488v188.812l-72.154-.001c-10.625 0-16.066 12.905-8.485 20.485l96.16 96.16c4.686 4.687 12.285 4.686 16.971 0l96.156-96.156c7.535-7.536 2.197-20.485-8.486-20.485z"] };
var faRoad = { prefix: 'far', iconName: 'road', icon: [576, 512, [], "f018", "M246.7 435.2l7.2-104c.4-6.3 5.7-11.2 12-11.2h44.9c6.3 0 11.5 4.9 12 11.2l7.2 104c.5 6.9-5 12.8-12 12.8h-59.3c-6.9 0-12.4-5.9-12-12.8zM267.6 288h41.5c5.8 0 10.4-4.9 10-10.7l-5.2-76c-.4-5.2-4.7-9.3-10-9.3h-31c-5.3 0-9.6 4.1-10 9.3l-5.2 76c-.5 5.8 4.1 10.7 9.9 10.7zm6.2-120H303c4.6 0 8.3-3.9 8-8.6l-2.8-40c-.3-4.2-3.8-7.4-8-7.4h-23.7c-4.2 0-7.7 3.3-8 7.4l-2.8 40c-.2 4.7 3.4 8.6 8.1 8.6zm2.8-72h23.5c3.5 0 6.2-2.9 6-6.4l-1.4-20c-.2-3.1-2.8-5.6-6-5.6H278c-3.2 0-5.8 2.4-6 5.6l-1.4 20c-.2 3.5 2.5 6.4 6 6.4zM12 448h65c5.4 0 10.2-3.6 11.6-8.9l99.5-367.6c1-3.8-1.8-7.6-5.8-7.6h-28.1c-2.4 0-4.6 1.5-5.6 3.7L.9 431.5C-2.3 439.4 3.5 448 12 448zm487.7 0h65c8.5 0 14.3-8.6 11.1-16.5L428 67.7c-.9-2.3-3.1-3.7-5.6-3.7h-28.1c-4 0-6.8 3.8-5.8 7.6L488 439.2c1.5 5.2 6.3 8.8 11.7 8.8z"] };
var faRocket = { prefix: 'far', iconName: 'rocket', icon: [512, 512, [], "f135", "M512 112c0-36.8-.8-47.2-11-89.1-1.4-5.8-5.9-10.3-11.7-11.8C451.4 1.8 440 0 400 0c-68.3 0-127.4 39.5-177 96H96c-15.2 0-29 8.6-35.8 22.1l-56 112C-9 256.7 10.3 288 40.1 288h66.3c-6.7 15-12.9 29.8-18.6 44.1-2.4 5.9-1 12.7 3.6 17.2l71.3 71.3c4.5 4.5 11.3 5.9 17.2 3.6 14.3-5.7 29.1-11.9 44.1-18.6v66.3c0 29.7 31.3 49.1 57.9 35.8l112-56c13.6-6.8 22.1-20.6 22.1-35.8V289c56.5-49.6 96-108.7 96-177zM53 240l48-96h84.7c-21.1 30.3-39.9 63.1-56.6 96H53zm87.1 90.2C196.8 191.1 293 48 400.1 48c22.6 0 34.7 0 58.8 5.2 5.1 24 5.1 36.2 5.1 58.8 0 107.1-143.1 203.2-282.2 259.9l-41.7-41.7zM368 411l-96 48v-76.2c32.9-16.6 65.7-35.5 96-56.6V411zm0-315c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z"] };
var faRss = { prefix: 'far', iconName: 'rss', icon: [448, 512, [], "f09e", "M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"] };
var faRssSquare = { prefix: 'far', iconName: 'rss-square', icon: [448, 512, [], "f143", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-218-88c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm93.566 30.405c-4.774-88.343-75.534-159.193-163.971-163.971-5.22-.282-9.595 3.912-9.595 9.14v27.468c0 4.808 3.709 8.841 8.507 9.153 63.904 4.162 115.127 55.258 119.298 119.298.313 4.798 4.345 8.507 9.153 8.507h27.468c5.228 0 9.422-4.375 9.14-9.595zm82.428.165c-4.796-133.612-112.3-241.744-246.564-246.564-5.159-.185-9.43 3.983-9.43 9.146v27.467c0 4.929 3.906 8.94 8.83 9.142 109.245 4.479 196.93 92.181 201.408 201.408.202 4.925 4.213 8.83 9.142 8.83h27.467c5.164.001 9.332-4.27 9.147-9.429z"] };
var faRubleSign = { prefix: 'far', iconName: 'ruble-sign', icon: [384, 512, [], "f158", "M243.128 314.38C324.987 314.38 384 257.269 384 172.238S324.987 32 243.128 32H76c-6.627 0-12 5.373-12 12v215.807H12c-6.627 0-12 5.373-12 12v30.572c0 6.627 5.373 12 12 12h52V352H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h52v68c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-68h180c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H128v-37.62h115.128zM128 86.572h105.61c53.303 0 86.301 31.728 86.301 85.666 0 53.938-32.998 87.569-86.935 87.569H128V86.572z"] };
var faRupeeSign = { prefix: 'far', iconName: 'rupee-sign', icon: [320, 512, [], "f156", "M308 80c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v31.659c0 6.627 5.373 12 12 12h93.61c39.065 0 67.203 17.4 79.458 48.341H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h179.59c-3.43 49.738-35.677 80.341-86.615 80.341H12c-6.627 0-12 5.373-12 12v34.974c0 3.495 1.524 6.816 4.173 9.096l182.094 156.685a11.996 11.996 0 0 0 7.827 2.904h61.326c11.13 0 16.263-13.837 7.827-21.096L101.818 320h13.31c79.002 0 136.718-54.257 140.65-136H308c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-56.354c-5.067-21.636-14.409-40.497-27.202-56H308z"] };
var faSave = { prefix: 'far', iconName: 'save', icon: [448, 512, [], "f0c7", "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"] };
var faScanner = { prefix: 'far', iconName: 'scanner', icon: [640, 512, [], "f488", "M632 64H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8zm0-64H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 160H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 192H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM368 64H112C50.1 64 0 114.1 0 176c0 50.3 33.3 92.3 78.9 106.5L6.4 408C-6.9 431 1 460.3 24 473.6l55.4 32c7.6 4.4 15.8 6.4 24 6.4 16.6 0 32.7-8.6 41.6-24l60-104h67c26.5 0 48-21.5 48-48v-48h48c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM103.4 464L48 432l83.1-144H205L103.4 464zM288 336c0 8.8-7.2 16-16 16h-48.5l36.9-64H288v48zm48-96H112c-35.3 0-64-28.7-64-64s28.7-64 64-64h224v128zm296 208H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"] };
var faScannerKeyboard = { prefix: 'far', iconName: 'scanner-keyboard', icon: [576, 512, [], "f489", "M400 64H16C7.2 64 0 71.2 0 80v182.6c0 8.5 3.4 16.6 9.4 22.6L32 307.9V464c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V307.9l22.6-22.6c6-6 9.4-14.1 9.4-22.6V80c0-8.8-7.2-16-16-16zm-32 192l-32 32v176H80V288l-32-32V112h320v144zM184 368h-64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm112 0h-64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-112-96h-64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm112 0h-64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-184-48h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zM256 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v24h64V8zm64 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V8zm248-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zM408 0h-48c-4.4 0-8 3.6-8 8v24h64V8c0-4.4-3.6-8-8-8zm64 0h-16c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8z"] };
var faScannerTouchscreen = { prefix: 'far', iconName: 'scanner-touchscreen', icon: [576, 512, [], "f48a", "M400 64H16C7.2 64 0 71.2 0 80v182.6c0 8.5 3.4 16.6 9.4 22.6L32 307.9V464c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V307.9l22.6-22.6c6-6 9.4-14.1 9.4-22.6V80c0-8.8-7.2-16-16-16zm-32 192l-32 32v176H80V288l-32-32V112h320v144zM144 416h128c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zM256 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v24h64V8zm64 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V8zm248-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm-96 0h-16c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm-64 0h-48c-4.4 0-8 3.6-8 8v24h64V8c0-4.4-3.6-8-8-8z"] };
var faScrubber = { prefix: 'far', iconName: 'scrubber', icon: [496, 512, [], "f2f8", "M248 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S48 366.5 48 256 137.5 56 248 56m0-48C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 184c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"] };
var faSearch = { prefix: 'far', iconName: 'search', icon: [512, 512, [], "f002", "M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"] };
var faSearchMinus = { prefix: 'far', iconName: 'search-minus', icon: [512, 512, [], "f010", "M312 196v24c0 6.6-5.4 12-12 12H116c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h184c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z"] };
var faSearchPlus = { prefix: 'far', iconName: 'search-plus', icon: [512, 512, [], "f00e", "M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z"] };
var faServer = { prefix: 'far', iconName: 'server', icon: [512, 512, [], "f233", "M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 208v96a47.758 47.758 0 0 1-6.438 24A47.758 47.758 0 0 1 512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 304v-96a47.758 47.758 0 0 1 6.438-24A47.758 47.758 0 0 1 0 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"] };
var faShare = { prefix: 'far', iconName: 'share', icon: [576, 512, [], "f064", "M561.938 190.06L385.94 14.107C355.79-16.043 304 5.327 304 48.047v80.703C166.04 132.9 0 159.68 0 330.05c0 73.75 38.02 134.719 97.63 173.949 37.12 24.43 85.84-10.9 72.19-54.46C145.47 371.859 157.41 330.2 304 321.66v78.28c0 42.64 51.73 64.15 81.94 33.94l175.997-175.94c18.751-18.74 18.751-49.14.001-67.88zM352 400V272.09c-164.521 1.79-277.44 33.821-227.98 191.61C88 440 48 397.01 48 330.05c0-142.242 160.819-153.39 304-154.02V48l176 176-176 176z"] };
var faShareAll = { prefix: 'far', iconName: 'share-all', icon: [640, 512, [], "f367", "M497.94 206.06l-160-159.96C307.89 16.04 256 37.16 256 80.04v72.73C127.16 157.36 0 185.98 0 328.38c0 63.78 27.85 108.41 78.46 143.11 36.89 25.28 86.27-9.68 73.1-53.43-17.51-58.18-13.74-84.23 104.44-89.17v71.08c0 42.92 51.92 63.96 81.94 33.94l160-159.97c18.75-18.74 18.75-49.14 0-67.88zM304 400V280c-137.571 0-239.402 15.753-198.4 152C76.79 412.25 48 384.18 48 328.38 48 206.513 183.384 200 304 200V80l160 160-160 160zm321.941-126.059l-160 159.967c-20.37 20.37-50.817 17.225-68.291-.306L592 240 397.652 46.407c17.468-17.53 47.9-20.699 68.29-.31l160 159.962c18.744 18.745 18.744 49.137-.001 67.882z"] };
var faShareAlt = { prefix: 'far', iconName: 'share-alt', icon: [448, 512, [], "f1e0", "M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96a95.942 95.942 0 0 1 4.438-28.924l-98.337-61.46C144.887 341.966 121.616 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c25.616 0 48.887 10.034 66.101 26.385l98.337-61.461A95.942 95.942 0 0 1 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-25.616 0-48.887-10.034-66.101-26.385l-98.337 61.461c5.917 18.75 5.922 39.083 0 57.848l98.337 61.461C303.113 330.034 326.384 320 352 320c53.019 0 96 42.981 96 96zM352 48c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48M96 208c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48m256 160c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48"] };
var faShareAltSquare = { prefix: 'far', iconName: 'share-alt-square', icon: [448, 512, [], "f1e1", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-58-96c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-2.007.138-3.981.377-5.923l-69.131-34.565A47.768 47.768 0 0 1 144 304c-26.51 0-48-21.49-48-48s21.49-48 48-48a47.762 47.762 0 0 1 27.246 8.489l69.131-34.565A48.461 48.461 0 0 1 240 176c0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48c-12.941 0-24.677-5.131-33.31-13.457l-64.54 32.27a47.935 47.935 0 0 1 0 26.374l64.54 32.27C263.323 293.13 275.059 288 288 288c26.51 0 48 21.49 48 48z"] };
var faShareSquare = { prefix: 'far', iconName: 'share-square', icon: [576, 512, [], "f14d", "M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"] };
var faShekelSign = { prefix: 'far', iconName: 'shekel-sign', icon: [384, 512, [], "f20b", "M128 88H64v380c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V44c0-6.627 5.373-12 12-12h125.429c81.859 0 140.872 56.306 140.872 143.029v188.969c0 6.627-5.373 12-12 12l-28 .002c-13.255.001-24.001-10.745-24.001-24V175.033C214.301 120.234 181.303 88 128 88zm244-56h-40c-6.627 0-12 5.373-12 12v380h-64c-53.303 0-86.301-32.235-86.301-87.033V160c0-13.255-10.746-24.001-24.001-24l-28 .002c-6.627 0-12 5.373-12 12v188.969C105.698 423.695 164.711 480 246.57 480H372c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z"] };
var faShield = { prefix: 'far', iconName: 'shield', icon: [512, 512, [], "f132", "M237.5 508.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3zM256 48l192 80c0 173.8-98.4 297-192 336-97.5-40.6-192-166.7-192-336l192-80z"] };
var faShieldAlt = { prefix: 'far', iconName: 'shield-alt', icon: [512, 512, [], "f3ed", "M113.12 159.533L256 100v309.65c-77.73-47.559-134.486-133.931-142.88-250.117zM496 128c0 221.282-135.934 344.645-221.539 380.308a48 48 0 0 1-36.923 0C130.495 463.713 16 326.487 16 128a48 48 0 0 1 29.539-44.308l192-80a48 48 0 0 1 36.923 0l192 80A48 48 0 0 1 496 128zm-48 0L255.999 48 64 128c0 169.278 94.451 295.361 191.998 335.999C349.602 425.017 448 301.804 448 128z"] };
var faShieldCheck = { prefix: 'far', iconName: 'shield-check', icon: [512, 512, [], "f2f7", "M466.461 83.692l-192-80a48 48 0 0 0-36.923 0l-192 80A48 48 0 0 0 16 128c0 198.487 114.495 335.713 221.539 380.308a48 48 0 0 0 36.923 0C360.066 472.645 496 349.282 496 128a48 48 0 0 0-29.539-44.308zM255.998 463.999C158.451 423.361 64 297.278 64 128l191.999-80L448 128c0 173.804-98.398 297.017-192.002 335.999zM403.82 190.276L231.232 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.718-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277L364.382 150.52c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.668 4.705 4.637 12.303-.068 16.97z"] };
var faShip = { prefix: 'far', iconName: 'ship', icon: [640, 512, [], "f21a", "M484.843 379.396l74.163-62.753c28.358-23.994 19.811-69.847-15.304-82.002L488 215.359V88c0-13.255-10.745-24-24-24h-48V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-48c-13.255 0-24 10.745-24 24v127.359L96.299 234.64c-35.103 12.151-43.671 58-15.304 82.002l74.163 62.753C131.794 430.787 84.576 464 12 464c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12 61.682 0 114.334-17.015 157.164-66.492C175.604 483.207 208.493 512 248 512h144c39.507 0 72.396-28.793 78.836-66.492C513.949 495.312 566.824 512 628 512c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12-71.98 0-119.548-32.672-143.157-84.604zM264 40h112v24H264V40zm-64 72h240v86.744l-104.299-36.103a48 48 0 0 0-31.403 0L200 198.744V112zm224 320c0 17.673-14.327 32-32 32H248c-17.673 0-32-14.327-32-32v-64l-104-88 208-72 208 72-104 88v64z"] };
var faShippingFast = { prefix: 'far', iconName: 'shipping-fast', icon: [640, 512, [], "f48b", "M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H120C89.1 0 64 25.1 64 56v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H112V56c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v312H242.7c-16.6-28.6-47.2-48-82.7-48-17.6 0-33.8 5.1-48 13.3V288H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256-320h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8zm24-56c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240z"] };
var faShippingTimed = { prefix: 'far', iconName: 'shipping-timed', icon: [640, 512, [], "f48c", "M208 88c-57.4 0-104 46.6-104 104s46.6 104 104 104 104-46.6 104-104S265.4 88 208 88zm48 128c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h24c4.4 0 8 3.6 8 8v16zm368 152h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V256h144v107.1z"] };
var faShoppingBag = { prefix: 'far', iconName: 'shopping-bag', icon: [448, 512, [], "f290", "M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"] };
var faShoppingBasket = { prefix: 'far', iconName: 'shopping-basket', icon: [576, 512, [], "f291", "M564 192h-72.902L362.286 40.457c-8.583-10.099-23.729-11.327-33.83-2.743-10.099 8.584-11.327 23.731-2.742 33.83L428.102 192H147.899L250.287 71.543c8.584-10.099 7.356-25.246-2.743-33.83s-25.246-7.355-33.83 2.743L84.901 192H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.667l27.584 198.603C61.546 462.334 81.836 480 105.794 480h364.412c23.958 0 44.248-17.666 47.544-41.397L545.333 240H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zm-93.794 240H105.794L79.127 240h417.745l-26.666 192zM312 296v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm112 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm-224 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24z"] };
var faShoppingCart = { prefix: 'far', iconName: 'shopping-cart', icon: [576, 512, [], "f07a", "M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"] };
var faShower = { prefix: 'far', iconName: 'shower', icon: [512, 512, [], "f2cc", "M358.545 87.515l-8.325 8.325c-32.77-31.98-80.45-39.83-120.53-23.54C205.38 47.45 171.5 32 134.08 32 60.33 32 .32 92 .32 165.76V480h48V166.833c0-47.291 37.83-86.484 85.119-86.831 21.329-.157 40.899 7.519 56.001 20.318-39.97 43.55-39.17 111.32 2.4 153.9l-8.325 8.325c-4.686 4.686-4.686 12.284 0 16.971l16.969 16.969c4.686 4.686 12.284 4.686 16.971 0l175.029-175.029c4.686-4.686 4.686-12.284 0-16.971l-16.969-16.969c-4.686-4.687-12.284-4.687-16.97-.001zM225.79 220.27c-24.133-25.161-23.527-65.096.96-89.52 24.621-24.621 64.496-24.962 89.52-.96l-90.48 90.48zM368 192c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm64 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm64-32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-160 32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm48 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zm80-16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-160 32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm64 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm64-32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-96 64c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm64-32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-96 32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm64 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-32 32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm-32 32c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"] };
var faShuttlecock = { prefix: 'far', iconName: 'shuttlecock', icon: [512, 512, [], "f45b", "M472 192h-40v-72c0-22.1-17.9-40-40-40h-72V40c0-22.1-17.9-40-40-40h-34.9c-15.5 0-29.8 9.1-36.3 23.1L95.5 266.5 31.1 331c-41.4 41.4-41.4 108.6 0 150 41.3 41.3 108.4 41.5 150 0l64.5-64.5 243.3-113.3c14.1-6.5 23.2-20.8 23.2-36.3V232c-.1-22.1-18-40-40.1-40zm-88-64v62.4l-91.2 28.8 28.8-91.2H384zM85.1 344.8l20.9-20.9 82.1 82.1-20.9 20.9-82.1-82.1zM250.2 48H272v50.2l-62 36L250.2 48zm10.9 112l-26.3 83.1L164 314l-25.7-25.7 36.3-77.9 86.5-50.4zM65 447c-21.8-21.8-22.4-56.6-2.2-79.4l81.6 81.6c-23.8 21.1-58.2 19-79.4-2.2zm158.7-73.3L198 347.9l70.8-70.8 83.1-26.3-50.3 86.5-77.9 36.4zM464 261.8l-86.2 40.1 36-61.9H464v21.8z"] };
var faSignIn = { prefix: 'far', iconName: 'sign-in', icon: [512, 512, [], "f090", "M416 448h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zM167.1 83.5l-19.6 19.6c-4.8 4.8-4.7 12.5.2 17.1L260.8 230H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h248.8L147.7 391.7c-4.8 4.7-4.9 12.4-.2 17.1l19.6 19.6c4.7 4.7 12.3 4.7 17 0l164.4-164c4.7-4.7 4.7-12.3 0-17l-164.4-164c-4.7-4.6-12.3-4.6-17 .1z"] };
var faSignInAlt = { prefix: 'far', iconName: 'sign-in-alt', icon: [512, 512, [], "f2f6", "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z"] };
var faSignLanguage = { prefix: 'far', iconName: 'sign-language', icon: [448, 512, [], "f2a7", "M447.968 255.133l-4.288-133.396c-1.604-49.855-61.761-73.611-96.506-38.312L300.5 22.235C289.722 8.105 273.399.001 255.718 0c-15.73-.001-29.852 6.461-40.062 16.826-16.196-5.277-35.681-3.348-51.571 8.791-15.525 11.86-23.293 30.355-22.117 49.169-29.519 17.38-36.485 56.359-16.959 83.304-22.239 18.8-26.446 51.119-10.965 74.91H80.98c-34.451 0-60.542 30.699-55.98 64.658C10.133 307.768.372 324.66.01 343.911c-.373 19.9 9.473 37.389 24.458 47.814-4.932 34.305 21.154 63.764 53.932 65.221C79.42 487.494 104.228 512 134.857 512h92.056c11.567 0 23.14-1.371 34.397-4.075l68.976-16.568c27.794-6.676 47.183-31.78 47.183-60.318v-87.728l47.11-37.447c15.276-12.141 24.02-31.107 23.389-50.731zM135.341 439h53.394a9 9 0 0 0 9-9v-5a9 9 0 0 0-9-9H80.851c-20.723 0-21.385-32-.483-32h108.367a9 9 0 0 0 9-9v-5a9 9 0 0 0-9-9H56.974c-20.727 0-21.38-32-.484-32h132.245a9 9 0 0 0 9-9v-5a9 9 0 0 0-9-9H81.463c-20.723 0-21.385-32-.483-32h144.485a9 9 0 0 0 5.364-16.227l-26.645-19.779c-16.937-12.574 1.704-38.139 18.079-25.985l105.738 78.501c5.302 3.936 8.467 10.305 8.467 17.035V431.04c0 9.812-6.48 18.223-15.758 20.451l-68.977 16.567a106.362 106.362 0 0 1-24.821 2.941h-92.056C113.959 471 114.615 439 135.341 439zm47.162-324.812l65.475 85.837-10.951-8.13c-11.136-8.268-25.761-10.099-38.53-5.037l-40.029-52.479c-13.393-17.554 11.638-36.449 24.035-20.191zm-8.736 78.07l6.711 8.797c-10.24 14.405-9.998 33.834.025 47.945h-2.893l-28.474-37.33c-12.938-16.963 11.814-36.22 24.631-19.412zm168.998 78.138l-88.307-65.56a8.995 8.995 0 0 0 7.38-1.777l3.864-3.072a9.001 9.001 0 0 0 1.556-12.504L186.307 81.357c-13.39-17.555 11.64-36.449 24.036-20.191l81.248 106.517a9.007 9.007 0 0 0 6.045 3.473 8.993 8.993 0 0 0 6.711-1.886l3.865-3.072a9 9 0 0 0 1.557-12.504l-65.905-86.401C230.472 49.737 255.499 30.843 267.9 47.1l88.768 116.376c5.305 6.955 16.432 2.972 16.151-5.748l-1.081-33.614c-.698-21.683 30.294-21.819 30.963-1.061l4.289 133.396c.216 6.729-2.745 13.204-7.923 17.319l-37.885 30.114c-1.052-13.261-7.769-25.58-18.417-33.486z"] };
var faSignOut = { prefix: 'far', iconName: 'sign-out', icon: [512, 512, [], "f08b", "M96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96zm231.1 19.5l-19.6 19.6c-4.8 4.8-4.7 12.5.2 17.1L420.8 230H172c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h248.8L307.7 391.7c-4.8 4.7-4.9 12.4-.2 17.1l19.6 19.6c4.7 4.7 12.3 4.7 17 0l164.4-164c4.7-4.7 4.7-12.3 0-17l-164.4-164c-4.7-4.6-12.3-4.6-17 .1z"] };
var faSignOutAlt = { prefix: 'far', iconName: 'sign-out-alt', icon: [512, 512, [], "f2f5", "M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"] };
var faSignal = { prefix: 'far', iconName: 'signal', icon: [576, 512, [], "f012", "M20 384h24c6.6 0 12 5.4 12 12v104c0 6.6-5.4 12-12 12H20c-6.6 0-12-5.4-12-12V396c0-6.6 5.4-12 12-12zm116-36v152c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V348c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12zm128-80v232c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V268c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12zm128-112v344c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V156c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12zM520 12v488c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12z"] };
var faSitemap = { prefix: 'far', iconName: 'sitemap', icon: [640, 512, [], "f0e8", "M616 320h-48v-48c0-22.056-17.944-40-40-40H344v-40h48c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h48v40H112c-22.056 0-40 17.944-40 40v48H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24h-48v-40h176v40h-48c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V344c0-13.255-10.745-24-24-24zm-472 48v96H48v-96h96zm224 0v96h-96v-96h96zm-96-224V48h96v96h-96zm320 320h-96v-96h96v96z"] };
var faSlidersH = { prefix: 'far', iconName: 'sliders-h', icon: [576, 512, [], "f1de", "M576 252v8c0 6.6-5.4 12-12 12h-84v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24H12c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h404v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h84c6.6 0 12 5.4 12 12zM564 80H128V56c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24v24H12C5.4 80 0 85.4 0 92v8c0 6.6 5.4 12 12 12h52v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-24h436c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12zm0 320H288v-24c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v24H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h212v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-24h276c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12z"] };
var faSlidersHSquare = { prefix: 'far', iconName: 'sliders-h-square', icon: [448, 512, [], "f3f0", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zm-42-244v8c0 6.6-5.4 12-12 12H192v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24h-20c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h20v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h148c6.6 0 12 5.4 12 12zm0 128v8c0 6.6-5.4 12-12 12h-20v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h148v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h20c6.6 0 12 5.4 12 12z"] };
var faSlidersV = { prefix: 'far', iconName: 'sliders-v', icon: [448, 512, [], "f3f1", "M128 120v16c0 13.3-10.7 24-24 24H80v340c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V160H24c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h24V12c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v84h24c13.3 0 24 10.7 24 24zm136 232h-24V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v340h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h24v84c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-84h24c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24zm160-160h-24V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v180h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h24v244c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V256h24c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24z"] };
var faSlidersVSquare = { prefix: 'far', iconName: 'sliders-v-square', icon: [448, 512, [], "f3f2", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zM224 184v16c0 13.3-10.7 24-24 24h-24v148c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V224h-24c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h24v-20c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v20h24c13.3 0 24 10.7 24 24zm128 128v16c0 13.3-10.7 24-24 24h-24v20c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-20h-24c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h24V140c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v148h24c13.3 0 24 10.7 24 24z"] };
var faSmile = { prefix: 'far', iconName: 'smile', icon: [512, 512, [], "f118", "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm64 136c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059s-23.059-10.324-23.059-23.059v-.017C266.386 181.488 264 190.465 264 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm-128 0c-9.535 0-18.512 2.386-26.37 6.589h.017c12.735 0 23.059 10.324 23.059 23.059 0 12.735-10.324 23.059-23.059 23.059-12.735 0-23.059-10.324-23.059-23.059v-.017C138.386 181.488 136 190.465 136 200c0 30.928 25.072 56 56 56s56-25.072 56-56-25.072-56-56-56zm195.372 182.219c18.819-25.592-19.856-54.017-38.67-28.438-50.135 68.177-135.229 68.18-185.367 0-18.828-25.601-57.478 2.861-38.67 28.438 69.298 94.231 193.323 94.351 262.707 0z"] };
var faSmoking = { prefix: 'far', iconName: 'smoking', icon: [640, 512, [], "f48d", "M503.7 141.6C479.8 125 464 99.3 464 70.3V8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v66.4c0 43.7 24.6 81.6 60.3 106.7 22.4 15.7 35.7 41.2 35.7 68.6V280c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-30.3c0-43.3-21-83.4-56.3-108.1zm49.6-54.5c-5.7-3.8-9.3-10-9.3-16.8V8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v62.3c0 22 10.2 43.4 28.6 55.4 42.2 27.3 67.4 73.8 67.4 124V280c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-30.3c0-65.5-32.4-126.2-86.7-162.6zM632 352h-32c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm-80 0h-32c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm-96 0H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h408c13.2 0 24-10.8 24-24V376c0-13.2-10.8-24-24-24zm-24 112H224v-64h208v64z"] };
var faSnowflake = { prefix: 'far', iconName: 'snowflake', icon: [448, 512, [], "f2dc", "M438.237 355.927l-66.574-38.54 59.448-10.327c5.846-1.375 10.609-5.183 13.458-10.13 2.48-4.307 3.506-9.478 2.524-14.651-2.11-11.115-12.686-18.039-23.621-15.467l-85.423 31.115L255.914 256l82.136-41.926 85.423 31.115c10.936 2.572 21.512-4.352 23.621-15.467 2.111-11.115-5.046-22.209-15.981-24.781l-59.448-10.327 66.573-38.54c9.54-5.523 12.615-18.092 6.867-28.074-5.748-9.982-18.14-13.596-27.68-8.074l-66.574 38.54 20.805-56.787c3.246-10.782-2.758-22.542-13.413-26.268-10.654-3.725-21.922 1.997-25.168 12.779l-15.838 89.735-72.423 41.926V136l69.585-58.621c7.689-8.21 6.997-20.856-1.548-28.245-8.545-7.391-21.705-6.723-29.394 1.486l-38.644 46.46V20c0-11.046-9.318-20-20.813-20s-20.813 8.954-20.813 20v77.08l-38.644-46.46c-7.689-8.21-20.849-8.876-29.394-1.486-8.544 7.389-9.236 20.035-1.547 28.245L203.187 136v83.853l-72.423-41.926-15.838-89.736c-3.247-10.782-14.515-16.504-25.169-12.779-10.656 3.725-16.659 15.486-13.413 26.268l20.805 56.787-66.573-38.54c-9.54-5.523-21.933-1.908-27.68 8.074s-2.673 22.551 6.867 28.074l66.574 38.54-59.449 10.328C5.953 207.515-1.202 218.609.907 229.724c2.11 11.114 12.686 18.038 23.622 15.466l85.422-31.115L192.086 256l-82.136 41.926-85.423-31.115c-10.936-2.572-21.511 4.352-23.622 15.466-2.109 11.113 5.046 22.209 15.981 24.781l59.449 10.328-66.574 38.54C.223 361.449-2.852 374.018 2.896 384s18.14 13.597 27.68 8.074l66.574-38.54-20.805 56.786c-1.735 5.764-.828 11.805 2.02 16.751 2.48 4.307 6.433 7.784 11.392 9.517 10.655 3.725 21.923-1.997 25.169-12.779l15.838-89.736 72.423-41.926V376l-69.585 58.621c-7.69 8.21-6.997 20.855 1.547 28.245 8.544 7.388 21.705 6.723 29.394-1.487l38.644-46.46V492c0 11.046 9.318 20 20.813 20s20.813-8.954 20.813-20v-77.081l38.644 46.46c4.111 4.389 9.782 6.621 15.478 6.621 4.96 0 9.939-1.694 13.916-5.134 8.545-7.39 9.237-20.035 1.548-28.245L244.813 376v-83.853l72.423 41.926 15.838 89.736c3.246 10.782 14.514 16.504 25.168 12.779 10.653-3.726 16.659-15.487 13.412-26.268l-20.805-56.787 66.574 38.54c9.54 5.523 21.933 1.908 27.68-8.074 5.749-9.981 2.675-22.55-6.866-28.072z"] };
var faSort = { prefix: 'far', iconName: 'sort', icon: [320, 512, [], "f0dc", "M272 288H48.1c-42.6 0-64.2 51.7-33.9 81.9l111.9 112c18.7 18.7 49.1 18.7 67.9 0l112-112c30-30.1 8.7-81.9-34-81.9zM160 448L48 336h224L160 448zM48 224h223.9c42.6 0 64.2-51.7 33.9-81.9l-111.9-112c-18.7-18.7-49.1-18.7-67.9 0l-112 112C-16 172.2 5.3 224 48 224zM160 64l112 112H48L160 64z"] };
var faSortAlphaDown = { prefix: 'far', iconName: 'sort-alpha-down', icon: [384, 512, [], "f15d", "M156.718 404.24l-67.994 72.002c-4.732 5.01-12.713 5.014-17.448 0L3.283 404.24C-3.883 396.652 1.428 384 12.007 384H56V44c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v340h43.994c10.587 0 15.884 12.658 8.724 20.24zm105.853-188.933A12 12 0 0 1 251.036 224h-29.133c-8.22 0-14.007-8.078-11.362-15.861l57.097-168A11.999 11.999 0 0 1 278.999 32h35.894c5.139 0 9.708 3.273 11.362 8.139l57.097 168c2.645 7.783-3.141 15.861-11.362 15.861h-29.172a12 12 0 0 1-11.515-8.622l-8.793-29.977h-51.367l-8.572 29.906zm21.463-73.942h25.606l-8.822-30.655c-1.277-4.419-2.651-9.992-3.871-15.241-1.221 5.251-2.595 10.824-3.872 15.245l-9.041 30.651zm7.486 292.104c2.274-2.654 4.985-6.056 7.929-10.235l69.819-99.06a11.999 11.999 0 0 0 2.191-6.913V300c0-6.627-5.373-12-12-12H236.493c-6.627 0-12 5.373-12 12v22.61c0 6.627 5.373 12 12 12h59.682c1.652 0 3.213-.03 4.655-.078-2.274 2.653-4.984 6.055-7.927 10.233l-69.56 98.542a12.001 12.001 0 0 0-2.196 6.92V468c0 6.627 5.373 12 12 12h127.599c6.627 0 12-5.373 12-12v-22.61c0-6.627-5.373-12-12-12h-64.571c-1.652 0-3.213.031-4.655.079z"] };
var faSortAlphaUp = { prefix: 'far', iconName: 'sort-alpha-up', icon: [448, 512, [], "f15e", "M35.282 107.76l67.994-72.002c4.732-5.01 12.713-5.014 17.448 0l67.993 72.002c7.166 7.587 1.856 20.24-8.724 20.24H136v340c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V128H44.006c-10.587 0-15.884-12.658-8.724-20.24zm266.342 107.547A12 12 0 0 1 290.089 224h-29.133c-8.22 0-14.007-8.078-11.362-15.861l57.097-168A12 12 0 0 1 318.053 32h35.894c5.139 0 9.708 3.273 11.362 8.139l57.097 168c2.645 7.783-3.141 15.861-11.362 15.861h-29.172a12 12 0 0 1-11.515-8.622l-8.793-29.977h-51.367l-8.573 29.906zm21.463-73.942h25.606l-8.822-30.655c-1.277-4.419-2.651-9.992-3.871-15.241-1.221 5.251-2.595 10.824-3.872 15.245l-9.041 30.651zm7.486 292.104c2.274-2.654 4.985-6.056 7.929-10.235l69.819-99.06a11.999 11.999 0 0 0 2.191-6.913V300c0-6.627-5.373-12-12-12H275.546c-6.627 0-12 5.373-12 12v22.61c0 6.627 5.373 12 12 12h59.682c1.652 0 3.213-.03 4.655-.078-2.274 2.653-4.984 6.055-7.927 10.233l-69.56 98.542a12.001 12.001 0 0 0-2.196 6.92V468c0 6.627 5.373 12 12 12h127.6c6.627 0 12-5.373 12-12v-22.61c0-6.627-5.373-12-12-12h-64.571c-1.653 0-3.214.031-4.656.079z"] };
var faSortAmountDown = { prefix: 'far', iconName: 'sort-amount-down', icon: [512, 512, [], "f160", "M156.718 404.24l-67.994 72.002c-4.732 5.01-12.713 5.014-17.448 0L3.283 404.24C-3.883 396.652 1.428 384 12.007 384H56V44c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v340h43.994c10.587 0 15.884 12.658 8.724 20.24zM236 136h264c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H236c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12zm-12 84v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12zm0 192v-24c0-6.627 5.373-12 12-12h72c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12zm0-96v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12z"] };
var faSortAmountUp = { prefix: 'far', iconName: 'sort-amount-up', icon: [512, 512, [], "f161", "M3.282 107.76l67.994-72.002c4.732-5.01 12.713-5.014 17.448 0l67.993 72.002c7.166 7.587 1.856 20.24-8.724 20.24H104v340c0 6.627-5.373 12-12 12H68c-6.627 0-12-5.373-12-12V128H12.006c-10.587 0-15.884-12.658-8.724-20.24zM236 136h264c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H236c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12zm-12 84v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12zm0 192v-24c0-6.627 5.373-12 12-12h72c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12zm0-96v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12z"] };
var faSortDown = { prefix: 'far', iconName: 'sort-down', icon: [320, 512, [], "f0dd", "M272 288H48.1c-42.6 0-64.2 51.7-33.9 81.9l111.9 112c18.7 18.7 49.1 18.7 67.9 0l112-112c30-30.1 8.7-81.9-34-81.9zM160 448L48 336h224L160 448z"] };
var faSortNumericDown = { prefix: 'far', iconName: 'sort-numeric-down', icon: [384, 512, [], "f162", "M372.777 189.39V212c0 6.627-5.373 12-12 12H254.279c-6.627 0-12-5.373-12-12v-22.61c0-6.627 5.373-12 12-12h27.114c0-78.595-.004-73.12.008-74.838-.812.812-.633.622-6.007 5.496-4.856 4.405-12.349 4.097-16.827-.691l-15.159-16.209c-4.522-4.836-4.274-12.42.556-16.95l41.534-38.952a11.999 11.999 0 0 1 8.209-3.247h27.699c6.627 0 12 5.373 12 12v133.39h27.372c6.627.001 11.999 5.374 11.999 12.001zM284.975 483c-11.613 0-23.725-1.517-34.859-5.399-6.062-2.114-9.276-8.744-7.356-14.87l7.346-23.445c1.977-6.311 8.665-9.976 14.988-8.039 19.678 6.026 38.351 2.245 48.497-16.132-42.424 12.81-82.239-18.582-82.239-64.153 0-31.977 23.389-65.962 66.734-65.962 42.082 0 78.561 32.838 78.561 91.93 0 55.366-34.885 106.07-91.672 106.07zm-1.398-132.294c0 11.116 6.244 22.993 23.766 22.993 9.97 0 15.024-2.373 15.024-7.053 0-20.139-14.142-32.506-24.281-32.506-9.424 0-14.509 8.535-14.509 16.566zM147.994 384H104V44c0-6.627-5.373-12-12-12H68c-6.627 0-12 5.373-12 12v340H12.007c-10.58 0-15.89 12.652-8.724 20.24l67.993 72.002c4.735 5.014 12.716 5.01 17.448 0l67.994-72.002c7.16-7.582 1.863-20.24-8.724-20.24z"] };
var faSortNumericUp = { prefix: 'far', iconName: 'sort-numeric-up', icon: [384, 512, [], "f163", "M372.777 189.39V212c0 6.627-5.373 12-12 12H254.279c-6.627 0-12-5.373-12-12v-22.61c0-6.627 5.373-12 12-12h27.114c0-78.595-.004-73.12.008-74.838-.812.812-.633.622-6.007 5.496-4.856 4.405-12.349 4.097-16.827-.691l-15.159-16.209c-4.522-4.836-4.274-12.42.556-16.95l41.534-38.952a11.999 11.999 0 0 1 8.209-3.247h27.699c6.627 0 12 5.373 12 12v133.39h27.372c6.627.001 11.999 5.374 11.999 12.001zM284.975 483c-11.613 0-23.725-1.517-34.859-5.399-6.062-2.114-9.276-8.744-7.356-14.87l7.346-23.445c1.977-6.311 8.665-9.976 14.988-8.039 19.678 6.026 38.351 2.245 48.497-16.132-42.424 12.81-82.239-18.582-82.239-64.153 0-31.977 23.389-65.962 66.734-65.962 42.082 0 78.561 32.838 78.561 91.93 0 55.366-34.885 106.07-91.672 106.07zm-1.398-132.294c0 11.116 6.244 22.993 23.766 22.993 9.97 0 15.024-2.373 15.024-7.053 0-20.139-14.142-32.506-24.281-32.506-9.424 0-14.509 8.535-14.509 16.566zM12.006 128H56v340c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V128h43.993c10.58 0 15.89-12.652 8.724-20.24L88.724 35.759c-4.735-5.014-12.716-5.01-17.448 0L3.282 107.76c-7.16 7.582-1.863 20.24 8.724 20.24z"] };
var faSortUp = { prefix: 'far', iconName: 'sort-up', icon: [320, 512, [], "f0de", "M48 224h223.9c42.6 0 64.2-51.7 33.9-81.9l-111.9-112c-18.7-18.7-49.1-18.7-67.9 0l-112 112C-16 172.2 5.3 224 48 224zM160 64l112 112H48L160 64z"] };
var faSpaceShuttle = { prefix: 'far', iconName: 'space-shuttle', icon: [640, 512, [], "f197", "M456 168C248 168 266.989 32 96 32c-44.665 0-66.4 24.39-66.4 64v56C9.056 152 0 162.568 0 176v48c0 12.834 8.412 24 29.6 24v16C9.056 264 0 274.568 0 288v48c0 12.834 8.412 24 29.6 24v56c0 39.602 21.727 64 66.4 64 171.029 0 152-136 360-136 96 0 184-33.5 184-88 0-51-88-88-184-88zM115.417 80C181.277 80 240 144 288 168H144c-13.999-9.503-31.155-16-48-16V80h19.417zm0 352H96v-72c16.845 0 34.001-6.497 48-16h144c-48 24-97.487 88-172.583 88zM456 304H168.786c9.396-29.293 9.843-65.315 0-96H456c39.888 0 76.728 3.778 103.734 16 .09.041.09 63.959 0 64-27.006 12.222-63.846 16-103.734 16zm24.242-11.429a8 8 0 0 1-8-8v-57.143a8 8 0 0 1 8-8c42.384.001 42.303 73.143 0 73.143z"] };
var faSpade = { prefix: 'far', iconName: 'spade', icon: [512, 512, [], "f2f4", "M256 48s174.6 167.3 192.2 192c10 14.1 15.9 31.4 15.8 50.1-.3 47.1-39.5 84.8-86.6 84.8h-.8c-38.1-.3-48.9-6-78.4-36.2-1.2-1.3-2.7-1.8-4.2-1.8-3.1 0-6 2.4-6 6V360c0 37.7-2.3 48.8 24.7 82.9 6.8 8.5.7 21.1-10.2 21.1h-93.2c-10.9 0-16.9-12.6-10.2-21.1 27-34 24.7-45.2 24.7-82.9v-17.1c0-3.6-3-6-6-6-1.5 0-3 .6-4.2 1.8-29.2 29.9-40.1 35.8-78.3 36.2h-.8c-47.2 0-86.4-37.8-86.6-85.1-.1-18.7 5.9-36 16-50.1C81.6 215.2 256 48 256 48m0-48c-12 0-23.9 4.5-33.2 13.4-.4.4-44.3 42.5-89.8 87C38.5 193 29.4 205.6 25 211.7c-16.5 22.9-25.1 50-25 78.2.3 73.3 60.6 132.9 134.6 132.9h1.2c7-.1 13.6-.3 20-.8-3.9 7.2-6.3 15.2-7.1 23.5-1 11 1 22.1 5.9 32 4.8 10 12.2 18.4 21.4 24.5 9.9 6.5 21.5 10 33.5 10h93.2c12 0 23.6-3.5 33.5-10 9.2-6.1 16.6-14.5 21.4-24.5 4.8-10 6.8-21 5.9-32-.7-8.3-3.2-16.2-7.1-23.5 6.4.5 13 .8 20 .8h1.2c35.4 0 68.9-13.6 94.3-38.3 25.7-25 40-58.5 40.3-94.1.2-28.2-8.3-55.3-24.7-78.3-4.4-6.1-13.5-18.9-108.2-111.7-45.5-44.6-89.4-86.7-89.9-87.1C279.9 4.4 268 0 256 0z"] };
var faSpinner = { prefix: 'far', iconName: 'spinner', icon: [512, 512, [], "f110", "M296 48c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-40 376c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm248-168c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zm-416 0c0-22.091-17.909-40-40-40S8 233.909 8 256s17.909 40 40 40 40-17.909 40-40zm20.922-187.078c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40c0-22.092-17.909-40-40-40zm294.156 294.156c-22.091 0-40 17.909-40 40s17.909 40 40 40c22.092 0 40-17.909 40-40s-17.908-40-40-40zm-294.156 0c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40z"] };
var faSpinnerThird = { prefix: 'far', iconName: 'spinner-third', icon: [512, 512, [], "f3f4", "M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"] };
var faSquare = { prefix: 'far', iconName: 'square', icon: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"] };
var faSquareFull = { prefix: 'far', iconName: 'square-full', icon: [512, 512, [], "f45c", "M0 0v512h512V0H0zm464 464H48V48h416v416z"] };
var faStar = { prefix: 'far', iconName: 'star', icon: [576, 512, [], "f005", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"] };
var faStarExclamation = { prefix: 'far', iconName: 'star-exclamation', icon: [576, 512, [], "f2f3", "M252.5 184.6c-.4-4.6 3.3-8.6 8-8.6h55.1c4.7 0 8.3 4 8 8.6l-6.8 88c-.3 4.2-3.8 7.4-8 7.4h-41.5c-4.2 0-7.7-3.2-8-7.4l-6.8-88zM288 296c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm257.9-70L440.1 329l25 145.5c4.5 26.2-23.1 46-46.4 33.7L288 439.6l-130.7 68.7c-23.4 12.3-50.9-7.6-46.4-33.7l25-145.5L30.1 226c-19-18.5-8.5-50.8 17.7-54.6L194 150.2l65.3-132.4c11.8-23.8 45.7-23.7 57.4 0L382 150.2l146.1 21.2c26.2 3.8 36.7 36.1 17.8 54.6zm-56.8-11.7l-139-20.2-62.1-126L225.8 194l-139 20.2 100.6 98-23.7 138.4L288 385.3l124.3 65.4-23.7-138.4 100.5-98z"] };
var faStarHalf = { prefix: 'far', iconName: 'star-half', icon: [576, 512, [], "f089", "M288 385.3l-124.3 65.4 23.7-138.4-100.6-98 139-20.2 62.2-126V0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6v-54.3z"] };
var faStepBackward = { prefix: 'far', iconName: 'step-backward', icon: [448, 512, [], "f048", "M76 480h24c6.6 0 12-5.4 12-12V285l219.5 187.6c20.6 17.2 52.5 2.8 52.5-24.6V64c0-27.4-31.9-41.8-52.5-24.6L112 228.1V44c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v424c0 6.6 5.4 12 12 12zM336 98.5v315.1L149.3 256.5 336 98.5z"] };
var faStepForward = { prefix: 'far', iconName: 'step-forward', icon: [448, 512, [], "f051", "M372 32h-24c-6.6 0-12 5.4-12 12v183L116.5 39.4C95.9 22.3 64 36.6 64 64v384c0 27.4 31.9 41.8 52.5 24.6L336 283.9V468c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12zM112 413.5V98.4l186.7 157.1-186.7 158z"] };
var faStethoscope = { prefix: 'far', iconName: 'stethoscope', icon: [512, 512, [], "f0f1", "M120 334v18c0 88.2 75.4 160 168 160s168-71.8 168-160v-99.7c32.3-10.1 55.7-40.2 56-75.7.3-43.4-34.6-79.6-78.1-80.6-45-1-81.9 35.2-81.9 80 0 35.8 23.5 66.1 56 76.3V352c0 61.8-53.8 112-120 112s-120-50.2-120-112v-18c68-11.5 120-70.8 120-142V27.5c0-5.6-3.9-10.5-9.4-11.7L208.9.3c-6.5-1.4-12.9 2.6-14.3 9.1l-5.2 23.4c-1.4 6.5 2.6 12.9 9.1 14.3l41.5 9.2v134.4c0 52.9-42.2 96.7-95.1 97.2-53.3.6-96.9-42.6-96.9-95.9V56.4l41.5-9.2c6.5-1.4 10.5-7.8 9.1-14.3L93.4 9.4C92 2.9 85.5-1.1 79.1.3L9.4 15.8C3.9 17 0 21.9 0 27.5V192c0 71.2 52 130.5 120 142zm312-190c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32z"] };
var faStickyNote = { prefix: 'far', iconName: 'sticky-note', icon: [448, 512, [], "f249", "M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"] };
var faStop = { prefix: 'far', iconName: 'stop', icon: [448, 512, [], "f04d", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"] };
var faStopCircle = { prefix: 'far', iconName: 'stop-circle', icon: [512, 512, [], "f28d", "M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"] };
var faStopwatch = { prefix: 'far', iconName: 'stopwatch', icon: [448, 512, [], "f2f2", "M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"] };
var faStreetView = { prefix: 'far', iconName: 'street-view', icon: [512, 512, [], "f21d", "M339.421 155.079C349.892 139.273 356 120.338 356 100 356 44.86 311.14 0 256 0S156 44.86 156 100c0 20.338 6.108 39.273 16.579 55.079C146.005 169.985 128 198.424 128 231v57c0 26.039 15.629 48.494 38 58.479V384c0 35.29 28.71 64 64 64h52c35.29 0 64-28.71 64-64v-37.521c22.371-9.984 38-32.44 38-58.479v-57c0-32.576-18.005-61.015-44.579-75.921zM256 48c28.719 0 52 23.281 52 52s-23.281 52-52 52-52-23.281-52-52 23.281-52 52-52zm80 240c0 8.8-7.2 16-16 16h-22v80c0 8.837-7.163 16-16 16h-52c-8.837 0-16-7.163-16-16v-80h-22c-8.837 0-16-7.163-16-16v-57c0-19.793 15.074-39 40.818-39 24.961 10.671 53.4 10.672 78.364 0 25.37 0 40.818 18.885 40.818 39v57zm176 128c0 78.511-175.401 96-256 96-79.55 0-256-17.288-256-96 0-38.039 41.176-61.754 92.794-76.095A112.47 112.47 0 0 0 118 372.036v11.015c-38.339 8.823-66.119 20.63-69.967 32.949 9.8 31.378 143.269 48 207.967 48 93.364 0 200.142-22.947 207.967-48-4.376-14.01-33.412-25.076-69.967-33.036v-10.928a112.47 112.47 0 0 0 25.193-32.105C470.774 354.259 512 377.954 512 416z"] };
var faStrikethrough = { prefix: 'far', iconName: 'strikethrough', icon: [512, 512, [], "f0cc", "M500 280H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h488c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12zm-207.573 16c29.146 14.903 49.932 33.827 49.932 66.525 0 44.449-37.464 68.58-88.899 68.58-40.015 0-89.533-15.09-89.533-55.105 0-8.837-7.164-16-16-16h-26.42c-8.836 0-16 7.163-16 16v16.37c0 64.135 78.104 95.249 147.953 95.249 83.185 0 153.034-44.449 153.034-130.174 0-25.295-6.067-45.231-16.343-61.445h-97.724zm-38.511-80c-41.025-16.155-74.115-33.653-74.115-74.453 0-41.274 34.924-61.594 78.738-61.594 36.356 0 77.001 13.763 76.834 40.209-.055 8.774 7.227 15.838 16 15.838h27.055c8.836 0 16-7.163 16-16V98.368c0-48.895-68.58-74.294-135.89-74.294-75.564 0-143.508 36.195-143.508 120.649 0 30.974 9.192 53.723 23.904 71.277h114.982z"] };
var faSubscript = { prefix: 'far', iconName: 'subscript', icon: [512, 512, [], "f12c", "M500.065 430.691H383.611c3.092-18.342 24.015-34.022 47.984-50.038 34.415-22.995 76.138-50.642 76.138-103.222 0-50.301-38.48-85.431-93.577-85.431-37.629 0-72.116 19.458-90.794 50.314-3.321 5.486-1.706 12.623 3.631 16.18l24.42 16.276c5.32 3.546 12.556 2.364 16.309-2.812 10.243-14.13 24.825-24.68 42.168-24.68 26.189 0 37.912 17.288 37.912 34.421 0 21.219-22.471 36.854-48.49 54.956-35.769 24.886-80.283 55.857-80.283 114.931 0 5.562.558 11.025 1.433 17.915.762 5.997 5.861 10.499 11.906 10.499H500c6.627 0 12-5.373 12-12v-25.375c0-6.591-5.343-11.934-11.935-11.934zM245.92 272H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-59.675a12 12 0 0 1-10.19-5.662l-54.204-87.153c-3.262-4.892-6.132-10.128-7.99-13.714-1.773 3.559-4.575 8.823-8.129 14.317l-53.058 86.488A12.005 12.005 0 0 1 72.524 320H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h31.728l65.48-100.449L48.755 80H12C5.373 80 0 74.627 0 68V44c0-6.627 5.373-12 12-12h66.764a12 12 0 0 1 10.234 5.734l47.525 77.624c2.986 4.976 5.742 10.45 7.54 14.194 1.856-3.636 4.718-8.991 7.984-14.217l48.63-77.701A12.002 12.002 0 0 1 210.85 32H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-36.769l-60.974 90.984L245.92 272z"] };
var faSubway = { prefix: 'far', iconName: 'subway', icon: [448, 512, [], "f239", "M280 328c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40-40-17.909-40-40zm-152 40c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40zm320-258.286v228.572c0 49.194-43.706 90.629-99.059 104.713l58.758 58.758c3.78 3.78 1.103 10.243-4.243 10.243h-48.427a11.996 11.996 0 0 1-8.485-3.515L286.059 448H161.941l-60.485 60.485A12.002 12.002 0 0 1 92.971 512H44.544c-5.345 0-8.022-6.463-4.243-10.243l58.758-58.758C43.886 428.961 0 387.656 0 338.286V109.714C0 45.928 71.001 0 138.286 0h171.428C377.889 0 448 45.922 448 109.714zM50.774 96h346.534c-10.2-26.136-47.971-48-87.595-48H138.286c-38.862 0-77.011 21.67-87.512 48zM48 224h152v-80H48v80zm352 48H48v66.286C48 374.495 99.975 400 138.286 400h171.428C347.479 400 400 374.816 400 338.286V272zm0-128H248v80h152v-80z"] };
var faSuitcase = { prefix: 'far', iconName: 'suitcase', icon: [512, 512, [], "f0f2", "M464 96H352V80c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v16H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.51-21.49-48-48-48zM208 80h96v16h-96V80zM96 432H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v288zm272 0H144V144h224v288zm90 0h-42V144h42a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6z"] };
var faSun = { prefix: 'far', iconName: 'sun', icon: [512, 512, [], "f185", "M220.116 487.936l-20.213-49.425a3.992 3.992 0 0 0-5.808-1.886l-45.404 28.104c-29.466 18.24-66.295-8.519-58.054-42.179l12.699-51.865a3.993 3.993 0 0 0-3.59-4.941l-53.251-3.951c-34.554-2.562-48.632-45.855-22.174-68.247L65.08 259.05a3.992 3.992 0 0 0 0-6.106l-40.76-34.497c-26.45-22.384-12.39-65.682 22.174-68.246l53.251-3.951a3.993 3.993 0 0 0 3.59-4.941L90.637 89.443c-8.239-33.656 28.581-60.42 58.054-42.179l45.403 28.104a3.993 3.993 0 0 0 5.808-1.887l20.213-49.425c13.116-32.071 58.638-32.081 71.758 0l20.212 49.424a3.994 3.994 0 0 0 5.809 1.887l45.403-28.104c29.464-18.236 66.297 8.513 58.054 42.179l-12.699 51.865a3.995 3.995 0 0 0 3.59 4.941l53.251 3.951c34.553 2.563 48.633 45.854 22.175 68.246l-40.76 34.497a3.993 3.993 0 0 0 0 6.107l40.76 34.496c26.511 22.441 12.322 65.689-22.175 68.247l-53.251 3.951a3.993 3.993 0 0 0-3.589 4.942l12.698 51.864c8.241 33.658-28.583 60.421-58.054 42.18l-45.403-28.104a3.994 3.994 0 0 0-5.809 1.887l-20.212 49.424c-13.159 32.178-58.675 31.993-71.757 0zm16.814-64.568l19.064 46.616 19.064-46.615c10.308-25.2 40.778-35.066 63.892-20.759l42.822 26.507-11.976-48.919c-6.475-26.444 12.38-52.339 39.487-54.349l50.226-3.726-38.444-32.536c-20.782-17.591-20.747-49.621.001-67.18l38.442-32.536-50.225-3.727c-27.151-2.015-45.95-27.948-39.488-54.349l11.978-48.919-42.823 26.507c-23.151 14.327-53.603 4.4-63.892-20.76l-19.064-46.615-19.064 46.617c-10.305 25.198-40.778 35.066-63.891 20.76l-42.823-26.508 11.977 48.918c6.474 26.446-12.381 52.338-39.488 54.35l-50.224 3.726 38.443 32.537c20.782 17.588 20.747 49.619 0 67.178L52.48 322.123l50.226 3.726c27.151 2.014 45.95 27.947 39.487 54.349l-11.977 48.919 42.823-26.507c23.188-14.355 53.622-4.352 63.891 20.758zM256 384c-70.58 0-128-57.421-128-128 0-70.58 57.42-128 128-128 70.579 0 128 57.42 128 128 0 70.579-57.421 128-128 128zm0-208c-44.112 0-80 35.888-80 80s35.888 80 80 80 80-35.888 80-80-35.888-80-80-80z"] };
var faSuperscript = { prefix: 'far', iconName: 'superscript', icon: [512, 512, [], "f12b", "M500.065 270.691H383.611c3.092-18.342 24.015-34.022 47.984-50.038 34.415-22.995 76.138-50.642 76.138-103.222 0-50.301-38.48-85.431-93.577-85.431-37.629 0-72.116 19.458-90.794 50.314-3.321 5.486-1.706 12.623 3.631 16.18l24.42 16.276c5.32 3.546 12.556 2.364 16.309-2.812 10.243-14.13 24.825-24.68 42.168-24.68 26.189 0 37.912 17.288 37.912 34.421 0 21.219-22.471 36.854-48.49 54.956-35.769 24.886-80.283 55.857-80.283 114.931 0 5.562.558 11.025 1.433 17.915.762 5.997 5.861 10.499 11.906 10.499H500c6.627 0 12-5.373 12-12v-25.375c0-6.591-5.343-11.934-11.935-11.934zM245.92 432H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-59.675a12 12 0 0 1-10.19-5.662l-54.204-87.153c-3.262-4.892-6.132-10.128-7.99-13.714-1.773 3.559-4.575 8.823-8.129 14.317l-53.058 86.488A12.005 12.005 0 0 1 72.524 480H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h31.728l65.48-100.449L48.755 240H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h66.764a12 12 0 0 1 10.234 5.734l47.525 77.624c2.986 4.976 5.742 10.45 7.54 14.194 1.856-3.636 4.718-8.991 7.984-14.217l48.63-77.701A12 12 0 0 1 210.849 192H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-36.769l-60.974 90.984L245.92 432z"] };
var faSync = { prefix: 'far', iconName: 'sync', icon: [512, 512, [], "f021", "M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.575C418.212 52.043 342.256 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h28.576c5.674 0 10.542-3.982 11.737-9.529C83.441 126.128 161.917 60 256 60c79.545 0 147.942 47.282 178.676 115.302l-126.39-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-12.103 280h-28.576c-5.674 0-10.542 3.982-11.737 9.529C428.559 385.872 350.083 452 256 452c-79.546 0-147.942-47.282-178.676-115.302l126.39 3.009c6.737.16 12.286-5.257 12.286-11.997V300c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v192c0 6.627 5.373 12 12 12h27.711c6.739 0 12.157-5.548 11.997-12.286l-2.347-98.575C93.788 459.957 169.744 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176z"] };
var faSyncAlt = { prefix: 'far', iconName: 'sync-alt', icon: [512, 512, [], "f2f1", "M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z"] };
var faSyringe = { prefix: 'far', iconName: 'syringe', icon: [512, 512, [], "f48e", "M475.7 115.5c3.1 3.1 8.2 3.1 11.3 0l22.6-22.6c3.1-3.1 3.1-8.2 0-11.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0L396.5 25c-3.1 3.1-3.1 8.2 0 11.3l22.6 22.6-33.9 33.9L317.3 25c-3.1-3.1-8.2-3.1-11.3 0l-22.6 22.6c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3L78.9 286.1c-19 19-28.2 45.2-25.2 72l7.8 69.9-59.2 59c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l59.1-59c74.8 8.3 73 8.3 79.8 8.3 23.2 0 45.4-9.1 62.1-25.8l215.8-215.8 11.3 11.3c3.1 3.1 8.2 3.1 11.3 0L487 206c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9L453 92.9l22.7 22.6zM192 399.2c-8.6 8.7-20.6 12.9-32.7 11.5l-52.2-5.8-5.8-52.1c-1.3-12.2 2.9-24.1 11.5-32.7l12.2-12.2 28.3 28.3c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L158.9 274l33.9-33.9 28.3 28.3c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L226.8 206l33.9-33.9 28.3 28.3c6.2 6.2 16.4 6.2 22.6 0L323 189c6.2-6.2 6.2-16.4 0-22.6l-28.3-28.3 33.9-33.9 79.2 79.2L192 399.2z"] };
var faTable = { prefix: 'far', iconName: 'table', icon: [512, 512, [], "f0ce", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM232 432H54a6 6 0 0 1-6-6V296h184v136zm0-184H48V112h184v136zm226 184H280V296h184v130a6 6 0 0 1-6 6zm6-184H280V112h184v136z"] };
var faTableTennis = { prefix: 'far', iconName: 'table-tennis', icon: [512, 512, [], "f45d", "M483.2 325.8c46.5-83.4 35.4-190.7-35.2-261.5C406.6 22.8 351.7 0 293.2 0c-105.4 0-152.7 62.3-218 127.7-50.9 51-50.9 134 0 185.1l13.1 13.1-73.9 64.2c-18.3 15.9-19.3 44-2.2 61.1l48.4 48.5c17.7 17.8 45.8 15.6 61.2-2.2l63.9-73.9c10.1 10.1 53.4 64.5 130.6 50.1C336.8 497 366.6 512 400 512c61.8 0 112-50.2 112-112 0-28.6-11.1-54.4-28.8-74.2zM293.2 48c45.6 0 88.5 17.8 120.7 50.1 53.8 53.9 63.4 134.7 30.3 199.1-58.1-25.1-105 5.9-122.3 22.8L136.3 134.4C167.6 103.1 209.2 48 293.2 48zm-110 305.1l-93.3 108-39-39.1 107.7-93.6-49.5-49.5c-29.9-30-31.7-77.3-6-109.8l192.2 192.2c-10.5 28.3-7.7 49.4-3.7 65.4-43-.1-56.5-21.6-108.4-73.6zM400 464c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"] };
var faTablet = { prefix: 'far', iconName: 'tablet', icon: [448, 512, [], "f10a", "M256 416c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-21.3 14.3-32 32-32s32 14.3 32 32zM448 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faTabletAlt = { prefix: 'far', iconName: 'tablet-alt', icon: [448, 512, [], "f3fa", "M356 368H92c-6.6 0-12-5.4-12-12V92c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12zm92-320v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6zm-176-74c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"] };
var faTabletAndroid = { prefix: 'far', iconName: 'tablet-android', icon: [448, 512, [], "f3fb", "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 464H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6zm-118-32H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"] };
var faTabletAndroidAlt = { prefix: 'far', iconName: 'tablet-android-alt', icon: [448, 512, [], "f3fc", "M356 368H92c-6.6 0-12-5.4-12-12V92c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12zm92-320v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6zm-112-38v-8c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h104c6.6 0 12-5.4 12-12z"] };
var faTabletRugged = { prefix: 'far', iconName: 'tablet-rugged', icon: [448, 512, [], "f48f", "M439.2 164.4c5.4-2.7 8.8-8.2 8.8-14.3V73.9c0-6.1-3.4-11.6-8.8-14.3L416 48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48L8.8 59.6C3.4 62.3 0 67.8 0 73.9v76.2c0 6.1 3.4 11.6 8.8 14.3L32 176v16L8.8 203.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3L32 320v16L8.8 347.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3L32 464c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48l23.2-11.6c5.4-2.7 8.8-8.2 8.8-14.3v-76.2c0-6.1-3.4-11.6-8.8-14.3L416 336v-16l23.2-11.6c5.4-2.7 8.8-8.2 8.8-14.3v-76.2c0-6.1-3.4-11.6-8.8-14.3L416 192v-16l23.2-11.6zM368 448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v384z"] };
var faTablets = { prefix: 'far', iconName: 'tablets', icon: [640, 512, [], "f490", "M160 192C71.6 192 0 263.6 0 352s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zM50.7 376h218.5c-25.6 117-192.8 116.7-218.5 0zm0-48c25.7-116.9 192.9-116.9 218.5 0H50.7zM593.1 46.9c-62.4-62.4-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c62.4 62.4 163.8 62.5 226.3 0s62.5-163.9 0-226.3zM385.8 99.7l154.5 154.5C439.7 318.8 321 200.5 385.8 99.7zm188.4 120.6L419.7 65.8C520.3 1.1 639 119.5 574.2 220.3z"] };
var faTachometer = { prefix: 'far', iconName: 'tachometer', icon: [576, 512, [], "f0e4", "M288 32.012C128.759 32.012 0 161.104 0 320c0 33.683 5.785 66.012 16.414 96.054C29.977 454.389 66.251 480 106.915 480h362.17c40.664 0 76.938-25.611 90.501-63.946C570.215 386.012 576 353.683 576 320c0-158.896-128.759-287.988-288-287.988zm226.335 368.031C507.572 419.158 489.387 432 469.085 432h-362.17c-20.302 0-38.487-12.842-45.25-31.957C52.598 374.414 48 347.484 48 320 48 187.616 155.177 80.012 288 80.012c132.827 0 240 107.602 240 239.988 0 27.484-4.598 54.414-13.665 80.043zM374.668 175.884l-44.515 127.98C343.538 315.595 352 332.804 352 352c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-34.281 26.953-62.263 60.823-63.92l44.51-127.965c4.354-12.52 18.031-19.139 30.553-14.784 12.517 4.356 19.136 18.034 14.782 30.553z"] };
var faTachometerAlt = { prefix: 'far', iconName: 'tachometer-alt', icon: [576, 512, [], "f3fd", "M288 32.012C128.759 32.012 0 161.104 0 320c0 33.683 5.785 66.012 16.414 96.054C29.977 454.389 66.251 480 106.915 480h362.17c40.664 0 76.938-25.611 90.501-63.946C570.215 386.012 576 353.683 576 320c0-158.896-128.759-287.988-288-287.988zm226.335 368.031C507.572 419.158 489.387 432 469.085 432h-362.17c-20.302 0-38.487-12.842-45.25-31.957C6.889 245.223 121.206 80.012 288 80.012c167.016 0 281.032 165.433 226.335 320.031zM256 128c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zm224 160c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32zm-352 32c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32zm56-136c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32zm272 0c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32zm-89.479 24.297l-35.489 96.328C343.913 316.333 352 333.222 352 352c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-34.67 27.572-62.881 61.983-63.949l35.497-96.348c4.582-12.437 18.379-18.807 30.817-14.223 12.437 4.582 18.806 18.379 14.224 30.817z"] };
var faTag = { prefix: 'far', iconName: 'tag', icon: [512, 512, [], "f02b", "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"] };
var faTags = { prefix: 'far', iconName: 'tags', icon: [640, 512, [], "f02c", "M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"] };
var faTasks = { prefix: 'far', iconName: 'tasks', icon: [512, 512, [], "f0ae", "M512 128V96c0-6.6-5.4-12-12-12H204c-6.6 0-12 5.5-12 12.2V128c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12zm0 160v-32c0-6.6-5.4-12-12-12H204c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12zm0 160v-32c0-6.6-5.4-12-12-12H204c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12zM162.1 64.8l-92 91.8c-4.7 4.7-12.3 4.7-17 0l-12.4-12.4-37.2-37.5c-4.7-4.7-4.7-12.3 0-17l12.4-12.4c4.7-4.7 12.3-4.7 17 0l28.8 29.2 71.1-71.1c4.7-4.7 12.3-4.7 17 0l12.4 12.4c4.6 4.8 4.6 12.4-.1 17zm0 159.9l-92 92c-4.7 4.7-12.3 4.7-17 0l-12.4-12.4-37.2-37.7c-4.7-4.7-4.7-12.3 0-17l12.4-12.4c4.7-4.7 12.3-4.7 17 0l28.8 29.2 71.1-71.1c4.7-4.7 12.3-4.7 17 0l12.4 12.4c4.6 4.7 4.6 12.3-.1 17zM64 384c-26.5 0-47.6 21.5-47.6 48s21.1 48 47.6 48 48-21.5 48-48-21.5-48-48-48z"] };
var faTaxi = { prefix: 'far', iconName: 'taxi', icon: [512, 512, [], "f1ba", "M496 296c0-26.867-13.259-50.623-33.575-65.131l-17.053-68.212A87.871 87.871 0 0 0 360 96h-8V56c0-13.255-10.745-24-24-24H184c-13.255 0-24 10.745-24 24v40h-8a87.871 87.871 0 0 0-85.372 66.657l-17.053 68.212C29.258 245.377 16 269.133 16 296v72c0 15.254 6.107 29.077 16 39.176V456c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24v-32h288v32c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24v-48.823c9.893-10.1 16-23.922 16-39.176V296zM200 72h112v24H200V72zm-48 72h208a39.942 39.942 0 0 1 38.806 30.298L409.231 216H102.769l10.426-41.702A39.94 39.94 0 0 1 152 144zM71.994 384C63.174 383.997 56 376.821 56 368v-72c0-22.056 17.944-40 40-40h320c22.056 0 40 17.944 40 40v72c0 8.82-7.174 15.997-15.994 16H71.994zM336 324v16c0 6.627-5.373 12-12 12H188c-6.627 0-12-5.373-12-12v-16c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12zm-188-4c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm252 36c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36z"] };
var faTennisBall = { prefix: 'far', iconName: 'tennis-ball', icon: [496, 512, [], "f45e", "M495 236.2c0-.1.1-.2.1-.3h-.1C485.2 115.2 388.8 18.8 268.1 9v-.1c-.1 0-.2.1-.3.1-6.5-.5-13.1-1-19.8-1C111.2 8 0 119.2 0 256c0 6.7.5 13.3 1 19.9v.1c9.7 120.8 106.2 217.3 227 227h.1c6.6.5 13.2 1 19.9 1 136.8 0 248-111.2 248-248 0-6.7-.5-13.2-1-19.8zM219.3 58.3c-1.7 6.2-2.8 12.6-2.8 19.3 0 37.7-16.9 79.9-41.9 104.9-25.1 25-67.2 41.9-104.9 41.9-6.7 0-13.1 1.1-19.3 2.8C63 140 132 71 219.3 58.3zM50 282.9c4.2-6.4 11.4-10.5 19.6-10.5 50.3 0 104.8-22 138.8-56 34-34 55.9-88.5 56-138.8 0-8.2 4-15.4 10.4-19.6C363.6 70 434 140.4 446 229.2c-4.2 6.4-11.4 10.4-19.6 10.4-50.4 0-104.8 22-138.8 56-34 34-55.9 88.4-56 138.8 0 8.3-4.1 15.5-10.5 19.7C132.4 442 62 371.6 50 282.9zm226.8 170.8c1.7-6.2 2.8-12.6 2.8-19.3 0-37.7 16.9-79.9 41.9-104.9 25.1-25.1 67.2-41.9 104.9-41.9 6.7 0 13.1-1.1 19.3-2.8C433 372 364 441 276.8 453.7z"] };
var faTerminal = { prefix: 'far', iconName: 'terminal', icon: [640, 512, [], "f120", "M41.678 38.101l209.414 209.414c4.686 4.686 4.686 12.284 0 16.971L41.678 473.899c-4.686 4.686-12.284 4.686-16.971 0L4.908 454.101c-4.686-4.686-4.686-12.284 0-16.971L185.607 256 4.908 74.87c-4.686-4.686-4.686-12.284 0-16.971L24.707 38.1c4.686-4.686 12.284-4.686 16.971.001zM640 468v-28c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z"] };
var faTextHeight = { prefix: 'far', iconName: 'text-height', icon: [512, 512, [], "f034", "M0 139.131V44c0-6.627 5.373-12 12-12h296c6.627 0 12 5.373 12 12v95.131c0 6.627-5.373 12-12 12h-26.747c-6.627 0-12-5.373-12-12V80h-82.015v352H236c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H84c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h48.762V80H50.125v59.131c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.372-12-12zM423.276 35.759l-67.994 72.001c-7.16 7.581-1.863 20.24 8.724 20.24H408v256h-43.993c-10.58 0-15.89 12.652-8.724 20.24l67.993 72.001c4.735 5.014 12.716 5.01 17.448 0l67.994-72.001c7.16-7.581 1.863-20.24-8.724-20.24H456V128h43.993c10.58 0 15.89-12.652 8.724-20.24l-67.993-72.001c-4.735-5.014-12.716-5.01-17.448 0z"] };
var faTextWidth = { prefix: 'far', iconName: 'text-width', icon: [448, 512, [], "f035", "M0 139.131V44c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v95.131c0 6.627-5.373 12-12 12h-26.747c-6.627 0-12-5.373-12-12V80H251.238v192H300c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H148c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h48.762V80H50.125v59.131c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.372-12-12zm444.241 252.145l-72.001-67.994c-7.581-7.16-20.24-1.863-20.24 8.724V376H96v-43.993c0-10.58-12.652-15.89-20.24-8.724L3.759 391.276c-5.014 4.735-5.01 12.716 0 17.448l72.001 67.994c7.581 7.16 20.24 1.863 20.24-8.724V424h256v43.993c0 10.58 12.652 15.89 20.24 8.724l72.001-67.993c5.014-4.735 5.01-12.716 0-17.448z"] };
var faTh = { prefix: 'far', iconName: 'th', icon: [512, 512, [], "f00a", "M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H354.667v-96H472v96zm-157.333 0H197.333v-96h117.333v96zm0 40v96H197.333v-96h117.334zM40 208h117.333v96H40v-96zm157.333-40V72h117.333v96H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84zm314.667 96v-96H472v96H354.667zM472 168H354.667V72H472v96z"] };
var faThLarge = { prefix: 'far', iconName: 'th-large', icon: [512, 512, [], "f009", "M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm232 0v152H48V86a6 6 0 0 1 6-6h178zM48 280h184v152H54a6 6 0 0 1-6-6V280zm232 152V280h184v146a6 6 0 0 1-6 6H280zm184-200H280V80h178a6 6 0 0 1 6 6v146z"] };
var faThList = { prefix: 'far', iconName: 'th-list', icon: [512, 512, [], "f00b", "M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H197.333v-96H472v96zm0 40v84c0 6.627-5.373 12-12 12H197.333v-96H472zM40 208h117.333v96H40v-96zm157.333-40V72H460c6.627 0 12 5.373 12 12v84H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84z"] };
var faThermometer = { prefix: 'far', iconName: 'thermometer', icon: [512, 512, [], "f491", "M476.8 20.4c-37.5-30.7-95.5-26.3-131.9 10.2L96 281.1V382L7 471c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 33.9 0l89-89h99.9L484 162.6c34.9-34.9 42.2-101.5-7.2-142.2zm-26.7 108.2L210 368h-66v-67.1l33.1-33.3 27.6 27.6c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L211 233.5l33.8-34.1 27.8 27.8c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.3-6.2 6.3-16.4 0-22.6l-28-28 33.8-34.1 28.1 28.1c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.3 6.2-16.4 0-22.6l-28.2-28.2 32.6-32.8c19.2-19.1 48.8-22.2 67.4-7 25.5 21 21.1 54.1 4 71.2z"] };
var faThermometerEmpty = { prefix: 'far', iconName: 'thermometer-empty', icon: [256, 512, [], "f2cb", "M184 384c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56zm40-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.302 128-128 128-.299 0-.61-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.756 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM216 384c0-37.167-21.152-57.235-32-69.527V96c0-30.878-25.122-56-56-56-30.879 0-56 25.122-56 56v218.473c-10.977 12.439-31.811 32.281-31.999 69.064-.247 48.291 39.091 88.125 87.367 88.461L128 472c48.524 0 88-39.477 88-88z"] };
var faThermometerFull = { prefix: 'far', iconName: 'thermometer-full', icon: [256, 512, [], "f2c7", "M224 96c0-53.019-42.981-96-96-96S32 42.981 32 96v203.347C12.225 321.756.166 351.136.002 383.333c-.359 70.303 56.787 128.176 127.089 128.664.299.002.61.003.909.003 70.698 0 128-57.304 128-128 0-32.459-12.088-62.09-32-84.653V96zm-96 376l-.631-.002c-48.276-.335-87.614-40.17-87.367-88.461.188-36.783 21.022-56.625 31.999-69.064V96c0-30.878 25.121-56 56-56 30.878 0 56 25.122 56 56v218.473c10.848 12.292 32 32.361 32 69.527-.001 48.523-39.477 88-88.001 88zm56-88c0 30.928-25.072 56-56 56s-56-25.072-56-56c0-22.338 13.082-41.615 32-50.604V96c0-13.255 10.745-24 24-24s24 10.745 24 24v237.396c18.918 8.989 32 28.266 32 50.604z"] };
var faThermometerHalf = { prefix: 'far', iconName: 'thermometer-half', icon: [256, 512, [], "f2c9", "M184 384c0 30.928-25.072 56-56 56s-56-25.072-56-56c0-22.338 13.082-41.615 32-50.604V216c0-13.255 10.745-24 24-24s24 10.745 24 24v117.396c18.918 8.989 32 28.266 32 50.604zm40-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.302 128-128 128-.299 0-.61-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.756 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM216 384c0-37.167-21.152-57.235-32-69.527V96c0-30.878-25.122-56-56-56-30.879 0-56 25.122-56 56v218.473c-10.977 12.439-31.811 32.281-31.999 69.064-.247 48.291 39.091 88.125 87.367 88.461L128 472c48.524 0 88-39.477 88-88z"] };
var faThermometerQuarter = { prefix: 'far', iconName: 'thermometer-quarter', icon: [256, 512, [], "f2ca", "M184 384c0 30.928-25.072 56-56 56s-56-25.072-56-56c0-22.338 13.082-41.615 32-50.604V280c0-13.255 10.745-24 24-24s24 10.745 24 24v53.396c18.918 8.989 32 28.266 32 50.604zm40-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.302 128-128 128-.299 0-.61-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.756 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM216 384c0-37.167-21.152-57.235-32-69.527V96c0-30.878-25.122-56-56-56-30.879 0-56 25.122-56 56v218.473c-10.977 12.439-31.811 32.281-31.999 69.064-.247 48.291 39.091 88.125 87.367 88.461L128 472c48.524 0 88-39.477 88-88z"] };
var faThermometerThreeQuarters = { prefix: 'far', iconName: 'thermometer-three-quarters', icon: [256, 512, [], "f2c8", "M184 384c0 30.928-25.072 56-56 56s-56-25.072-56-56c0-22.338 13.082-41.615 32-50.604V152c0-13.255 10.745-24 24-24s24 10.745 24 24v181.396c18.918 8.989 32 28.266 32 50.604zm40-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.302 128-128 128-.299 0-.61-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.756 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM216 384c0-37.167-21.152-57.235-32-69.527V96c0-30.878-25.122-56-56-56-30.879 0-56 25.122-56 56v218.473c-10.977 12.439-31.811 32.281-31.999 69.064-.247 48.291 39.091 88.125 87.367 88.461L128 472c48.524 0 88-39.477 88-88z"] };
var faThumbsDown = { prefix: 'far', iconName: 'thumbs-down', icon: [512, 512, [], "f165", "M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"] };
var faThumbsUp = { prefix: 'far', iconName: 'thumbs-up', icon: [512, 512, [], "f164", "M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"] };
var faThumbtack = { prefix: 'far', iconName: 'thumbtack', icon: [384, 512, [], "f08d", "M306.49 186.64L300.8 144H328c13.25 0 24-10.75 24-24V24c0-13.25-10.75-24-24-24H56C42.75 0 32 10.75 32 24v96c0 13.25 10.75 24 24 24h27.2l-5.69 42.64C29.582 219.397 0 270.66 0 328c0 13.25 10.75 24 24 24h144v104.014a8 8 0 0 0 .411 2.53l16 48c2.423 7.269 12.752 7.281 15.179 0l16-48a8 8 0 0 0 .411-2.53V352h144c13.25 0 24-10.75 24-24-.001-57.306-29.56-108.587-77.511-141.36zM50.54 304c8.253-38.45 35.63-70.048 71.46-87.83L138.02 96H80V48h224v48h-58.02L262 216.17c35.849 17.791 63.212 49.402 71.46 87.83H50.54z"] };
var faTicket = { prefix: 'far', iconName: 'ticket', icon: [576, 512, [], "f145", "M568 216h8V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v104h8c22.091 0 40 17.909 40 40s-17.909 40-40 40H0v104c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V296h-8c-22.091 0-40-17.909-40-40s17.909-40 40-40zm-40-38.372c-28.47 14.59-48 44.243-48 78.372s19.53 63.782 48 78.372V400H48v-65.628c28.471-14.59 48-44.243 48-78.372s-19.529-63.782-48-78.372V112h480v65.628z"] };
var faTicketAlt = { prefix: 'far', iconName: 'ticket-alt', icon: [576, 512, [], "f3ff", "M400 208v96H176v-96h224m24-48H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm144 56h8V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v104h8c22.091 0 40 17.909 40 40s-17.909 40-40 40H0v104c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V296h-8c-22.091 0-40-17.909-40-40s17.909-40 40-40zm-40-38.372c-28.47 14.59-48 44.243-48 78.372s19.53 63.782 48 78.372V400H48v-65.628c28.471-14.59 48-44.243 48-78.372s-19.529-63.782-48-78.372V112h480v65.628z"] };
var faTimes = { prefix: 'far', iconName: 'times', icon: [384, 512, [], "f00d", "M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"] };
var faTimesCircle = { prefix: 'far', iconName: 'times-circle', icon: [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"] };
var faTimesHexagon = { prefix: 'far', iconName: 'times-hexagon', icon: [576, 512, [], "f2ee", "M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192zm-10.2-112.8l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L288 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L327.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17z"] };
var faTimesOctagon = { prefix: 'far', iconName: 'times-octagon', icon: [512, 512, [], "f2f0", "M497.9 150.5L361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c-.1-12.8-5.2-25-14.2-34zm-33.9 177L327.5 464h-143L48 327.5v-143L184.5 48h143.1L464 184.5v143zm-106.2 7.7l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17z"] };
var faTimesSquare = { prefix: 'far', iconName: 'times-square', icon: [448, 512, [], "f2d3", "M325.8 193.8L263.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L224 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"] };
var faTint = { prefix: 'far', iconName: 'tint', icon: [384, 512, [], "f043", "M192 512C89.473 512 6.609 429.156 6.609 326.608c0-111.31 94.001-150.864 135.61-289.559 15.093-49.931 85.657-48.929 99.619.191 42.561 141.489 135.554 178.064 135.554 289.368C377.392 429.135 294.549 512 192 512zM54.609 326.608C54.609 402.607 115.983 464 192 464c76 0 137.392-61.377 137.392-137.392 0-88.594-89.568-128.813-133.586-275.538-1.228-4.213-6.478-3.748-7.626.048-43.468 144.895-133.571 187.467-133.571 275.49zm95.782-25.738c-1.761-6.455-11.022-6.454-12.782 0-10.76 34.329-32.565 43.919-32.565 68.174C105.044 390.652 122.391 408 144 408s38.956-17.348 38.956-38.956c0-24.312-21.785-33.782-32.565-68.174z"] };
var faToggleOff = { prefix: 'far', iconName: 'toggle-off', icon: [576, 512, [], "f204", "M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM48 256c0-79.583 64.404-144 144-144 79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144-79.582 0-144-64.404-144-144zm336 144h-65.02c86.704-76.515 86.683-211.504 0-288H384c79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144z"] };
var faToggleOn = { prefix: 'far', iconName: 'toggle-on', icon: [576, 512, [], "f205", "M576 256c0 106.039-85.961 192-192 192H192C85.961 448 0 362.039 0 256S85.961 64 192 64h192c106.039 0 192 85.961 192 192zM384 112c-79.582 0-144 64.404-144 144 0 79.582 64.404 144 144 144 79.582 0 144-64.404 144-144 0-79.582-64.404-144-144-144"] };
var faTrademark = { prefix: 'far', iconName: 'trademark', icon: [640, 512, [], "f25c", "M105.014 146.028H12c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h244.169c6.627 0 12 5.373 12 12v26.028c0 6.627-5.373 12-12 12h-93.014V404c0 6.627-5.373 12-12 12h-34.141c-6.627 0-12-5.373-12-12V146.028zM343.779 96h42.983a12 12 0 0 1 11.157 7.582l59.646 150.616c7.211 18.929 16.225 46.873 16.225 46.873h.902s8.563-27.944 15.775-46.873l59.646-150.616A12 12 0 0 1 561.27 96h42.967a12 12 0 0 1 11.961 11.04l23.763 296c.561 6.984-4.956 12.96-11.962 12.96h-33.561a12 12 0 0 1-11.966-11.096L569.79 237.07c-1.352-21.183-.451-49.577-.451-49.577h-.901s-9.465 31.099-17.127 49.577l-48.748 116.574a12 12 0 0 1-11.071 7.37h-34.925a12 12 0 0 1-11.085-7.405L397.17 237.07c-7.662-18.479-17.577-50.028-17.577-50.028h-.902s.902 28.845-.451 50.028l-12.683 167.834A12 12 0 0 1 353.591 416h-33.993c-7.013 0-12.531-5.988-11.96-12.977l24.181-296A12 12 0 0 1 343.779 96z"] };
var faTrain = { prefix: 'far', iconName: 'train', icon: [448, 512, [], "f238", "M264 336c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm184-226.286v228.572c0 49.194-43.705 90.629-99.059 104.713l58.758 58.758c3.78 3.78 1.103 10.243-4.243 10.243h-48.427a11.996 11.996 0 0 1-8.485-3.515L286.059 448H161.941l-60.485 60.485A12.002 12.002 0 0 1 92.971 512H44.544c-5.345 0-8.022-6.463-4.243-10.243l58.758-58.758C43.886 428.961 0 387.656 0 338.286V109.714C0 45.928 71.001 0 138.286 0h171.428C377.889 0 448 45.922 448 109.714zM48 224h352v-80H48v80zm2.774-128h346.534c-10.2-26.136-47.971-48-87.595-48H138.286c-38.862 0-77.011 21.67-87.512 48zM400 338.286V272H48v66.286C48 374.495 99.974 400 138.286 400h171.428C347.479 400 400 374.816 400 338.286z"] };
var faTransgender = { prefix: 'far', iconName: 'transgender', icon: [384, 512, [], "f224", "M372 0h-63c-10.7 0-16 12.9-8.5 20.5L315 35l-87.6 87.6C203.9 105.9 175.1 96 144 96 64.5 96 0 160.5 0 240c0 71.4 51.9 130.6 120 142v34H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v36c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-36h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-34c68.1-11.4 120-70.6 120-142 0-31.1-9.9-59.9-26.6-83.4L349 69l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM144 336c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faTransgenderAlt = { prefix: 'far', iconName: 'transgender-alt', icon: [480, 512, [], "f225", "M468 0h-63c-10.7 0-16 12.9-8.5 20.5L411 35l-87.6 87.6C299.9 105.9 271.1 96 240 96s-59.9 9.9-83.4 26.6l-26-26L150 77.1c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0L96.6 62.6 69 35l14.5-14.5C91.1 12.9 85.7 0 75 0H12C5.4 0 0 5.4 0 12v63c0 10.7 12.9 16 20.5 8.5L35 69l27.6 27.6L43.2 116c-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0l19.5-19.5 26 26C105.9 180.1 96 208.9 96 240c0 71.4 51.9 130.6 120 142v34h-44c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v36c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-36h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-34c68.1-11.4 120-70.6 120-142 0-31.1-9.9-59.9-26.6-83.4L445 69l14.5 14.5c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12zM240 336c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"] };
var faTrash = { prefix: 'far', iconName: 'trash', icon: [512, 512, [], "f1f8", "M381.6 80l-34-56.7C338.9 8.8 323.3 0 306.4 0H205.6c-16.9 0-32.5 8.8-41.2 23.3l-34 56.7H40c-13.3 0-24 10.7-24 24v12c0 6.6 5.4 12 12 12h16.4L76 468.4c2.3 24.7 23 43.6 47.8 43.6h264.5c24.8 0 45.5-18.9 47.8-43.6L467.6 128H484c6.6 0 12-5.4 12-12v-12c0-13.3-10.7-24-24-24h-90.4zm-176-32h100.8l19.2 32H186.4l19.2-32zm182.6 416H123.8L92.6 128h326.7l-31.1 336z"] };
var faTrashAlt = { prefix: 'far', iconName: 'trash-alt', icon: [448, 512, [], "f2ed", "M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"] };
var faTree = { prefix: 'far', iconName: 'tree', icon: [384, 512, [], "f1bb", "M373.679 338.344l-35.16-44.832c20.236-16.151 24.079-45.619 8.359-66.438l-34.932-46.261c21.067-17.62 23.055-49.355 4.372-69.475l-89.143-96.006c-18.969-20.428-51.352-20.457-70.348 0l-89.143 96.006c-18.704 20.143-16.67 51.876 4.372 69.475l-34.932 46.261c-15.73 20.831-11.864 50.298 8.359 66.438l-35.167 44.832C-14.37 369.762 8.032 416 48.058 416H160c0 36.341-3.919 56.605-29.657 82.343C125.318 503.368 128.88 512 136 512h112c7.106 0 10.692-8.622 5.657-13.657C227.943 472.629 224 452.386 224 416h111.935c39.956 0 62.472-46.182 37.744-77.656zM224 368v-24c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v24H48l88-112H75.429L160 144h-57.143L192 48l89.143 96H224l84.571 112H248l88 112H224z"] };
var faTreeAlt = { prefix: 'far', iconName: 'tree-alt', icon: [512, 512, [], "f400", "M469.614 190.222c15.35-70.159-43.761-134.772-115.304-125.326C337.456 25.516 298.795 0 256 0c-42.834 0-81.471 25.552-98.311 64.896-71.485-9.439-130.665 55.111-115.303 125.327C15.83 210.547 0 242.073 0 276c0 59.552 48.449 108 108 108h116c0 56.531 3.718 80.968-29.657 114.343C189.318 503.368 192.88 512 200 512h112c7.106 0 10.692-8.622 5.657-13.657C284.152 464.839 288 440.028 288 384h116c59.552 0 108-48.448 108-108 0-33.889-15.806-65.435-42.386-85.778zM404 336H288v-24c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v24H108c-33.084 0-60-26.916-60-60 0-42.95 36.542-55.333 54.299-64.076C92.504 190.015 88 182.71 88 168c0-30.878 25.122-56 56-56 13.982 0 20.481 3.873 49.106 15.517C195.218 114.139 196.728 48 256 48c57.226 0 60.028 61.361 62.895 79.518C347.69 115.804 354.039 112 368 112c30.879 0 56 25.122 56 56 0 14.699-4.468 21.934-14.298 43.924C427.266 220.572 464 232.908 464 276c0 33.084-26.916 60-60 60z"] };
var faTriangle = { prefix: 'far', iconName: 'triangle', icon: [576, 512, [], "f2ec", "M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416zM48 464L288 48l240 416H48z"] };
var faTrophy = { prefix: 'far', iconName: 'trophy', icon: [576, 512, [], "f091", "M448 64V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v60.8C0 201.1 68.3 266 159.6 283.4c27.4 57.9 68.1 88.2 104.4 97.4V464h-64c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40h-64v-83.2c36.3-9.3 77-39.5 104.4-97.4C507.5 266.1 576 201.2 576 140.8V80c0-8.8-7.2-16-16-16H448zM48 140.8V112h80c0 39.2 2.1 76.2 12.3 116.8-55.1-18.9-92.3-58.9-92.3-88zM288 336c-53 0-112-78.4-112-216V48h224v72c0 140.5-60.8 216-112 216zm240-195.2c0 29.1-37.2 69.1-92.3 88C445.9 188.2 448 151.1 448 112h80v28.8z"] };
var faTrophyAlt = { prefix: 'far', iconName: 'trophy-alt', icon: [576, 512, [], "f2eb", "M359.3 138.9l-43.4-6.3-19.4-39.3c-3.5-7-13.5-7.1-17 0l-19.4 39.3-43.4 6.3c-7.8 1.1-10.9 10.7-5.3 16.2l31.4 30.6-7.4 43.2c-1.3 7.7 6.8 13.7 13.8 10l38.8-20.4 38.8 20.4c6.9 3.6 15.1-2.2 13.8-10l-7.4-43.2 31.4-30.6c5.6-5.5 2.5-15.1-5.3-16.2zM448 64V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v60.8C0 201.1 68.3 266 159.6 283.4c27.4 57.9 68.1 88.2 104.4 97.4V464h-64c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40h-64v-83.2c36.3-9.3 77-39.5 104.4-97.4C507.5 266.1 576 201.2 576 140.8V80c0-8.8-7.2-16-16-16H448zM48 140.8V112h80c0 39.2 2.1 76.2 12.3 116.8-55.1-18.9-92.3-58.9-92.3-88zM288 336c-53 0-112-78.4-112-216V48h224v72c0 140.5-60.8 216-112 216zm240-195.2c0 29.1-37.2 69.1-92.3 88C445.9 188.2 448 151.1 448 112h80v28.8z"] };
var faTruck = { prefix: 'far', iconName: 'truck', icon: [640, 512, [], "f0d1", "M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"] };
var faTty = { prefix: 'far', iconName: 'tty', icon: [512, 512, [], "f1e4", "M256.015.004zm248.687 159.27l-37.058 59.291c-12.314 19.701-36.965 27.752-58.53 19.125l-74.42-29.769c-19.855-7.943-32.062-28.062-29.935-49.341l2.606-26.073c-36.57-9.118-67.361-8.82-102.729 0l2.607 26.072c2.128 21.28-10.079 41.401-29.936 49.344l-74.422 29.768c-21.579 8.631-46.225.56-58.53-19.127L7.297 159.272c-11.876-19.002-9.025-43.693 6.869-59.488 133.558-132.722 349.459-133.369 483.668.001 15.894 15.795 18.745 40.487 6.868 59.489zm-40.701-25.441c-115.216-114.495-300.899-114.381-416-.001l37.059 59.292 74.422-29.768-6.505-65.044c75.782-27.384 130.31-27.367 206.046 0l-6.502 65.043 74.42 29.769 37.06-59.291zM126 430H98c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zM78 512H50c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm384 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zM78 348H50c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm96 0h-28c-6.627 0-12-5.373-12-12v-28c0-6.627 5.373-12 12-12h28c6.627 0 12 5.373 12 12v28c0 6.627-5.373 12-12 12zm-98 158H148c-6.627 0-12-5.373-12-12v-16c0-6.627 5.373-12 12-12h216c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12z"] };
var faTv = { prefix: 'far', iconName: 'tv', icon: [640, 512, [], "f26c", "M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h248v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H344v-48h248c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 368H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h532c3.3 0 6 2.7 6 6v308c0 3.3-2.7 6-6 6z"] };
var faTvRetro = { prefix: 'far', iconName: 'tv-retro', icon: [512, 512, [], "f401", "M400 244v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm12 76h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12zm-36-136.5s-1.5-7.5-144-7.5-144.5 7.5-144.5 7.5S80 184 80 288s7.5 104.5 7.5 104.5S88 400 232 400s144-7.5 144-7.5 7.5-.5 7.5-104.5-7.5-104.5-7.5-104.5zM512 144v288c0 26.5-21.5 48-48 48h-16v32h-48l-10.7-32H122.7L112 512H64v-32H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h140.9l-54-55.2c-9.3-9.5-9.1-24.7.3-33.9 9.5-9.3 24.7-9.1 33.9.3L256 96l86.9-88.8c9.3-9.5 24.5-9.6 33.9-.3 9.5 9.3 9.6 24.5.3 33.9l-54 55.2H464c26.5 0 48 21.5 48 48zm-48 0H48v288h416V144z"] };
var faUmbrella = { prefix: 'far', iconName: 'umbrella', icon: [576, 512, [], "f0e9", "M575.227 245.796C546.304 124.473 434.283 49.689 312 40.867V24c0-13.255-10.745-24-24-24s-24 10.745-24 24v16.864C142.075 49.624 30.471 123.772.797 245.694c-5.908 23.641 22.268 43.788 43.593 25.509l.49-.438c49.209-45.814 89.493-28.115 125.342 27.66 11.35 17.77 34.765 16.9 45.566.021 13.54-20.922 27.644-40.238 48.212-48.809V424c0 22.056-17.944 40-40 40s-40-17.944-40-40c0-13.255-10.745-24-24-24s-24 10.745-24 24c0 48.523 39.477 88 88 88s88-39.477 88-88V249.958c25.89 10.827 38.014 32.588 48.192 48.458 10.807 16.934 34.234 17.758 45.573.029 36.217-55.958 76.587-73.084 125.352-27.68l.491.438c21.231 18.199 49.434-1.724 43.619-25.407zm-69.425-45.026c-47.861-13.734-89.788 8.106-121.989 46.573-24.008-30.066-56.845-50.369-95.813-50.369-39.408 0-69.736 18.728-94.551 49.949-35.654-44.276-82.818-57.09-122.65-46.833C115.008 126.775 202.033 88 288 88c85.629 0 173.751 38.987 217.802 112.77z"] };
var faUnderline = { prefix: 'far', iconName: 'underline', icon: [448, 512, [], "f0cd", "M0 500v-24c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12zM278.066 12v24c0 6.627 5.373 12 12 12h40.44v210.742c0 74.424-39.957 112.144-106.502 112.144-66.896 0-106.501-35.297-106.501-111.005V48h40.44c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H22.162c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h40.441v212.45c0 106.712 66.034 161.89 161.401 161.89 93.574 0 161.402-56.006 161.402-161.89V48h40.44c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-135.78c-6.627 0-12 5.373-12 12z"] };
var faUndo = { prefix: 'far', iconName: 'undo', icon: [512, 512, [], "f0e2", "M12 8h27.711c6.739 0 12.157 5.548 11.997 12.286l-2.347 98.568C93.925 51.834 170.212 7.73 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.835 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.322 0 196-87.662 196-196 0-108.322-87.662-196-196-196-79.545 0-147.941 47.282-178.675 115.302l126.389-3.009c6.737-.16 12.286 5.257 12.286 11.997V212c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V20C0 13.373 5.373 8 12 8z"] };
var faUndoAlt = { prefix: 'far', iconName: 'undo-alt', icon: [512, 512, [], "f2ea", "M28.485 28.485L80.65 80.65C125.525 35.767 187.515 8 255.999 8 392.66 8 504.1 119.525 504 256.185 503.9 393.067 392.905 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.353-12.561-.482-17.433l19.738-19.738c4.498-4.498 11.753-4.785 16.501-.552C160.213 433.246 205.895 452 256 452c108.321 0 196-87.662 196-196 0-108.321-87.662-196-196-196-54.163 0-103.157 21.923-138.614 57.386l54.128 54.129c7.56 7.56 2.206 20.485-8.485 20.485H20c-6.627 0-12-5.373-12-12V36.971c0-10.691 12.926-16.045 20.485-8.486z"] };
var faUniversalAccess = { prefix: 'far', iconName: 'universal-access', icon: [512, 512, [], "f29a", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 456c-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208 114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208zm143.594-286.66c2.538 10.75-4.119 21.522-14.869 24.061-29.865 7.051-57.839 13.286-85.597 16.751.679 111.33 12.654 128.456 26.969 165.116 4.823 12.346-1.275 26.265-13.622 31.087-12.34 4.823-26.263-1.27-31.087-13.622-9.559-24.467-18.089-42.949-23.805-85.12h-3.164c-5.721 42.206-14.269 60.706-23.805 85.12-4.816 12.329-18.721 18.451-31.087 13.623-12.346-4.823-18.445-18.741-13.623-31.088 14.33-36.686 26.29-53.837 26.969-165.116-27.758-3.465-55.732-9.699-85.597-16.751-10.75-2.538-17.407-13.311-14.869-24.061 2.539-10.75 13.312-17.405 24.061-14.869 104.768 24.736 134.447 24.701 239.066 0 10.749-2.538 21.522 4.118 24.06 14.869zm-181.788-43.146C217.806 113.1 234.906 96 256 96s38.194 17.1 38.194 38.194-17.1 38.194-38.194 38.194-38.194-17.101-38.194-38.194z"] };
var faUniversity = { prefix: 'far', iconName: 'university', icon: [512, 512, [], "f19c", "M472 440h-8v-56c0-13.255-10.745-24-24-24h-16V208h-48v152h-48V208h-48v152h-48V208h-48v152h-48V208H88v152H72c-13.255 0-24 10.745-24 24v56h-8c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zm-56 0H96v-32h320v32zm72.267-322.942L271.179 26.463a48.004 48.004 0 0 0-30.358 0L23.733 117.058A11.999 11.999 0 0 0 16 128.274V156c0 6.627 5.373 12 12 12h20v12c0 6.627 5.373 12 12 12h392c6.627 0 12-5.373 12-12v-12h20c6.627 0 12-5.373 12-12v-27.726c0-4.982-3.077-9.445-7.733-11.216zM64 144l192-72 192 72H64z"] };
var faUnlink = { prefix: 'far', iconName: 'unlink', icon: [512, 512, [], "f127", "M304.083 388.936c4.686 4.686 4.686 12.284 0 16.971l-65.057 65.056c-54.709 54.711-143.27 54.721-197.989 0-54.713-54.713-54.719-143.27 0-197.989l65.056-65.057c4.686-4.686 12.284-4.686 16.971 0l22.627 22.627c4.686 4.686 4.686 12.284 0 16.971L81.386 311.82c-34.341 34.341-33.451 88.269.597 120.866 32.577 31.187 84.788 31.337 117.445-1.32l65.057-65.056c4.686-4.686 12.284-4.686 16.971 0l22.627 22.626zm-56.568-243.245l64.304-64.304c34.346-34.346 88.286-33.453 120.882.612 31.18 32.586 31.309 84.785-1.335 117.43l-65.056 65.057c-4.686 4.686-4.686 12.284 0 16.971l22.627 22.627c4.686 4.686 12.284 4.686 16.971 0l65.056-65.057c54.711-54.709 54.721-143.271 0-197.99-54.71-54.711-143.27-54.72-197.989 0l-65.057 65.057c-4.686 4.686-4.686 12.284 0 16.971l22.627 22.627c4.685 4.685 12.283 4.685 16.97-.001zm238.343 362.794l22.627-22.627c4.686-4.686 4.686-12.284 0-16.971L43.112 3.515c-4.686-4.686-12.284-4.686-16.971 0L3.515 26.142c-4.686 4.686-4.686 12.284 0 16.971l465.373 465.373c4.686 4.686 12.284 4.686 16.97-.001z"] };
var faUnlock = { prefix: 'far', iconName: 'unlock', icon: [448, 512, [], "f09c", "M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176z"] };
var faUnlockAlt = { prefix: 'far', iconName: 'unlock-alt', icon: [448, 512, [], "f13e", "M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176zm-176-32c-15.5 0-28-12.5-28-28v-56c0-15.5 12.5-28 28-28s28 12.5 28 28v56c0 15.5-12.5 28-28 28z"] };
var faUpload = { prefix: 'far', iconName: 'upload', icon: [576, 512, [], "f093", "M528 288H384v-32h64c42.6 0 64.2-51.7 33.9-81.9l-160-160c-18.8-18.8-49.1-18.7-67.9 0l-160 160c-30.1 30.1-8.7 81.9 34 81.9h64v32H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80L288 48l160 160H336v160h-96V208H128zm400 256H48V336h144v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32h144v128zm-40-64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"] };
var faUsdCircle = { prefix: 'far', iconName: 'usd-circle', icon: [512, 512, [], "f2e8", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-20.7-47.5c0 4.1 3.4 7.5 7.5 7.5h28.8c4.1 0 7.5-3.4 7.5-7.5v-29.4c18.5-3.5 34.2-12 45.8-24.8 12.1-13.4 18.8-31 18.8-49.5 0-20.3-8.1-36.4-24.7-49.2-13.7-10.6-31.4-17.3-47.1-23.3-25.5-9.7-41-16.6-41-29.2 0-14.5 16-19.6 29.6-19.6 24.6 0 47.1 18.5 47.4 18.7 1.7 1.4 4 2 6.2 1.6 2.2-.4 4.1-1.8 5.2-3.8l17.7-32.8c1.5-2.9 1.1-6.4-1.2-8.7-.8-.9-20.1-20.7-56.8-25.9v-29.1c0-4.1-3.4-7.5-7.5-7.5h-28.8c-4.1 0-7.5 3.4-7.5 7.5v30.3c-37.7 8.5-62.5 36-62.5 70.1 0 21.2 8.3 38.1 25.4 51.6 14.1 11.1 32.2 18.2 48.2 24.5 24.3 9.5 39.1 16.1 39.1 27.3 0 14.6-14.5 21.3-27.9 21.3-28 0-53.4-22.8-53.8-23.1-1.6-1.4-3.7-2.1-5.8-1.9-2.1.2-4 1.3-5.3 3L169.9 337c-2.1 2.9-2 6.8.4 9.5 1 1.1 23.7 25.9 65 32.9v29.1z"] };
var faUsdSquare = { prefix: 'far', iconName: 'usd-square', icon: [448, 512, [], "f2e9", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zm-190.7-52.8c-41.2-7-64-31.8-65-32.9-2.4-2.7-2.6-6.6-.4-9.5l22.7-30.4c1.3-1.7 3.2-2.8 5.3-3 2.1-.2 4.2.5 5.8 1.9.4.3 25.8 23.1 53.8 23.1 13.5 0 27.9-6.7 27.9-21.3 0-11.2-14.8-17.7-39.1-27.3-16-6.3-34.1-13.4-48.2-24.5-17.1-13.5-25.4-30.4-25.4-51.6 0-34.1 24.9-61.6 62.5-70.1v-30.3c0-4.1 3.4-7.5 7.5-7.5h28.8c4.1 0 7.5 3.4 7.5 7.5v29.1c36.7 5.2 55.9 25 56.8 25.9 2.2 2.4 2.7 5.9 1.2 8.7l-17.7 33c-1.1 2-3 3.4-5.2 3.8-2.2.4-4.5-.2-6.2-1.6-.2-.2-22.8-18.7-47.4-18.7-13.7 0-29.6 5.1-29.6 19.6 0 12.6 15.5 19.5 41 29.2 15.6 6 33.4 12.7 47.1 23.3 16.6 12.8 24.7 28.9 24.7 49.2 0 18.5-6.7 36.1-18.8 49.5-11.5 12.8-27.3 21.3-45.8 24.8v29.4c0 4.1-3.4 7.5-7.5 7.5h-28.8c-4.1 0-7.5-3.4-7.5-7.5v-29.3z"] };
var faUser = { prefix: 'far', iconName: 'user', icon: [512, 512, [], "f007", "M423.309 291.025L402.221 285C431.798 243.89 436 202.294 436 180 436 80.649 355.484 0 256 0 156.649 0 76 80.516 76 180c0 22.299 4.198 63.884 33.779 105l-21.088 6.025C21.28 310.285 0 371.59 0 408.605v25.681C0 477.138 34.862 512 77.714 512h356.571C477.138 512 512 477.138 512 434.286v-25.681c0-36.247-20.725-98.161-88.691-117.58zM256 48c72.902 0 132 59.099 132 132s-59.098 132-132 132-132-59.099-132-132S183.098 48 256 48zm208 386.286c0 16.41-13.304 29.714-29.714 29.714H77.714C61.304 464 48 450.696 48 434.286v-25.681c0-33.167 21.987-62.316 53.878-71.427l46.103-13.172C162.683 335.058 200.427 360 256 360s93.317-24.942 108.019-35.994l46.103 13.172C442.013 346.29 464 375.438 464 408.605v25.681z"] };
var faUserAlt = { prefix: 'far', iconName: 'user-alt', icon: [448, 512, [], "f406", "M355.165 226.983l-11.257-3.216C353.3 209.665 368 182.136 368 144 368 64.519 303.584 0 224 0 144.519 0 80 64.416 80 144c0 38.131 14.696 65.659 24.093 79.767l-11.257 3.216C56.355 237.407 0 276.069 0 350.058v88.799C0 479.188 32.812 512 73.143 512h301.714C415.188 512 448 479.188 448 438.857v-88.799c0-73.384-55.581-112.43-92.835-123.075zM224 48c53.019 0 96 42.981 96 96s-42.981 96-96 96-96-42.981-96-96 42.981-96 96-96zm176 390.857C400 452.743 388.743 464 374.857 464H73.143C59.257 464 48 452.743 48 438.857v-88.799c0-35.719 23.678-67.109 58.022-76.922l36.46-10.417C165.929 278.843 194.106 288 224 288c29.852 0 58.036-9.133 81.518-25.281l36.46 10.417C376.322 282.949 400 314.34 400 350.058v88.799z"] };
var faUserCircle = { prefix: 'far', iconName: 'user-circle', icon: [512, 512, [], "f2bd", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.457 0 200 89.543 200 200 0 36.982-10.049 71.611-27.548 101.328-7.072-25.444-25.663-54.208-63.93-65.374C377.207 271.782 384 248.414 384 224c0-70.689-57.189-128-128-128-70.689 0-128 57.19-128 128 0 24.414 6.793 47.783 19.478 67.954-38.299 11.175-56.876 39.913-63.938 65.362C66.046 327.601 56 292.976 56 256c0-110.457 89.543-200 200-200zm80 168c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80zM128 409.669v-27.758c0-20.41 13.53-38.348 33.156-43.955l24.476-6.993C206.342 344.648 230.605 352 256 352s49.658-7.352 70.369-21.038l24.476 6.993C370.47 343.563 384 361.5 384 381.911v27.758C349.315 438.592 304.693 456 256 456s-93.315-17.408-128-46.331z"] };
var faUserMd = { prefix: 'far', iconName: 'user-md', icon: [480, 512, [], "f0f0", "M357.4 226.9c16.6-23.5 26.6-52 26.6-82.9C384 68.2 323.4 0 240 0 160.6 0 96 64.6 96 144c0 30.9 10 59.4 26.6 82.9C47.3 239.5 0 301.7 0 369.3V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V369.3c0-46.9 33.8-86.8 80-94.6v95.9c-26.3 7.9-44.7 34.5-38.9 64.5 4.1 21 20.7 38.5 41.6 43.4C167.3 487 200 459.2 200 424c0-25.3-16.9-46.5-40-53.4V269.3l8-1.3c21.3 12.4 45.6 20 72 20 23.2 0 44.7-6.1 64-16v49.6c-36.5 7.4-64 39.8-64 78.4v56c0 7.6 5.4 14.2 12.9 15.7l32.2 6.4c4.3.9 8.6-1.9 9.4-6.3l3.1-15.7c.9-4.3-1.9-8.5-6.3-9.4l-19.3-3.9v-41c0-23.2 15.6-44.5 38.4-49 30.6-6 57.6 17.5 57.6 47.1v42.9l-19.3 3.9c-4.3.9-7.1 5.1-6.3 9.4l3.1 15.7c.9 4.3 5.1 7.1 9.4 6.3l32.2-6.4c7.5-1.5 12.9-8.1 12.9-15.7v-56c0-38.6-27.5-70.9-64-78.4V272l15.8 2.6c46.3 7.7 80.2 47.8 80.2 94.7V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V369.4c0-67.3-47-129.9-122.6-142.5zM168 424c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm72-184c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"] };
var faUserPlus = { prefix: 'far', iconName: 'user-plus', icon: [640, 512, [], "f234", "M367.598 278.536l-7.622-2.178C369.414 261.154 384 232.031 384 192c0-88.312-71.573-160-160-160-88.312 0-160 71.573-160 160 0 40.06 14.607 69.189 24.025 84.358l-7.622 2.178C19.457 295.949 0 351.374 0 385.127v21.73C0 447.188 32.812 480 73.143 480h301.714C415.188 480 448 447.188 448 406.857v-21.73c0-32.887-18.858-89.007-80.402-106.591zM224 80c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112S162.144 80 224 80zm176 326.857C400 420.743 388.743 432 374.857 432H73.143C59.257 432 48 420.743 48 406.857v-21.73c0-28.064 18.604-52.729 45.589-60.439l29.583-8.452C163.711 349.212 206.592 352 224 352c17.489 0 60.312-2.807 100.828-35.763l29.583 8.452c26.985 7.71 45.589 32.374 45.589 60.439v21.729zM640 244v24c0 6.627-5.373 12-12 12h-76v76c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12v-76h-76c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h76v-76c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v76h76c6.627 0 12 5.373 12 12z"] };
var faUserSecret = { prefix: 'far', iconName: 'user-secret', icon: [448, 512, [], "f21b", "M396.951 274.003l12.85-33.731c2.992-7.854-2.809-16.272-11.214-16.272h-38.803c7.736-21.843 9.942-44.957 6.905-67.454C397.339 148.985 416 138.977 416 128c0-13.263-27.231-25.112-69.947-32.937-9.185-32.805-27.178-65.797-40.714-82.85-9.452-11.908-25.873-15.634-39.471-8.834-46.139 23.07-37.316 23.21-83.736 0-13.599-6.799-30.02-3.074-39.471 8.834-13.536 17.053-31.529 50.045-40.714 82.85C59.231 102.888 32 114.737 32 128c0 10.977 18.661 20.985 49.311 28.546-3.035 22.478-.837 45.593 6.905 67.454H50.198c-8.615 0-14.423 8.809-11.029 16.727l13.75 32.083C21.455 292.422 0 327.335 0 368v72c0 39.701 32.299 72 72 72h304c39.701 0 72-32.299 72-72v-72c0-38.986-19.836-73.669-51.049-93.997zM128.34 167.931c1.202.757 5.303 3.387 6.007 5.553 3.861 11.864 7.026 24.572 16.514 33.359 7.977 7.387 47.033 25.138 63.996-25.029 2.838-8.398 15.448-8.395 18.285 0 16.039 47.434 53.924 34.357 63.996 25.029 9.488-8.786 12.653-21.495 16.514-33.359.704-2.166 4.805-4.795 6.007-5.553.221 2.661.34 5.351.34 8.069 0 53.019-42.98 96-96 96s-96-42.981-96-96c.001-2.718.12-5.408.341-8.069zm57.364 146.91c24.31 6.708 51.021 7.056 76.592 0L240 352l16 112h-64l16-112-22.296-37.159zM48 440v-72c0-35.346 28.654-64 64-64h18.182L152 464H72c-13.255 0-24-10.745-24-24zm352 0c0 13.255-10.745 24-24 24h-80l21.818-160H336c35.346 0 64 28.654 64 64v72z"] };
var faUserTimes = { prefix: 'far', iconName: 'user-times', icon: [640, 512, [], "f235", "M631.681 326.711l-16.971 16.971c-4.686 4.686-12.284 4.686-16.971 0L544 289.941l-53.74 53.74c-4.686 4.686-12.284 4.686-16.971 0l-16.971-16.971c-4.686-4.686-4.686-12.284 0-16.971l53.74-53.74-53.74-53.74c-4.686-4.686-4.686-12.284 0-16.971l16.971-16.971c4.686-4.686 12.284-4.686 16.971 0l53.74 53.74 53.74-53.74c4.686-4.686 12.284-4.686 16.971 0l16.971 16.971c4.686 4.686 4.686 12.284 0 16.971L577.941 256l53.74 53.74c4.687 4.686 4.687 12.284 0 16.971zm-264.083-48.175l-7.622-2.178C369.414 261.154 384 232.031 384 192c0-88.312-71.573-160-160-160-88.312 0-160 71.573-160 160 0 40.06 14.607 69.189 24.025 84.358l-7.622 2.178C19.457 295.949 0 351.374 0 385.127v21.73C0 447.188 32.812 480 73.143 480h301.714C415.188 480 448 447.188 448 406.857v-21.73c0-32.887-18.858-89.007-80.402-106.591zM224 80c61.856 0 112 50.144 112 112s-50.144 112-112 112-112-50.144-112-112S162.144 80 224 80zm176 326.857C400 420.743 388.743 432 374.857 432H73.143C59.257 432 48 420.743 48 406.857v-21.73c0-28.064 18.604-52.729 45.589-60.439l29.583-8.452C163.711 349.212 206.592 352 224 352c17.489 0 60.312-2.807 100.828-35.763l29.583 8.452c26.985 7.71 45.589 32.374 45.589 60.439v21.729z"] };
var faUsers = { prefix: 'far', iconName: 'users', icon: [640, 512, [], "f0c0", "M134.393 416H61.714C27.685 416 0 388.315 0 354.286V321.85c0-31.788 17.975-69.824 58.851-85.553C51.924 223.036 48 207.969 48 192c0-52.935 43.065-96 96-96 20.507 0 39.531 6.467 55.145 17.464-8.4 16.203-13.453 34.012-14.786 52.567C175.815 152.781 160.938 144 144 144c-26.51 0-48 21.49-48 48s21.49 48 48 48a47.87 47.87 0 0 0 17.15-3.167 124.93 124.93 0 0 0-13.131 17.216c-6.534 10.303-11.575 21.603-14.968 33.318a95.31 95.31 0 0 1-36.928-12.181l-16.474 4.707C60.915 285.245 48 302.367 48 321.85v32.436C48 361.86 54.14 368 61.714 368H128v14.857A88.68 88.68 0 0 0 134.393 416zm446.756-179.703C588.076 223.036 592 207.969 592 192c0-52.935-43.065-96-96-96-20.508 0-39.532 6.468-55.147 17.465 8.401 16.205 13.455 34.014 14.789 52.566C464.185 152.781 479.062 144 496 144c26.51 0 48 21.49 48 48s-21.49 48-48 48a47.87 47.87 0 0 1-17.146-3.166 124.976 124.976 0 0 1 13.218 17.361c6.488 10.264 11.499 21.514 14.876 33.171a95.314 95.314 0 0 0 36.93-12.181l16.474 4.707C579.085 285.245 592 302.367 592 321.85v32.436c0 7.574-6.14 13.714-13.714 13.714H512v14.857A88.68 88.68 0 0 1 505.607 416h72.679c34.03 0 61.714-27.685 61.714-61.714V321.85c0-31.789-17.994-69.832-58.851-85.553zM488 322.313v60.544c0 35.92-29.223 65.143-65.143 65.143H217.143C181.223 448 152 418.777 152 382.857v-60.544c0-36.205 20.874-79.42 67.673-96.41C212.04 210.592 208 193.607 208 176c0-61.959 50.148-112 112-112 61.959 0 112 50.147 112 112 0 17.607-4.04 34.592-11.673 49.903C467.314 242.961 488 286.348 488 322.313zM256 176c0 35.346 28.654 64 64 64s64-28.654 64-64-28.654-64-64-64-64 28.654-64 64zm184 146.313c0-24.354-16.144-45.756-39.561-52.447l-13.683-3.91C367.561 280.264 344.375 288 320 288s-47.561-7.736-66.756-22.044l-13.683 3.91C216.144 276.556 200 297.959 200 322.313v60.544c0 9.468 7.675 17.143 17.143 17.143h205.714c9.468 0 17.143-7.675 17.143-17.143v-60.544z"] };
var faUtensilFork = { prefix: 'far', iconName: 'utensil-fork', icon: [512, 512, [], "f2e3", "M457.4 107.3c-6.3-24.8-28.9-46.7-52.7-52.8-10.2-39.8-60-70.8-97.6-45.2C294 18.1 230.8 60.9 207 84.8c-41.3 41.3-51.2 96.4-34.6 145.5L18.2 368.2c-23.5 21-24.3 57.5-1.9 79.9l47.6 47.6c22.6 22.6 59.1 21.4 79.9-1.9l137.9-154.3c51.5 17.4 105.9 5 145.5-34.6 23.8-23.8 66.5-86.9 75.3-100.1 26.4-38.4-6.6-87.7-45.1-97.5zm5.5 70.6s-47.8 71.3-69.7 93.1c-34.3 34.3-82.6 37-123.2 9.5L108 461.9c-2.5 2.9-7.2 2.9-10.2-.1l-47.6-47.6c-2.9-2.9-3-7.6-.1-10.2l181.4-162c-27.2-40.1-25.2-88.5 9.5-123.2 21.9-21.9 93.1-69.7 93.1-69.7 8.5-6 29.6 15.3 23.2 23.6l-90.1 90.1c-7.7 9.2 13.8 31 23.2 23.6l96.4-84.7c8.4-5.9 29.3 15 23.4 23.4l-84.7 96.4c-7.4 9.4 14.4 31 23.6 23.2l90.1-90.1c8.4-6.3 29.8 14.7 23.7 23.3z"] };
var faUtensilKnife = { prefix: 'far', iconName: 'utensil-knife', icon: [512, 512, [], "f2e4", "M463.3 16.6c-22.1-21.1-57-22.7-79-1.7L16.7 365.1c-23.2 22.1-21.9 59.1 1.8 81.7l51 48.6c23.9 22.8 61.4 22.2 82.4-1.9l122.6-140.7c66.4 8.2 128.1-.7 176.4-46.6C492 266.9 512 210.7 512 152.6c0-47.5-14.2-103.1-48.7-136zm-45.6 254.7c-43.7 41.6-103 40.6-162.1 30L115.7 461.9c-2.9 3.4-9.1 2.5-13.1-1.3l-51-48.5c-3.9-3.8-4.8-9.3-1.8-12.2L417.4 49.7c3-2.8 8.8-2.1 12.8 1.7 40.6 38.7 53.7 157-12.5 219.9z"] };
var faUtensilSpoon = { prefix: 'far', iconName: 'utensil-spoon', icon: [512, 512, [], "f2e5", "M474.4 37.5c-64-64-180.7-39.7-245.2 24.8-45 45.1-57.9 98.1-40.5 153.4L18.8 368.2c-24.2 21.7-25.3 59.4-2.2 82.5l44.7 44.7c23.3 23.3 61 21.7 82.5-2.2l152.4-169.9c53.8 16.9 107.1 5.8 153.4-40.5 63.4-63.5 89.7-180.4 24.8-245.3zm-58.7 211.2c-40.3 40.3-82.9 43-132.5 17.1L108 461.1c-3.3 3.7-9.2 4-12.8.3l-44.7-44.7c-3.6-3.6-3.4-9.4.3-12.8L246 228.7c-24.2-46.5-25.3-90.1 17.1-132.5 48.3-48.3 135.1-67 177.3-24.8 44 43.9 21.1 131.5-24.7 177.3z"] };
var faUtensils = { prefix: 'far', iconName: 'utensils', icon: [544, 512, [], "f2e7", "M288 157.5c0-30.5-12.9-97.8-15.6-111.7C267.5 20.1 244.1 0 210.6 0c-11.4 0-23.1 2.4-33.3 7.8C167.3 2.5 155.5 0 144 0c-11.5 0-23.3 2.5-33.3 7.8C100.6 2.4 88.8 0 77.4 0 44.1 0 20.5 19.9 15.6 45.8 12.9 59.6 0 126.9 0 157.5c0 52.7 28.2 94.8 69.8 116.7L59.6 454.9c-1.8 31 23.1 57.1 54.4 57.1h60c31.3 0 56.2-26.1 54.4-57.1l-10.2-180.8c41.4-21.7 69.8-63.8 69.8-116.6zm-119.7 83.6l12.2 216.5c.2 3.4-2.7 6.4-6.5 6.4h-60c-3.7 0-6.7-2.9-6.5-6.4l12.2-216.5C77.3 233 48 201.3 48 157.5c0-27.6 14.8-102.7 14.8-102.7 1.6-9.2 28.3-9 29.5.2v113.7c.9 10.6 28.2 10.8 29.5.2l7.4-114.1c1.6-9 27.9-9 29.5 0l7.4 114.1c1.3 10.6 28.6 10.4 29.5-.2V55c1.2-9.2 27.9-9.4 29.5-.2 0 0 14.8 75.1 14.8 102.7.1 43.6-29 75.4-71.6 83.6zm221.2 69.5l-13.3 142.5c-2.9 31.6 22.7 58.9 55.8 58.9h56c30.9 0 56-24.2 56-54V54c0-29.8-25.1-54-56-54-71.8 0-168 83-168 181.7 0 60.4 35 101.2 69.5 128.9zM368 181.7C368 109.1 443.4 48 488 48c4.3 0 8 2.8 8 6v404c0 3.3-3.7 6-8 6h-56c-4.6 0-8.3-3-8-6.4l15.8-169.5c-39.6-27-71.8-59-71.8-106.4z"] };
var faUtensilsAlt = { prefix: 'far', iconName: 'utensils-alt', icon: [576, 512, [], "f2e6", "M0 74.1c0 114.2 47.3 199 156.1 223L88 356.6c-31.9 28.2-33.4 77.6-3.3 107.7l26.9 26c30.3 30.3 79.6 28.5 107.7-3.3l70.1-79.1c74 87.3 67.1 79.2 68.5 80.7 28.2 30.1 76.4 31.6 106.3 1.7l26-26c29.7-29.7 28.7-78.1-2-106.6l-59.4-55.2c25.5-3.9 50.3-16.2 71.3-37.2 20.7-20.7 58.4-74.8 66.1-85.9 23.5-33.6 1.2-78.9-35.8-91.9-6.4-18.5-22.8-35.3-42-42.1-12.8-36.3-58-59.6-91.9-35.8-11.2 7.8-65.2 45.4-85.9 66.1-23 23-36.3 51.4-38.3 81.4L124.4 19.9C76.9-24.2 0 9.9 0 74.1zm348.3 153.6c-33.6-33.6-40.1-81.6-3.7-118C363.4 90.9 424 49 424 49c7.3-5.3 24.1 11.8 18.6 18.9L365 145.5c-6.7 7.8 10.5 25.3 18.6 18.9l82.6-73.3c7.2-5.1 23.9 11.5 18.7 18.7l-73.3 82.6c-6.4 8.1 11 25.3 18.9 18.6l77.6-77.6c7.1-5.5 24.1 11.3 18.9 18.6 0 0-41.9 60.6-60.7 79.5-35.8 35.8-83.8 30.5-118-3.8zm-138.7 86.1l48.5 57.1-74.6 84.3c-9.9 11.2-27.3 11.7-37.8 1.1l-26-26c-10.6-10.6-10.1-27.9 1.1-37.8l88.8-78.7zM48 74c0-22.6 27-34.5 43.7-19l364 338c10.8 10 11.1 27 .7 37.4l-26 26c-10.4 10.4-27.3 10.1-37.4-.6L223.5 256C93.5 256 48 182.8 48 74z"] };
var faVenus = { prefix: 'far', iconName: 'venus', icon: [288, 512, [], "f221", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 71.4 51.9 130.6 120 142v58H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-58c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z"] };
var faVenusDouble = { prefix: 'far', iconName: 'venus-double', icon: [512, 512, [], "f226", "M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 71.4 51.9 130.6 120 142v58H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-58c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96zm344 142v58h44c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12h-44v44c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-44h-44c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h44v-58c-24.3-4.1-46.6-14.3-65.2-28.9 10.4-12.4 19.1-26.1 25.8-41 16.9 14.9 39.1 24 63.4 24 52.9 0 96-43.1 96-96s-43.1-96-96-96c-24.3 0-46.5 9.1-63.4 24-6.7-14.9-15.4-28.7-25.8-41C303.4 43.6 334.3 32 368 32c79.5 0 144 64.5 144 144 0 71.4-51.9 130.6-120 142z"] };
var faVenusMars = { prefix: 'far', iconName: 'venus-mars', icon: [576, 512, [], "f228", "M288 208c0-79.5-64.5-144-144-144S0 128.5 0 208c0 71.4 51.9 130.6 120 142v58H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-58c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96zM576 12v63c0 10.7-12.9 16-20.5 8.5L541 69l-55.6 55.6c16.8 23.5 26.6 52.3 26.6 83.4 0 79.5-64.5 144-144 144-33.7 0-64.6-11.6-89.2-30.9 10.4-12.4 19.1-26.1 25.8-41 16.9 14.9 39.1 24 63.4 24 52.9 0 96-43.1 96-96s-43.1-96-96-96c-24.3 0-46.5 9.1-63.4 24-6.7-14.9-15.4-28.7-25.8-41C303.4 75.6 334.3 64 368 64c31.1 0 59.9 9.9 83.4 26.6L507 35l-14.5-14.5C484.9 12.9 490.3 0 501 0h63c6.6 0 12 5.4 12 12z"] };
var faVial = { prefix: 'far', iconName: 'vial', icon: [480, 512, [], "f492", "M477.7 186.1L309.9 18.3c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3l-22.3 22.3c-3.1 3.1-3.1 8.2 0 11.3L287.5 63 30.1 320.4c-40.1 40.1-40.1 105.4 0 145.5 40.1 40 105.3 40.1 145.5 0L433 208.5l11.1 11.1c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l22.3-22.3c3-3 3-8.1-.1-11.2zM141.6 432c-21.3 21.3-56.1 21.5-77.6 0-21.4-21.4-21.4-56.2 0-77.6l50.4-50.4h155.2l-128 128zm176-176H162.4L321 97.4l77.6 77.6-81 81z"] };
var faVials = { prefix: 'far', iconName: 'vials', icon: [640, 512, [], "f493", "M72 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208zm488 256H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM360 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208z"] };
var faVideo = { prefix: 'far', iconName: 'video', icon: [576, 512, [], "f03d", "M528 64h-12.118a48 48 0 0 0-33.941 14.059L384 176v-64c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-64l97.941 97.941A48 48 0 0 0 515.882 448H528c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM336 400H48V112h288v288zm192 0h-12.118L384 268.118v-24.235L515.882 112H528v288z"] };
var faVolleyballBall = { prefix: 'far', iconName: 'volleyball-ball', icon: [496, 512, [], "f45f", "M248 8C111.2 8 0 119.2 0 256s111.2 248 248 248 248-111.2 248-248S384.8 8 248 8zm146.6 383.6c-75.3 12.7-152.6-4.5-215.7-47.8 19.8-23.6 43.5-43.9 70.3-60.3 95 51.4 177.4 40.1 187.1 39.3-9.2 25.8-23.5 49.1-41.7 68.8zm52.5-118.1c-18.9 2.6-37.9 3.5-56.8 2.3 5.6-68.4-10.3-136.3-45-194.4 28.8 16.2 111.9 76.6 101.8 192.1zM291.9 61c48.8 58.9 72.6 134.6 66.7 211-30.2-5.3-59.6-15.6-87.1-30.5-1.8-65.7-22.6-128.5-59.9-182 12-2.2 41.1-7.3 80.3 1.5zM163.7 74.9C175.4 90 185.6 106 194 122.8c-62 29.3-112.9 77-145.9 136.2-1.3-87.3 52-154.4 115.6-184.1zM57.1 315.7c26.6-71.8 80.2-130.4 149.4-163.5 10.5 28.8 16.3 59.4 17.1 90.7-56 34.4-100 83.8-127.6 142.8-17.3-20.3-30.7-44-38.9-70zm76.2 103.9c7.1-17.6 15.9-34.2 26.1-49.9 33.7 23.3 98.9 59.2 190.8 57.9-30 17.9-64.8 28.4-102.2 28.4-42.7 0-82.2-13.6-114.7-36.4z"] };
var faVolumeDown = { prefix: 'far', iconName: 'volume-down', icon: [384, 512, [], "f027", "M215.029 71.058L126.059 160H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.971 88.949c15.033 15.034 40.97 4.464 40.97-16.971V88.029c0-21.315-25.861-32.078-40.971-16.971zM208 366.059l-55.029-55.029A23.997 23.997 0 0 0 136 304H48v-96h88c6.365 0 12.47-2.529 16.971-7.029L208 145.941v220.118zM384 256c0 28.854-14.167 55.903-37.896 72.354-10.892 7.55-25.843 4.845-33.397-6.05-7.552-10.894-4.844-25.846 6.05-33.397A40.061 40.061 0 0 0 336 256c0-14.052-7.169-26.823-19.176-34.162-11.311-6.913-14.875-21.685-7.962-32.994s21.686-14.875 32.993-7.962C368.245 197.011 384 225.092 384 256z"] };
var faVolumeMute = { prefix: 'far', iconName: 'volume-mute', icon: [640, 512, [], "f2e2", "M606.05 509.511L4.684 40.535C-.569 36.494-1.552 28.96 2.489 23.707L17.122 4.684C21.163-.569 28.697-1.552 33.95 2.489l601.366 468.977c5.253 4.041 6.236 11.575 2.195 16.828l-14.633 19.022c-4.04 5.253-11.575 6.236-16.828 2.195zM415.909 259.78c.054-1.257.091-2.516.091-3.78 0-30.908-15.755-58.989-42.145-75.118-11.308-6.913-26.08-3.348-32.993 7.962a23.918 23.918 0 0 0-3.367 9.786l78.414 61.15zm-17.08-119.905C437.879 163.753 464 206.804 464 256c0 12.741-1.796 25.253-5.208 37.223l39.985 31.182C507.384 302.934 512 279.762 512 256c0-65.831-34.755-124.438-88.13-157.076-11.308-6.914-26.081-3.354-32.996 7.956-6.915 11.308-3.353 26.08 7.955 32.995zm50.01-81.96C515.58 98.73 560 172.265 560 256c0 34.673-7.789 68.352-22.17 98.861l38.648 30.14C596.893 345.687 608 301.549 608 256c0-100.58-53.232-189.568-134.118-239.035-11.306-6.914-26.08-3.356-32.996 7.953-6.915 11.308-3.355 26.081 7.953 32.997zm-53.68 327.712a23.9 23.9 0 0 0 4.201 15.622c6.248 9.006 17.55 12.405 27.433 9.047l-31.634-24.669zm71.902 56.073a232.572 232.572 0 0 1-7.009 5.079c-10.892 7.554-13.598 22.507-6.043 33.398 7.554 10.893 22.507 13.596 33.398 6.043a280.725 280.725 0 0 0 18.636-14.119L467.061 441.7zM240 264.626v101.432l-55.029-55.029A24 24 0 0 0 168 304H80v-96h87.388l-61.55-48H56c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.971 88.949c15.033 15.034 40.97 4.464 40.97-16.971V302.059l-48-37.433zm48-104.596V88.029c0-21.315-25.861-32.078-40.971-16.971l-32.043 32.032L288 160.03z"] };
var faVolumeOff = { prefix: 'far', iconName: 'volume-off', icon: [256, 512, [], "f026", "M215.029 71.058L126.059 160H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.971 88.949c15.033 15.034 40.97 4.464 40.97-16.971V88.029c0-21.315-25.861-32.078-40.971-16.971zM208 366.059l-55.029-55.029A23.997 23.997 0 0 0 136 304H48v-96h88c6.365 0 12.47-2.529 16.971-7.029L208 145.941v220.118z"] };
var faVolumeUp = { prefix: 'far', iconName: 'volume-up', icon: [576, 512, [], "f028", "M215.029 71.058L126.059 160H24c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.971 88.949c15.033 15.034 40.97 4.464 40.97-16.971V88.029c0-21.315-25.861-32.078-40.971-16.971zM208 366.059l-55.029-55.029A23.997 23.997 0 0 0 136 304H48v-96h88c6.365 0 12.47-2.529 16.971-7.029L208 145.941v220.118zM576 256c0 91.784-45.081 177.849-120.592 230.221-10.891 7.553-25.844 4.85-33.398-6.043-7.555-10.892-4.849-25.845 6.043-33.398C490.637 403.372 528 332.053 528 256c0-83.735-44.42-157.27-111.161-198.085-11.308-6.916-14.868-21.688-7.953-32.996 6.916-11.309 21.69-14.867 32.996-7.953C522.768 66.432 576 155.42 576 256zM400.759 407.291c-10.89 7.552-25.842 4.851-33.399-6.042-7.555-10.891-4.85-25.845 6.042-33.399C410.094 342.398 432 300.585 432 256c0-49.196-26.121-92.247-65.171-116.125-11.308-6.915-14.87-21.688-7.955-32.996 6.915-11.309 21.688-14.87 32.996-7.956C445.245 131.562 480 190.169 480 256c0 60.315-29.623 116.873-79.241 151.291zM384 256c0 28.854-14.167 55.903-37.896 72.354-10.892 7.55-25.843 4.845-33.397-6.05-7.552-10.894-4.844-25.846 6.05-33.397A40.061 40.061 0 0 0 336 256c0-14.052-7.169-26.823-19.176-34.162-11.311-6.913-14.875-21.685-7.962-32.994s21.686-14.875 32.993-7.962C368.245 197.011 384 225.092 384 256z"] };
var faWarehouse = { prefix: 'far', iconName: 'warehouse', icon: [640, 512, [], "f494", "M504 208H136c-22.1 0-40 17.9-40 40v248c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-48h352v48c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V248c0-22.1-17.9-40-40-40zm-8 208H144v-64h352v64zm0-96H144v-64h352v64zm101.9-209.9L346.3 5.3c-17-7-35.7-7.1-52.6 0L42.1 110.1C16.5 120.7 0 145.5 0 173.2V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-8.3 4.9-15.7 12.5-18.8L312.2 49.6c5.1-2.1 10.6-2.1 15.7 0l251.6 104.8c7.6 3.2 12.5 10.6 12.5 18.8V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-27.7-16.5-52.5-42.1-63.1z"] };
var faWarehouseAlt = { prefix: 'far', iconName: 'warehouse-alt', icon: [640, 512, [], "f495", "M528 352H352V240c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zM304 464H144v-64h160v64zm0-128H144v-64h160v64zm192 128H352v-64h144v64zm101.9-353.9L346.3 5.3c-17-7-35.7-7.1-52.6 0L42.1 110.1C16.5 120.7 0 145.5 0 173.2V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-8.3 4.9-15.7 12.5-18.8L312.2 49.6c5.1-2.1 10.6-2.1 15.7 0l251.6 104.8c7.6 3.2 12.5 10.6 12.5 18.8V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-27.7-16.5-52.5-42.1-63.1z"] };
var faWatch = { prefix: 'far', iconName: 'watch', icon: [384, 512, [], "f2e1", "M320 112.9V24c0-13.2-10.8-24-24-24H88C74.8 0 64 10.8 64 24v88.9C24.7 148 0 199.1 0 256s24.7 108 64 143.1V488c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24v-88.9c39.3-35.1 64-86.2 64-143.1s-24.7-108-64-143.1zM104 40h176v45.3C253.6 71.7 223.7 64 192 64s-61.6 7.7-88 21.3V40zm176 432H104v-45.3c26.4 13.6 56.3 21.3 88 21.3s61.6-7.7 88-21.3V472zm-88-72c-78.9 0-144-63.8-144-144 0-78.6 63.5-144 144-144 78.9 0 144 63.8 144 144 0 78.6-63.5 144-144 144zm38.3-71.6l-61.1-41.6c-3.3-2.2-5.2-5.9-5.2-9.9V164c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v89.6l41.9 28.5c5.5 3.7 6.9 11.2 3.2 16.7l-18 26.4c-3.8 5.5-11.3 6.9-16.8 3.2z"] };
var faWeight = { prefix: 'far', iconName: 'weight', icon: [512, 512, [], "f496", "M448 64h-64.8C353.9 25.4 308.1 0 256 0s-97.9 25.4-127.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 48c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112S194.1 48 256 48zm208 400c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16h40.2c-4.8 15.2-8.2 31.2-8.2 48 0 88.2 71.8 160 160 160s160-71.8 160-160c0-16.8-3.3-32.8-8.2-48H448c8.8 0 16 7.2 16 16v320zM256 240c17.7 0 32-14.3 32-32 0-8.1-3.3-15.2-8.2-20.8l23.4-70.1c6.7-20.1-23.6-30.2-30.4-10.1l-23.5 70.4C235 180.5 224 192.7 224 208c0 17.7 14.3 32 32 32z"] };
var faWheelchair = { prefix: 'far', iconName: 'wheelchair', icon: [512, 512, [], "f193", "M500.1 399.78l10.65 21.494c2.937 5.928.522 13.116-5.399 16.067l-63.278 32.164c-12.134 6.014-26.981.801-32.571-11.723L344.431 312H184.003c-12.03 0-22.203-8.908-23.792-20.833C125.74 32.641 128.263 52.443 128 48c0-27.152 22.544-49.038 49.935-47.962 24.787.974 44.979 21.107 46.021 45.892 1.06 25.208-17.335 46.326-41.405 49.614L192.212 168H340c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H198.613l6.4 48H360a23.999 23.999 0 0 1 21.916 14.218l61.233 137.185 40.834-21.029c5.943-2.971 13.168-.547 16.117 5.406zM313.291 360h-11.558C290.467 419.146 238.377 464 176 464c-70.579 0-128-57.421-128-128 0-43.765 22.083-82.463 55.686-105.556l-6.884-51.587C39.428 207.89 0 267.423 0 336c0 97.047 78.953 176 176 176 70.605 0 131.621-41.797 159.636-101.941L313.291 360z"] };
var faWhistle = { prefix: 'far', iconName: 'whistle', icon: [640, 512, [], "f460", "M250.6 254c0 22.3-18.1 40.4-40.4 40.4s-40.4-18.1-40.4-40.4c0-22.3 18.1-40.4 40.4-40.4s40.4 18.1 40.4 40.4zm231.9-50.2L633.9 325c6.8 5.5 8.1 15.3 2.8 22.3l-79 105.3c-4.9 6.5-13.9 8.4-20.9 4.3l-151.7-86.8c-7.6 11.4-16.4 22.3-26.5 32.4-41 41-94.7 61.5-148.5 61.5-157 0-258.4-166.6-186.8-306A64.714 64.714 0 0 1 .2 108.4c0-35.6 29-64.6 64.6-64.6 19.2 0 36.9 8.8 49.1 23.4C144 51.7 177 44.1 210 44.1c86.7 0 126.5 42.9 194.5 97.3 5.3 4.3 7.4 11.4 5.2 17.9L399.5 189c-1.1 3.2-.1 6.8 2.6 8.9l25.5 20.4c2.6 2.1 6.3 2.4 9.2.6l27.5-16.4c5.7-3.4 13-2.9 18.2 1.3zM41 129.8c6.3-8.5 13-16.8 20.7-24.5 7.8-7.8 16.1-14.6 24.7-20.9-5.9-5.3-13.5-8.3-21.6-8.3-17.8 0-32.3 14.5-32.3 32.3 0 8.1 3.3 15.6 8.5 21.4zm533.5 219.7c2.6-3.5 2-8.4-1.4-11.2l-103.4-82.7-32.3 19.2c-5.8 3.4-13.1 2.9-18.3-1.3L349.6 218c-5.3-4.3-7.4-11.4-5.2-17.9l12.1-35.2s-52-41.5-60.6-47.8C262.1 95.9 170.5 65 96 139.5 33 202.5 33 305 96 368c30.5 30.5 71.1 47.5 114.2 47.5 102.1 0 142.2-83.7 159.7-109.9L530 397.2c3.5 2 8 1.1 10.5-2.2l34-45.5z"] };
var faWifi = { prefix: 'far', iconName: 'wifi', icon: [640, 512, [], "f1eb", "M320 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm206.08-31.833c4.648-4.87 4.406-12.638-.589-17.152-116.522-105.321-294.391-105.384-410.982 0-4.995 4.514-5.238 12.282-.589 17.152l16.577 17.367c4.491 4.706 11.893 4.951 16.732.604 98.101-88.128 247.347-88.213 345.542 0 4.839 4.347 12.241 4.102 16.732-.604l16.577-17.367zM635.722 155.51C457.688-9.308 182.014-9.032 4.278 155.51c-4.933 4.567-5.213 12.272-.571 17.135l16.58 17.371c4.513 4.728 11.993 4.987 16.793.55 159.398-147.374 406.318-147.489 565.84 0 4.8 4.438 12.279 4.179 16.793-.55l16.58-17.371c4.642-4.863 4.363-12.568-.571-17.135z"] };
var faWindow = { prefix: 'far', iconName: 'window', icon: [512, 512, [], "f40e", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-208 80c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-96 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-96 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm400 314c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"] };
var faWindowAlt = { prefix: 'far', iconName: 'window-alt', icon: [512, 512, [], "f40f", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-80 80c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-96 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-96 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm272 314c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"] };
var faWindowClose = { prefix: 'far', iconName: 'window-close', icon: [512, 512, [], "f410", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"] };
var faWindowMaximize = { prefix: 'far', iconName: 'window-maximize', icon: [512, 512, [], "f2d0", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"] };
var faWindowMinimize = { prefix: 'far', iconName: 'window-minimize', icon: [512, 512, [], "f2d1", "M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"] };
var faWindowRestore = { prefix: 'far', iconName: 'window-restore', icon: [512, 512, [], "f2d2", "M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"] };
var faWonSign = { prefix: 'far', iconName: 'won-sign', icon: [576, 512, [], "f159", "M564 168c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-46.143l17.275-72.837c1.788-7.538-3.929-14.769-11.676-14.769h-30.772a12 12 0 0 0-11.702 9.342L463.204 120h-129.98l-18.909-78.419a12.001 12.001 0 0 0-11.666-9.187h-31.597a12.001 12.001 0 0 0-11.666 9.187L240.479 120H112.602L95.529 41.833a12 12 0 0 0-11.724-9.439h-28.8c-7.717 0-13.428 7.179-11.693 14.698L60.137 120H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h59.214l11.077 48H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h81.367l47.698 206.698A12 12 0 0 0 152.758 480h42.01a12.001 12.001 0 0 0 11.666-9.187L256.295 264h61.111l49.862 206.813A12 12 0 0 0 378.934 480h44.054a12 12 0 0 0 11.676-9.231L483.704 264H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-68.912l11.384-48H564zm-440.914 0h105.818l-11.574 48h-83.761l-10.483-48zm59.327 192.808c-5.738 24.726-8.607 47.55-8.607 47.55h-1.148s-2.295-23.458-7.46-47.55L144.053 264h61.703l-23.343 96.808zM267.868 216l6.358-26.373c1.697-7.03 3.289-14.444 4.725-21.627h15.8c1.436 7.183 3.027 14.597 4.724 21.627L305.834 216h-37.966zm140.637 144.808c-5.738 24.092-7.46 47.55-7.46 47.55h-1.147s-2.869-22.824-8.607-47.55L367.947 264h62.548l-21.99 96.808zM441.397 216h-85.025l-11.574-48H452.3l-10.903 48z"] };
var faWrench = { prefix: 'far', iconName: 'wrench', icon: [512, 512, [], "f0ad", "M136 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm354.561-159.964C462.709 288.181 410.757 320 352 320a160.433 160.433 0 0 1-32.288-3.261L150.226 486.206c-34.395 34.395-90.062 34.389-124.451 0-34.31-34.312-34.31-90.14 0-124.451l169.487-169.468A160.344 160.344 0 0 1 192 160C192 71.642 263.627 0 352 0c58.748 0 110.705 31.811 138.561 79.964C509.068 111.956 485.906 152 449.013 152h-93.157l-4.571 8 4.571 8h93.157c36.958 0 60.022 40.101 41.548 72.036zm-219.834 57.806c-23.299-13.741-42.851-33.31-56.568-56.568L59.716 395.716c-15.596 15.596-15.596 40.973 0 56.568 15.633 15.633 40.936 15.632 56.568 0l154.443-154.442zM449.013 216H328l-32-56 32-56h121.013C429.647 70.524 393.455 48 352 48c-61.856 0-112 50.144-112 112s50.144 112 112 112c41.455 0 77.647-22.524 97.013-56z"] };
var faXRay = { prefix: 'far', iconName: 'x-ray', icon: [640, 512, [], "f497", "M168 224h128v32h-96c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h96v32h-56c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48h64c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48h-56v-32h96c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-96v-32h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H344v-32h96c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-96V88c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v40h-96c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h96v32H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm56 144c0-21.2 32-21.2 32 0s-32 21.1-32 0zm192 0c0 21.2-32 21.1-32 0 0-21.2 32-21.2 32 0zM632 48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v32c0 4.4 3.6 8 8 8h56v416H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-56V48h56zM528 464H112V48h416v416z"] };
var faYenSign = { prefix: 'far', iconName: 'yen-sign', icon: [384, 512, [], "f157", "M347.983 32h-44.065a12.001 12.001 0 0 0-10.555 6.291l-73.76 133.313c-13.96 29.825-27.286 64.725-27.286 64.725h-1.269s-13.326-34.901-27.287-64.725L90.689 38.328A12 12 0 0 0 80.115 32H36.017c-9.157 0-14.94 9.844-10.481 17.843L119.746 216H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h77.18l14.775 26.267V312H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h91.955v108c0 6.627 5.373 12 12 12h39.456c6.627 0 12-5.373 12-12V360H316c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-92.589v-21.733L238.185 264H316c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-52.367L358.45 49.87c4.485-7.999-1.296-17.87-10.467-17.87z"] };
var icons$1 = {
  faAddressBook: faAddressBook,
  faAddressCard: faAddressCard,
  faAdjust: faAdjust,
  faAlarmClock: faAlarmClock,
  faAlignCenter: faAlignCenter,
  faAlignJustify: faAlignJustify,
  faAlignLeft: faAlignLeft,
  faAlignRight: faAlignRight,
  faAllergies: faAllergies,
  faAmbulance: faAmbulance,
  faAmericanSignLanguageInterpreting: faAmericanSignLanguageInterpreting,
  faAnchor: faAnchor,
  faAngleDoubleDown: faAngleDoubleDown,
  faAngleDoubleLeft: faAngleDoubleLeft,
  faAngleDoubleRight: faAngleDoubleRight,
  faAngleDoubleUp: faAngleDoubleUp,
  faAngleDown: faAngleDown,
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faAngleUp: faAngleUp,
  faArchive: faArchive,
  faArrowAltCircleDown: faArrowAltCircleDown,
  faArrowAltCircleLeft: faArrowAltCircleLeft,
  faArrowAltCircleRight: faArrowAltCircleRight,
  faArrowAltCircleUp: faArrowAltCircleUp,
  faArrowAltDown: faArrowAltDown,
  faArrowAltFromBottom: faArrowAltFromBottom,
  faArrowAltFromLeft: faArrowAltFromLeft,
  faArrowAltFromRight: faArrowAltFromRight,
  faArrowAltFromTop: faArrowAltFromTop,
  faArrowAltLeft: faArrowAltLeft,
  faArrowAltRight: faArrowAltRight,
  faArrowAltSquareDown: faArrowAltSquareDown,
  faArrowAltSquareLeft: faArrowAltSquareLeft,
  faArrowAltSquareRight: faArrowAltSquareRight,
  faArrowAltSquareUp: faArrowAltSquareUp,
  faArrowAltToBottom: faArrowAltToBottom,
  faArrowAltToLeft: faArrowAltToLeft,
  faArrowAltToRight: faArrowAltToRight,
  faArrowAltToTop: faArrowAltToTop,
  faArrowAltUp: faArrowAltUp,
  faArrowCircleDown: faArrowCircleDown,
  faArrowCircleLeft: faArrowCircleLeft,
  faArrowCircleRight: faArrowCircleRight,
  faArrowCircleUp: faArrowCircleUp,
  faArrowDown: faArrowDown,
  faArrowFromBottom: faArrowFromBottom,
  faArrowFromLeft: faArrowFromLeft,
  faArrowFromRight: faArrowFromRight,
  faArrowFromTop: faArrowFromTop,
  faArrowLeft: faArrowLeft,
  faArrowRight: faArrowRight,
  faArrowSquareDown: faArrowSquareDown,
  faArrowSquareLeft: faArrowSquareLeft,
  faArrowSquareRight: faArrowSquareRight,
  faArrowSquareUp: faArrowSquareUp,
  faArrowToBottom: faArrowToBottom,
  faArrowToLeft: faArrowToLeft,
  faArrowToRight: faArrowToRight,
  faArrowToTop: faArrowToTop,
  faArrowUp: faArrowUp,
  faArrows: faArrows,
  faArrowsAlt: faArrowsAlt,
  faArrowsAltH: faArrowsAltH,
  faArrowsAltV: faArrowsAltV,
  faArrowsH: faArrowsH,
  faArrowsV: faArrowsV,
  faAssistiveListeningSystems: faAssistiveListeningSystems,
  faAsterisk: faAsterisk,
  faAt: faAt,
  faAudioDescription: faAudioDescription,
  faBackward: faBackward,
  faBadge: faBadge,
  faBadgeCheck: faBadgeCheck,
  faBalanceScale: faBalanceScale,
  faBan: faBan,
  faBandAid: faBandAid,
  faBarcode: faBarcode,
  faBarcodeAlt: faBarcodeAlt,
  faBarcodeRead: faBarcodeRead,
  faBarcodeScan: faBarcodeScan,
  faBars: faBars,
  faBaseball: faBaseball,
  faBaseballBall: faBaseballBall,
  faBasketballBall: faBasketballBall,
  faBasketballHoop: faBasketballHoop,
  faBath: faBath,
  faBatteryBolt: faBatteryBolt,
  faBatteryEmpty: faBatteryEmpty,
  faBatteryFull: faBatteryFull,
  faBatteryHalf: faBatteryHalf,
  faBatteryQuarter: faBatteryQuarter,
  faBatterySlash: faBatterySlash,
  faBatteryThreeQuarters: faBatteryThreeQuarters,
  faBed: faBed,
  faBeer: faBeer,
  faBell: faBell,
  faBellSlash: faBellSlash,
  faBicycle: faBicycle,
  faBinoculars: faBinoculars,
  faBirthdayCake: faBirthdayCake,
  faBlind: faBlind,
  faBold: faBold,
  faBolt: faBolt,
  faBomb: faBomb,
  faBook: faBook,
  faBookmark: faBookmark,
  faBowlingBall: faBowlingBall,
  faBowlingPins: faBowlingPins,
  faBox: faBox,
  faBoxCheck: faBoxCheck,
  faBoxes: faBoxes,
  faBoxingGlove: faBoxingGlove,
  faBraille: faBraille,
  faBriefcase: faBriefcase,
  faBriefcaseMedical: faBriefcaseMedical,
  faBrowser: faBrowser,
  faBug: faBug,
  faBuilding: faBuilding,
  faBullhorn: faBullhorn,
  faBullseye: faBullseye,
  faBurn: faBurn,
  faBus: faBus,
  faCalculator: faCalculator,
  faCalendar: faCalendar,
  faCalendarAlt: faCalendarAlt,
  faCalendarCheck: faCalendarCheck,
  faCalendarEdit: faCalendarEdit,
  faCalendarExclamation: faCalendarExclamation,
  faCalendarMinus: faCalendarMinus,
  faCalendarPlus: faCalendarPlus,
  faCalendarTimes: faCalendarTimes,
  faCamera: faCamera,
  faCameraAlt: faCameraAlt,
  faCameraRetro: faCameraRetro,
  faCapsules: faCapsules,
  faCar: faCar,
  faCaretCircleDown: faCaretCircleDown,
  faCaretCircleLeft: faCaretCircleLeft,
  faCaretCircleRight: faCaretCircleRight,
  faCaretCircleUp: faCaretCircleUp,
  faCaretDown: faCaretDown,
  faCaretLeft: faCaretLeft,
  faCaretRight: faCaretRight,
  faCaretSquareDown: faCaretSquareDown,
  faCaretSquareLeft: faCaretSquareLeft,
  faCaretSquareRight: faCaretSquareRight,
  faCaretSquareUp: faCaretSquareUp,
  faCaretUp: faCaretUp,
  faCartArrowDown: faCartArrowDown,
  faCartPlus: faCartPlus,
  faCertificate: faCertificate,
  faChartArea: faChartArea,
  faChartBar: faChartBar,
  faChartLine: faChartLine,
  faChartPie: faChartPie,
  faCheck: faCheck,
  faCheckCircle: faCheckCircle,
  faCheckSquare: faCheckSquare,
  faChess: faChess,
  faChessBishop: faChessBishop,
  faChessBishopAlt: faChessBishopAlt,
  faChessBoard: faChessBoard,
  faChessClock: faChessClock,
  faChessClockAlt: faChessClockAlt,
  faChessKing: faChessKing,
  faChessKingAlt: faChessKingAlt,
  faChessKnight: faChessKnight,
  faChessKnightAlt: faChessKnightAlt,
  faChessPawn: faChessPawn,
  faChessPawnAlt: faChessPawnAlt,
  faChessQueen: faChessQueen,
  faChessQueenAlt: faChessQueenAlt,
  faChessRook: faChessRook,
  faChessRookAlt: faChessRookAlt,
  faChevronCircleDown: faChevronCircleDown,
  faChevronCircleLeft: faChevronCircleLeft,
  faChevronCircleRight: faChevronCircleRight,
  faChevronCircleUp: faChevronCircleUp,
  faChevronDoubleDown: faChevronDoubleDown,
  faChevronDoubleLeft: faChevronDoubleLeft,
  faChevronDoubleRight: faChevronDoubleRight,
  faChevronDoubleUp: faChevronDoubleUp,
  faChevronDown: faChevronDown,
  faChevronLeft: faChevronLeft,
  faChevronRight: faChevronRight,
  faChevronSquareDown: faChevronSquareDown,
  faChevronSquareLeft: faChevronSquareLeft,
  faChevronSquareRight: faChevronSquareRight,
  faChevronSquareUp: faChevronSquareUp,
  faChevronUp: faChevronUp,
  faChild: faChild,
  faCircle: faCircle,
  faCircleNotch: faCircleNotch,
  faClipboard: faClipboard,
  faClipboardCheck: faClipboardCheck,
  faClipboardList: faClipboardList,
  faClock: faClock,
  faClone: faClone,
  faClosedCaptioning: faClosedCaptioning,
  faCloud: faCloud,
  faCloudDownload: faCloudDownload,
  faCloudDownloadAlt: faCloudDownloadAlt,
  faCloudUpload: faCloudUpload,
  faCloudUploadAlt: faCloudUploadAlt,
  faClub: faClub,
  faCode: faCode,
  faCodeBranch: faCodeBranch,
  faCodeCommit: faCodeCommit,
  faCodeMerge: faCodeMerge,
  faCoffee: faCoffee,
  faCog: faCog,
  faCogs: faCogs,
  faColumns: faColumns,
  faComment: faComment,
  faCommentAlt: faCommentAlt,
  faComments: faComments,
  faCompass: faCompass,
  faCompress: faCompress,
  faCompressAlt: faCompressAlt,
  faCompressWide: faCompressWide,
  faConveyorBelt: faConveyorBelt,
  faConveyorBeltAlt: faConveyorBeltAlt,
  faCopy: faCopy,
  faCopyright: faCopyright,
  faCreditCard: faCreditCard,
  faCreditCardBlank: faCreditCardBlank,
  faCreditCardFront: faCreditCardFront,
  faCricket: faCricket,
  faCrop: faCrop,
  faCrosshairs: faCrosshairs,
  faCube: faCube,
  faCubes: faCubes,
  faCurling: faCurling,
  faCut: faCut,
  faDatabase: faDatabase,
  faDeaf: faDeaf,
  faDesktop: faDesktop,
  faDesktopAlt: faDesktopAlt,
  faDiagnoses: faDiagnoses,
  faDiamond: faDiamond,
  faDna: faDna,
  faDollarSign: faDollarSign,
  faDolly: faDolly,
  faDollyEmpty: faDollyEmpty,
  faDollyFlatbed: faDollyFlatbed,
  faDollyFlatbedAlt: faDollyFlatbedAlt,
  faDollyFlatbedEmpty: faDollyFlatbedEmpty,
  faDotCircle: faDotCircle,
  faDownload: faDownload,
  faDumbbell: faDumbbell,
  faEdit: faEdit,
  faEject: faEject,
  faEllipsisH: faEllipsisH,
  faEllipsisHAlt: faEllipsisHAlt,
  faEllipsisV: faEllipsisV,
  faEllipsisVAlt: faEllipsisVAlt,
  faEnvelope: faEnvelope,
  faEnvelopeOpen: faEnvelopeOpen,
  faEnvelopeSquare: faEnvelopeSquare,
  faEraser: faEraser,
  faEuroSign: faEuroSign,
  faExchange: faExchange,
  faExchangeAlt: faExchangeAlt,
  faExclamation: faExclamation,
  faExclamationCircle: faExclamationCircle,
  faExclamationSquare: faExclamationSquare,
  faExclamationTriangle: faExclamationTriangle,
  faExpand: faExpand,
  faExpandAlt: faExpandAlt,
  faExpandArrows: faExpandArrows,
  faExpandArrowsAlt: faExpandArrowsAlt,
  faExpandWide: faExpandWide,
  faExternalLink: faExternalLink,
  faExternalLinkAlt: faExternalLinkAlt,
  faExternalLinkSquare: faExternalLinkSquare,
  faExternalLinkSquareAlt: faExternalLinkSquareAlt,
  faEye: faEye,
  faEyeDropper: faEyeDropper,
  faEyeSlash: faEyeSlash,
  faFastBackward: faFastBackward,
  faFastForward: faFastForward,
  faFax: faFax,
  faFemale: faFemale,
  faFieldHockey: faFieldHockey,
  faFighterJet: faFighterJet,
  faFile: faFile,
  faFileAlt: faFileAlt,
  faFileArchive: faFileArchive,
  faFileAudio: faFileAudio,
  faFileCheck: faFileCheck,
  faFileCode: faFileCode,
  faFileEdit: faFileEdit,
  faFileExcel: faFileExcel,
  faFileExclamation: faFileExclamation,
  faFileImage: faFileImage,
  faFileMedical: faFileMedical,
  faFileMedicalAlt: faFileMedicalAlt,
  faFileMinus: faFileMinus,
  faFilePdf: faFilePdf,
  faFilePlus: faFilePlus,
  faFilePowerpoint: faFilePowerpoint,
  faFileTimes: faFileTimes,
  faFileVideo: faFileVideo,
  faFileWord: faFileWord,
  faFilm: faFilm,
  faFilmAlt: faFilmAlt,
  faFilter: faFilter,
  faFire: faFire,
  faFireExtinguisher: faFireExtinguisher,
  faFirstAid: faFirstAid,
  faFlag: faFlag,
  faFlagCheckered: faFlagCheckered,
  faFlask: faFlask,
  faFolder: faFolder,
  faFolderOpen: faFolderOpen,
  faFont: faFont,
  faFootballBall: faFootballBall,
  faFootballHelmet: faFootballHelmet,
  faForklift: faForklift,
  faForward: faForward,
  faFrown: faFrown,
  faFutbol: faFutbol,
  faGamepad: faGamepad,
  faGavel: faGavel,
  faGem: faGem,
  faGenderless: faGenderless,
  faGift: faGift,
  faGlassMartini: faGlassMartini,
  faGlobe: faGlobe,
  faGolfBall: faGolfBall,
  faGolfClub: faGolfClub,
  faGraduationCap: faGraduationCap,
  faHSquare: faHSquare,
  faH1: faH1,
  faH2: faH2,
  faH3: faH3,
  faHandHoldingBox: faHandHoldingBox,
  faHandLizard: faHandLizard,
  faHandPaper: faHandPaper,
  faHandPeace: faHandPeace,
  faHandPointDown: faHandPointDown,
  faHandPointLeft: faHandPointLeft,
  faHandPointRight: faHandPointRight,
  faHandPointUp: faHandPointUp,
  faHandPointer: faHandPointer,
  faHandReceiving: faHandReceiving,
  faHandRock: faHandRock,
  faHandScissors: faHandScissors,
  faHandSpock: faHandSpock,
  faHandshake: faHandshake,
  faHashtag: faHashtag,
  faHdd: faHdd,
  faHeading: faHeading,
  faHeadphones: faHeadphones,
  faHeart: faHeart,
  faHeartbeat: faHeartbeat,
  faHexagon: faHexagon,
  faHistory: faHistory,
  faHockeyPuck: faHockeyPuck,
  faHockeySticks: faHockeySticks,
  faHome: faHome,
  faHospital: faHospital,
  faHospitalAlt: faHospitalAlt,
  faHospitalSymbol: faHospitalSymbol,
  faHourglass: faHourglass,
  faHourglassEnd: faHourglassEnd,
  faHourglassHalf: faHourglassHalf,
  faHourglassStart: faHourglassStart,
  faICursor: faICursor,
  faIdBadge: faIdBadge,
  faIdCard: faIdCard,
  faIdCardAlt: faIdCardAlt,
  faImage: faImage,
  faImages: faImages,
  faInbox: faInbox,
  faInboxIn: faInboxIn,
  faInboxOut: faInboxOut,
  faIndent: faIndent,
  faIndustry: faIndustry,
  faIndustryAlt: faIndustryAlt,
  faInfo: faInfo,
  faInfoCircle: faInfoCircle,
  faInfoSquare: faInfoSquare,
  faInventory: faInventory,
  faItalic: faItalic,
  faJackOLantern: faJackOLantern,
  faKey: faKey,
  faKeyboard: faKeyboard,
  faLanguage: faLanguage,
  faLaptop: faLaptop,
  faLeaf: faLeaf,
  faLemon: faLemon,
  faLevelDown: faLevelDown,
  faLevelDownAlt: faLevelDownAlt,
  faLevelUp: faLevelUp,
  faLevelUpAlt: faLevelUpAlt,
  faLifeRing: faLifeRing,
  faLightbulb: faLightbulb,
  faLink: faLink,
  faLiraSign: faLiraSign,
  faList: faList,
  faListAlt: faListAlt,
  faListOl: faListOl,
  faListUl: faListUl,
  faLocationArrow: faLocationArrow,
  faLock: faLock,
  faLockAlt: faLockAlt,
  faLockOpen: faLockOpen,
  faLockOpenAlt: faLockOpenAlt,
  faLongArrowAltDown: faLongArrowAltDown,
  faLongArrowAltLeft: faLongArrowAltLeft,
  faLongArrowAltRight: faLongArrowAltRight,
  faLongArrowAltUp: faLongArrowAltUp,
  faLongArrowDown: faLongArrowDown,
  faLongArrowLeft: faLongArrowLeft,
  faLongArrowRight: faLongArrowRight,
  faLongArrowUp: faLongArrowUp,
  faLowVision: faLowVision,
  faLuchador: faLuchador,
  faMagic: faMagic,
  faMagnet: faMagnet,
  faMale: faMale,
  faMap: faMap,
  faMapMarker: faMapMarker,
  faMapMarkerAlt: faMapMarkerAlt,
  faMapPin: faMapPin,
  faMapSigns: faMapSigns,
  faMars: faMars,
  faMarsDouble: faMarsDouble,
  faMarsStroke: faMarsStroke,
  faMarsStrokeH: faMarsStrokeH,
  faMarsStrokeV: faMarsStrokeV,
  faMedkit: faMedkit,
  faMeh: faMeh,
  faMercury: faMercury,
  faMicrochip: faMicrochip,
  faMicrophone: faMicrophone,
  faMicrophoneAlt: faMicrophoneAlt,
  faMicrophoneSlash: faMicrophoneSlash,
  faMinus: faMinus,
  faMinusCircle: faMinusCircle,
  faMinusHexagon: faMinusHexagon,
  faMinusOctagon: faMinusOctagon,
  faMinusSquare: faMinusSquare,
  faMobile: faMobile,
  faMobileAlt: faMobileAlt,
  faMobileAndroid: faMobileAndroid,
  faMobileAndroidAlt: faMobileAndroidAlt,
  faMoneyBill: faMoneyBill,
  faMoneyBillAlt: faMoneyBillAlt,
  faMoon: faMoon,
  faMotorcycle: faMotorcycle,
  faMousePointer: faMousePointer,
  faMusic: faMusic,
  faNeuter: faNeuter,
  faNewspaper: faNewspaper,
  faNotesMedical: faNotesMedical,
  faObjectGroup: faObjectGroup,
  faObjectUngroup: faObjectUngroup,
  faOctagon: faOctagon,
  faOutdent: faOutdent,
  faPaintBrush: faPaintBrush,
  faPallet: faPallet,
  faPalletAlt: faPalletAlt,
  faPaperPlane: faPaperPlane,
  faPaperclip: faPaperclip,
  faParagraph: faParagraph,
  faPaste: faPaste,
  faPause: faPause,
  faPauseCircle: faPauseCircle,
  faPaw: faPaw,
  faPen: faPen,
  faPenAlt: faPenAlt,
  faPenSquare: faPenSquare,
  faPencil: faPencil,
  faPencilAlt: faPencilAlt,
  faPennant: faPennant,
  faPercent: faPercent,
  faPhone: faPhone,
  faPhoneSlash: faPhoneSlash,
  faPhoneSquare: faPhoneSquare,
  faPhoneVolume: faPhoneVolume,
  faPills: faPills,
  faPlane: faPlane,
  faPlaneAlt: faPlaneAlt,
  faPlay: faPlay,
  faPlayCircle: faPlayCircle,
  faPlug: faPlug,
  faPlus: faPlus,
  faPlusCircle: faPlusCircle,
  faPlusHexagon: faPlusHexagon,
  faPlusOctagon: faPlusOctagon,
  faPlusSquare: faPlusSquare,
  faPodcast: faPodcast,
  faPoo: faPoo,
  faPortrait: faPortrait,
  faPoundSign: faPoundSign,
  faPowerOff: faPowerOff,
  faPrescriptionBottle: faPrescriptionBottle,
  faPrescriptionBottleAlt: faPrescriptionBottleAlt,
  faPrint: faPrint,
  faProcedures: faProcedures,
  faPuzzlePiece: faPuzzlePiece,
  faQrcode: faQrcode,
  faQuestion: faQuestion,
  faQuestionCircle: faQuestionCircle,
  faQuestionSquare: faQuestionSquare,
  faQuidditch: faQuidditch,
  faQuoteLeft: faQuoteLeft,
  faQuoteRight: faQuoteRight,
  faRacquet: faRacquet,
  faRandom: faRandom,
  faRectangleLandscape: faRectangleLandscape,
  faRectanglePortrait: faRectanglePortrait,
  faRectangleWide: faRectangleWide,
  faRecycle: faRecycle,
  faRedo: faRedo,
  faRedoAlt: faRedoAlt,
  faRegistered: faRegistered,
  faRepeat: faRepeat,
  faRepeat1: faRepeat1,
  faRepeat1Alt: faRepeat1Alt,
  faRepeatAlt: faRepeatAlt,
  faReply: faReply,
  faReplyAll: faReplyAll,
  faRetweet: faRetweet,
  faRetweetAlt: faRetweetAlt,
  faRoad: faRoad,
  faRocket: faRocket,
  faRss: faRss,
  faRssSquare: faRssSquare,
  faRubleSign: faRubleSign,
  faRupeeSign: faRupeeSign,
  faSave: faSave,
  faScanner: faScanner,
  faScannerKeyboard: faScannerKeyboard,
  faScannerTouchscreen: faScannerTouchscreen,
  faScrubber: faScrubber,
  faSearch: faSearch,
  faSearchMinus: faSearchMinus,
  faSearchPlus: faSearchPlus,
  faServer: faServer,
  faShare: faShare,
  faShareAll: faShareAll,
  faShareAlt: faShareAlt,
  faShareAltSquare: faShareAltSquare,
  faShareSquare: faShareSquare,
  faShekelSign: faShekelSign,
  faShield: faShield,
  faShieldAlt: faShieldAlt,
  faShieldCheck: faShieldCheck,
  faShip: faShip,
  faShippingFast: faShippingFast,
  faShippingTimed: faShippingTimed,
  faShoppingBag: faShoppingBag,
  faShoppingBasket: faShoppingBasket,
  faShoppingCart: faShoppingCart,
  faShower: faShower,
  faShuttlecock: faShuttlecock,
  faSignIn: faSignIn,
  faSignInAlt: faSignInAlt,
  faSignLanguage: faSignLanguage,
  faSignOut: faSignOut,
  faSignOutAlt: faSignOutAlt,
  faSignal: faSignal,
  faSitemap: faSitemap,
  faSlidersH: faSlidersH,
  faSlidersHSquare: faSlidersHSquare,
  faSlidersV: faSlidersV,
  faSlidersVSquare: faSlidersVSquare,
  faSmile: faSmile,
  faSmoking: faSmoking,
  faSnowflake: faSnowflake,
  faSort: faSort,
  faSortAlphaDown: faSortAlphaDown,
  faSortAlphaUp: faSortAlphaUp,
  faSortAmountDown: faSortAmountDown,
  faSortAmountUp: faSortAmountUp,
  faSortDown: faSortDown,
  faSortNumericDown: faSortNumericDown,
  faSortNumericUp: faSortNumericUp,
  faSortUp: faSortUp,
  faSpaceShuttle: faSpaceShuttle,
  faSpade: faSpade,
  faSpinner: faSpinner,
  faSpinnerThird: faSpinnerThird,
  faSquare: faSquare,
  faSquareFull: faSquareFull,
  faStar: faStar,
  faStarExclamation: faStarExclamation,
  faStarHalf: faStarHalf,
  faStepBackward: faStepBackward,
  faStepForward: faStepForward,
  faStethoscope: faStethoscope,
  faStickyNote: faStickyNote,
  faStop: faStop,
  faStopCircle: faStopCircle,
  faStopwatch: faStopwatch,
  faStreetView: faStreetView,
  faStrikethrough: faStrikethrough,
  faSubscript: faSubscript,
  faSubway: faSubway,
  faSuitcase: faSuitcase,
  faSun: faSun,
  faSuperscript: faSuperscript,
  faSync: faSync,
  faSyncAlt: faSyncAlt,
  faSyringe: faSyringe,
  faTable: faTable,
  faTableTennis: faTableTennis,
  faTablet: faTablet,
  faTabletAlt: faTabletAlt,
  faTabletAndroid: faTabletAndroid,
  faTabletAndroidAlt: faTabletAndroidAlt,
  faTabletRugged: faTabletRugged,
  faTablets: faTablets,
  faTachometer: faTachometer,
  faTachometerAlt: faTachometerAlt,
  faTag: faTag,
  faTags: faTags,
  faTasks: faTasks,
  faTaxi: faTaxi,
  faTennisBall: faTennisBall,
  faTerminal: faTerminal,
  faTextHeight: faTextHeight,
  faTextWidth: faTextWidth,
  faTh: faTh,
  faThLarge: faThLarge,
  faThList: faThList,
  faThermometer: faThermometer,
  faThermometerEmpty: faThermometerEmpty,
  faThermometerFull: faThermometerFull,
  faThermometerHalf: faThermometerHalf,
  faThermometerQuarter: faThermometerQuarter,
  faThermometerThreeQuarters: faThermometerThreeQuarters,
  faThumbsDown: faThumbsDown,
  faThumbsUp: faThumbsUp,
  faThumbtack: faThumbtack,
  faTicket: faTicket,
  faTicketAlt: faTicketAlt,
  faTimes: faTimes,
  faTimesCircle: faTimesCircle,
  faTimesHexagon: faTimesHexagon,
  faTimesOctagon: faTimesOctagon,
  faTimesSquare: faTimesSquare,
  faTint: faTint,
  faToggleOff: faToggleOff,
  faToggleOn: faToggleOn,
  faTrademark: faTrademark,
  faTrain: faTrain,
  faTransgender: faTransgender,
  faTransgenderAlt: faTransgenderAlt,
  faTrash: faTrash,
  faTrashAlt: faTrashAlt,
  faTree: faTree,
  faTreeAlt: faTreeAlt,
  faTriangle: faTriangle,
  faTrophy: faTrophy,
  faTrophyAlt: faTrophyAlt,
  faTruck: faTruck,
  faTty: faTty,
  faTv: faTv,
  faTvRetro: faTvRetro,
  faUmbrella: faUmbrella,
  faUnderline: faUnderline,
  faUndo: faUndo,
  faUndoAlt: faUndoAlt,
  faUniversalAccess: faUniversalAccess,
  faUniversity: faUniversity,
  faUnlink: faUnlink,
  faUnlock: faUnlock,
  faUnlockAlt: faUnlockAlt,
  faUpload: faUpload,
  faUsdCircle: faUsdCircle,
  faUsdSquare: faUsdSquare,
  faUser: faUser,
  faUserAlt: faUserAlt,
  faUserCircle: faUserCircle,
  faUserMd: faUserMd,
  faUserPlus: faUserPlus,
  faUserSecret: faUserSecret,
  faUserTimes: faUserTimes,
  faUsers: faUsers,
  faUtensilFork: faUtensilFork,
  faUtensilKnife: faUtensilKnife,
  faUtensilSpoon: faUtensilSpoon,
  faUtensils: faUtensils,
  faUtensilsAlt: faUtensilsAlt,
  faVenus: faVenus,
  faVenusDouble: faVenusDouble,
  faVenusMars: faVenusMars,
  faVial: faVial,
  faVials: faVials,
  faVideo: faVideo,
  faVolleyballBall: faVolleyballBall,
  faVolumeDown: faVolumeDown,
  faVolumeMute: faVolumeMute,
  faVolumeOff: faVolumeOff,
  faVolumeUp: faVolumeUp,
  faWarehouse: faWarehouse,
  faWarehouseAlt: faWarehouseAlt,
  faWatch: faWatch,
  faWeight: faWeight,
  faWheelchair: faWheelchair,
  faWhistle: faWhistle,
  faWifi: faWifi,
  faWindow: faWindow,
  faWindowAlt: faWindowAlt,
  faWindowClose: faWindowClose,
  faWindowMaximize: faWindowMaximize,
  faWindowMinimize: faWindowMinimize,
  faWindowRestore: faWindowRestore,
  faWonSign: faWonSign,
  faWrench: faWrench,
  faXRay: faXRay,
  faYenSign: faYenSign
};

bunker(function () {
  define('far', icons$1);
});


/* harmony default export */ __webpack_exports__["default"] = (icons$1);


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome/index.es.js ***!
  \***********************************************************/
/*! exports provided: config, icon, noAuto, layer, text, library, dom, parse, findIconDefinition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.0.7 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.7"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ __webpack_exports__["default"] = (api$1);


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./FeatureDashboard.Web/app.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./FeatureDashboard.Web/app.ts */"./FeatureDashboard.Web/app.ts");


/***/ })

/******/ });