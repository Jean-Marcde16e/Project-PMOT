import React from "react";
import NextLink from "next/link";
import { getLocale } from "next-intl/server";

async function Link({
    href,
    children,
    ...props
}: {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
}) {
    const locale = await getLocale();
    return (
        <NextLink
            {...props}
            href={`/${locale}${href}`}
            as={`/${locale}${href}
    `}
        >
            {children}
        </NextLink>
    );
}

export default Link;
