export interface rap {
    [key: string]: any;
}
declare const rap: (obj: rap) => Promise<rap>;
export default rap;
