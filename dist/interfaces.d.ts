export interface ISingleAlertSettings {
    condition: {
        primaryLeft?: string;
        primaryRight?: string;
        secondary?: string;
        tertiaryLeft?: string | number;
        tertiaryRight?: string | number;
        quaternaryLeft?: string | number;
        quaternaryRight?: string | number;
    };
    option?: string;
    actions?: {
        notifyOnApp?: boolean;
        showPopup?: boolean;
        sendEmail?: boolean;
        webhook?: {
            enabled: boolean;
            url: string;
        };
    };
    name?: string;
    message?: string;
}
export declare type ClassificationType = 'spot' | 'leveraged-token' | 'futures-perpetual' | 'futures-dated';
export interface IBaseSymbol {
    source: string;
    id: string;
    prefix: string;
    ticker: string;
    quoteAsset: string;
    baseAsset: string;
    classification: ClassificationType;
}
