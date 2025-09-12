export type Project = {
id: string;
title: string;
description: string;
url?: string;
};


export const projects: Project[] = [
{ id: 'portfolio', title: 'Portfolio', description: 'This site.' }
];