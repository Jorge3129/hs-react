export type Split<T extends string, A extends string[]> =
    T extends `${infer FirstLetter}${infer Rest}`
        ? Split<Rest, [...A, FirstLetter]>
        : A;

export type Join<T extends string[], S extends string> =
    T extends [infer FirstLetter, ...infer Rest]
        // @ts-ignore
        ? Join<Rest, `${S}${FirstLetter}`>
        : S

export type SplitBySlash<T extends string[], A extends string[][]> =
    T extends [infer FirstLetter, ...infer Rest]
        ?
        //@ts-ignore
        (
            FirstLetter extends "/"
                ?
                //@ts-ignore
                SplitBySlash<Rest, [...A, [""]]>
                :
                // (A extends [...infer RestA, infer Last] ?
                //     //@ts-ignore
                //     SplitBySlash<Rest, [...Last, FirstLetter]>
                //     : A
                //     )
                A
            )
        : A

type MySplit = Split<"/app/chats/:chatId", []>
type MyJoin = Join<MySplit, "">

type MySplitBySlash = SplitBySlash<MySplit, [["a"]]>
