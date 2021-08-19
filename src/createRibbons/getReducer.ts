// import sortBy from 'lodash-es/sortBy';
// import {
//   ProductClass,
//   TradeDirection,
//   TradeFlow,
// } from '../../graphQL/graphQLTypes';
// import {
//   CountryMetadatumLevel,
//   DataSource as Source,
//   hashJSONObject,
//   ProductMetadatumLevel,
// } from '../../Utils';
// import {
//   GraphSubject as Subject,
// } from '../../viz/Utils';
// import getGraphDataCache, {
//   IBaseState,
//   IUpdateMergedDataActionBase,
//   IUpdateMergedDataPayloadBase,
//   RoutingInputCheckResult,
// } from '../newGraphDataCache';
// import {
  // ErrorCode,
  // IDiscriminant,
  // IMergeOutput,
  // InflationAdjustment,
  // Layout,
  // Ordering,
  // PopulationAdjustment,
// } from './Utils';

// export interface IHash {
//   // from UIState:
//   svgWidth: number | undefined;
//   svgHeight: number | undefined;
//   svgTop: number | undefined;
//   svgLeft: number | undefined;
//   deselectedCategories: number[];
//   populationAdjustment: PopulationAdjustment;
//   inflationAdjustment: InflationAdjustment;
//   layout: Layout;
//   productLevel: ProductMetadatumLevel;
//   countryLevel: CountryMetadatumLevel;
//   ordering: Ordering;

//   // from URL routing:
//   country: number | undefined;
//   endYear: number;
//   startYear: number;
//   productClass: ProductClass;
//   tradeDirection: TradeDirection;
//   tradeFlow: TradeFlow;
//   product: number | undefined;
//   target: Target;
//   partner: number | undefined;
// }

// export const getHashInputFromRoutingAndUIState =
//   (inputFromURLRouting: IInputFromURLRouting, uiState: IUIState) => {

//   const {
//     country, product, target, partner,
//     endYear, startYear,
//     productClass, tradeDirection, tradeFlow,
//   } = inputFromURLRouting;

//   const {
//     svgWidth, svgHeight, svgTop, svgLeft,
//     deselectedCategories,
//     populationAdjustment, inflationAdjustment,
//     layout, productLevel, countryLevel, ordering,
//   } = uiState;

//   const output: IHash = {
//     country, product, target, partner,
//     endYear, startYear,
//     productClass, tradeDirection, tradeFlow,
//     svgWidth, svgHeight, svgTop, svgLeft,
//     deselectedCategories,
//     populationAdjustment, inflationAdjustment,
//     layout, productLevel, countryLevel, ordering,
//   };
//   return output;
// };
// const hashFunction = (input: IHash) => {
//   // Sort the `selectedCategories` array to ensure identical hash regardless of
//   // the order of its elements:
//   const withSortedCategories = {
//     ...input,
//     deselectedCategories: sortBy(input.deselectedCategories),
//   };
//   return hashJSONObject(withSortedCategories);
// };

// export interface IValidInputFromURLRoutingCheckInput {
//   country: number | undefined;
//   partner: number | undefined;
//   product: number | undefined;
//   target: Target;
// }

// export interface IHasError {
//   hasError: true;
//   errorCode: ErrorCode;
// }

// export type MergedData = IHasError | IHasNoError;
// const doesMergedDataIndicateSuccess = (mergedData: MergedData) => {
//   if (mergedData.hasError === true) {
//     return false;
//   } else if (mergedData.value.status !== LoadableStatus.Present) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export interface IUIState {
//   // DOM layout informations for chart container element:
//   svgWidth: number | undefined;
//   svgHeight: number | undefined;
//   svgTop: number | undefined;
//   svgLeft: number | undefined;

//   deselectedCategories: number[];
//   populationAdjustment: PopulationAdjustment;
//   inflationAdjustment: InflationAdjustment;
//   layout: Layout;
//   productLevel: ProductMetadatumLevel;
//   countryLevel: CountryMetadatumLevel;
//   ordering: Ordering;
// }

// export interface IInputFromURLRouting {
//   country: number | undefined;
//   endYear: number;
//   startYear: number;
//   productClass: ProductClass;
//   tradeDirection: TradeDirection;
//   tradeFlow: TradeFlow;
//   product: number | undefined;
//   target: Target;
//   partner: number | undefined;
// }

// export type IState = IBaseState<IUIState, MergedData, IInputFromURLRouting>;

// export type ISuccessfulMergePayload = IUpdateMergedDataPayloadBase<IHash, MergedData>;

// export type ISuccessfulMergeAction =
//   IUpdateMergedDataActionBase<typeof UPDATE_MERGED_DATA, ISuccessfulMergePayload>;

// // Note: only use this to create the enhancer:
// export const START_SUBSCRIBING = 'STACK_GRAPH_START_SUBSCRIBIBNG';
// export const STOP_SUBSCRIBING = 'STACK_GRAPH_STOP_SUBSCRIBIBNG';

// export const UPDATE_MERGED_DATA = 'STACK_GRAPH_UPDATE_MERGED_DATA';
// const UPDATE_UI_STATE = 'STACK_GRAPH_UPDATE_UI_STATE';
// const UPDATE_INPUT_FROM_URL_ROUTING = 'STACK_GRAPH_UPDATE_INPUT_FROM_URL_ROUTING';
// const RESET = 'STACK_GRAPH_RESET';

// export const checkForInvalidRoutingInput = (
//     {country, partner, product, target}: IValidInputFromURLRoutingCheckInput,
//   ): RoutingInputCheckResult<IHasError, IDiscriminant> => {

//   if (target === Target.Product) {
//     if (country !== undefined && product === undefined) {
//       return {
//         isValid: true,
//         extraInfo: {source: Source.CPY, subject: Subject.Product},
//       };
//     } else if (country === undefined && product !== undefined) {
//       return {
//         isValid: true,
//         extraInfo: {source: Source.CPY, subject: Subject.Country},
//       };
//     } else if (country !== undefined && product !== undefined) {
//       return {
//         isValid: true,
//         extraInfo: {
//           source: Source.CCPY, subject: Subject.Country,
//         },
//       };
//     } else {
//       return {
//         isValid: false,
//         value: {hasError: true, errorCode: ErrorCode.PickCountryOrProduct},
//       };
//     }
//   } else {
//     if (country !== undefined && partner !== undefined) {
//       return {
//         isValid: true,
//         extraInfo: {source: Source.CCPY, subject: Subject.Product},
//       };
//     } else if (country !== undefined && partner === undefined) {
//       return {
//         isValid: true,
//         extraInfo: {source: Source.CCY, subject: Subject.Country},
//       };
//     } else {
//       return {
//         isValid: false,
//         value: {hasError: true, errorCode: ErrorCode.PickCountryOrPartner},
//       };

//     }
//   }
// };
// const computedDataForValidButUncomputedHashKey: IHasNoError = {
//   hasError: false,
//   value: {status: LoadableStatus.Initial},
// };

// const initialInputFromURLRouting: IInputFromURLRouting = {
//   country: undefined,
//   endYear: 0,
//   startYear: 0,
//   productClass: ProductClass.HS,
//   tradeDirection: TradeDirection.export,
//   tradeFlow: TradeFlow.Gross,
//   product: undefined,
//   target: Target.Product,
//   partner: undefined,
// };

// // Reset product clas categories when changing between product classes or
// // between product and countries:
// const updateUIStateBasedOnURLRoutingUpdate = (
//     nextInputFromRouting: IInputFromURLRouting,
//     prevInputFromRouting: IInputFromURLRouting,
//     prevUIState: IUIState): Partial<IUIState> => {

//   const {deselectedCategories: prevDeselectedCategories} = prevUIState;
//   const prevRoutingInpuValidity = checkForInvalidRoutingInput(prevInputFromRouting);
//   const nextRoutingInpuValidity = checkForInvalidRoutingInput(nextInputFromRouting);

//   const hasProductClassChanged = nextInputFromRouting.productClass !== prevInputFromRouting.productClass;
//   const hasGraphSubTypeChanged =
//     prevRoutingInpuValidity.isValid === true &&
//     nextRoutingInpuValidity.isValid === true &&
//     (nextRoutingInpuValidity.extraInfo.source !== prevRoutingInpuValidity.extraInfo.source ||
//         nextRoutingInpuValidity.extraInfo.subject !== prevRoutingInpuValidity.extraInfo.subject);

//   let newDeselectedCategories: number[];
//   if (hasProductClassChanged === true || hasGraphSubTypeChanged === true) {
//     newDeselectedCategories = [];
//   }  else {
//     newDeselectedCategories = prevDeselectedCategories;
//   }

//   let newProductDetailLevel: ProductMetadatumLevel;
//   if ((nextInputFromRouting.productClass === ProductClass.SITC &&
//         prevUIState.productLevel === ProductMetadatumLevel.sixDigit)) {
//     newProductDetailLevel = ProductMetadatumLevel.fourDigit;
//   } else {
//     newProductDetailLevel = prevUIState.productLevel;
//   }
//   return {
//     deselectedCategories: newDeselectedCategories,
//     productLevel: newProductDetailLevel,
//   };
// };

// const initialUIState: IUIState = {
//   svgWidth: undefined,
//   svgHeight: undefined,
//   svgLeft: undefined,
//   svgTop: undefined,
//   deselectedCategories: [],
//   populationAdjustment: PopulationAdjustment.NotAdjusted,
//   inflationAdjustment: InflationAdjustment.NotAdjusted,
//   layout: Layout.Value,
//   productLevel: ProductMetadatumLevel.section,
//   countryLevel: CountryMetadatumLevel.region,
//   ordering: Ordering.Community,
// };

// const getReducer = <RootState>(
//     getCacheFromRootState: (rootState: RootState) => IState,
//   ) => {

//   return getGraphDataCache<
//     RootState,
//     MergedData,
//     IUIState,
//     IInputFromURLRouting,
//     IHash,
//     typeof START_SUBSCRIBING,
//     typeof STOP_SUBSCRIBING,
//     typeof UPDATE_MERGED_DATA,
//     typeof UPDATE_UI_STATE,
//     typeof UPDATE_INPUT_FROM_URL_ROUTING,
//     typeof RESET,

//     IDiscriminant,
//     IValidInputFromURLRoutingCheckInput
//   >({
//     hashFunction,
//     getCacheFromRootState,
//     initialInputFromURLRouting,
//     checkForInvalidRoutingInput,
//     getInitialUIState: () => initialUIState,
//     updateUIStateBasedOnURLRoutingUpdate,
//     startSubscribingActionName: START_SUBSCRIBING,
//     stopSubscribingActionName: STOP_SUBSCRIBING,
//     updateMergedDataActionName: UPDATE_MERGED_DATA,
//     updateInputFromURLRoutingName: UPDATE_INPUT_FROM_URL_ROUTING,
//     updateUIStateName: UPDATE_UI_STATE,
//     resetActionName: RESET,
//     getHashInputFromRoutingAndUIState,
//     doesMergedDataIndicateSuccess,

//     computedDataForValidButUncomputedHashKey,
//     getRoutingCheckInputFromHash:
//       ({country, partner, target, product}) => ({country, partner, target, product}),
//   });
// };

// export default getReducer;
