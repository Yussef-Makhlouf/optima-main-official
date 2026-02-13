
import React from 'react';

// Process Step for Services
export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

// FAQ Interface
export interface FAQ {
    question: string;
    answer: string;
}

// Gallery Image for Projects
export interface GalleryImage {
    url: string;
    title: string;
    description?: string;
}

// Tech Item and Category for Projects
export interface TechItem {
    name: string;
    description?: string;
    logo?: string;
    icon?: React.ReactNode;
    color?: string;
}

export interface TechCategory {
    category: string;
    description?: string;
    technologies: TechItem[];
}

// Project Timeline Milestone
export interface ProjectMilestone {
    date: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'upcoming';
}

// Fix: Import React to resolve 'Cannot find namespace React' error on line 6
export interface ServiceInfo {
    id: string;
    slug: string;
    title: string;
    tag: string;
    description: string;
    longDescription: string;
    icon: React.ReactNode;
    features: string[];
    technicalSpecs: string[];
    technicalCode: string;
    // New optional fields
    processSteps?: ProcessStep[];
    faqs?: FAQ[];
    relatedProjects?: string[]; // project slugs
}

export interface ProjectInfo {
    id: string;
    slug: string;
    client: string;
    title: string;
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    impact: string;
    tags: string[];
    color: string;
    // New optional fields
    gallery?: GalleryImage[];
    techStack?: TechCategory[];
    timeline?: ProjectMilestone[];
    demoVideo?: string;
}

export interface NavItem {
    label: string;
    path: string;
}
