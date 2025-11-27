
export const SIMULATION_DATA = {
    "saas": {
        framework: "PAS",
        core_desire: "Scale without chaos",
        main_objection: "Implementation takes too long",
        strategic_angle: "The 'Plug & Play' Growth Engine",
        copy: "Subject: Stop building features nobody wants.\n\n[Name],\n\nYou're shipping code, but are you shipping revenue?\n\nMost SaaS founders fall into the 'Feature Trap'. They build, build, build... and pray for traction.\n\nThat's a fast track to burnout.\n\nWe built a system that validates your features BEFORE you write a line of code. It's called the 'Demand-First Protocol'.\n\nFounders using this are seeing 3x faster ARR growth with half the engineering hours.\n\nWant to see the blueprint?\n\n[Link: Access the Protocol]\n\n- [Your Name]",
        explanation: {
            psychology: "Leverages 'Loss Aversion' by highlighting the wasted effort of building unwanted features. It validates the founder's pain (burnout) and offers a 'Mechanism' (Demand-First Protocol) as the solution.",
            structure: "PAS Framework:\n1. Problem: Shipping code but not revenue.\n2. Agitation: The 'Feature Trap' and burnout.\n3. Solution: The 'Demand-First Protocol'.",
            word_choice: "'Feature Trap' (names the enemy), 'Burnout' (visceral pain), 'Blueprint' (implies a structured plan)."
        }
    },
    "agency": {
        framework: "AIDA",
        core_desire: "High-ticket clients",
        main_objection: "Leads are low quality",
        strategic_angle: "Inbound Authority System",
        copy: "Headline: The 'Client-Chasing' Era is Over.\n\nStop sending cold DMs. Start attracting qualified leads who beg to work with you.\n\nIf you're an agency owner, you know the grind. You send 100 emails, get 1 reply, and it's a 'no'.\n\nIt's demoralizing.\n\nBut what if you could flip the script?\n\nOur 'Inbound Authority System' positions you as the prize, not the pest. We help you build an asset ecosystem that warms up leads 24/7.\n\nStop chasing. Start closing.\n\n[Button: Apply for Your Authority Audit]",
        explanation: {
            psychology: "Status Play. It shifts the frame from 'vendor' (chasing) to 'expert' (attracting). This hits the agency owner's desire for respect and ease.",
            structure: "AIDA Framework:\n1. Attention: The 'Client-Chasing' Era is Over.\n2. Interest: The contrast between 'grind' and 'flip the script'.\n3. Desire: The promise of being the 'prize'.\n4. Action: Apply for Audit.",
            word_choice: "'Prize vs Pest' (powerful contrast), 'Flip the script' (paradigm shift), 'Demoralizing' (validates pain)."
        }
    }
}

function generateDynamicTemplate(audience: string, goal: string) {
    // Capitalize first letter for better formatting
    const formattedAudience = audience.charAt(0).toUpperCase() + audience.slice(1);
    const formattedGoal = goal.toLowerCase();

    return {
        framework: "PAS",
        core_desire: `Achieve ${formattedGoal}`,
        main_objection: "It's too complicated or risky",
        strategic_angle: "The 'Hidden Lever' Strategy",
        copy: `Subject: The #1 mistake ${formattedAudience} make when trying to ${formattedGoal}.\n\n[Name],\n\nI've been analyzing why so many ${formattedAudience} struggle to ${formattedGoal}.\n\nIt usually comes down to one "Silent Killer": Complexity.\n\nYou're likely doing 90% of things right, but that last 10% is where the friction lies.\n\nWe've developed a streamlined protocol specifically for ${formattedAudience} who want to ${formattedGoal} without the usual headaches.\n\nIt's not a magic pill. It's a strategic lever.\n\nI recorded a 3-minute breakdown of how it works.\n\n[Link: Watch the Strategy]\n\nBest,\n[Your Name]`,
        explanation: {
            psychology: "Identity & Specificity. By explicitly naming the audience (" + formattedAudience + ") and their goal (" + formattedGoal + "), we trigger the 'Cocktail Party Effect'—they have to pay attention because it's about THEM.",
            structure: "PAS Framework:\n1. Problem: The struggle to " + formattedGoal + ".\n2. Agitation: The 'Silent Killer' of complexity.\n3. Solution: The streamlined protocol.",
            word_choice: "'Silent Killer' (creates urgency), 'Friction' (validates their struggle), 'Strategic Lever' (implies high leverage/low effort)."
        }
    }
}

export function getSimulation(audience: string, goal: string) {
    const text = (audience + " " + goal).toLowerCase()

    // Check for specific niches
    if (text.includes("saas") || text.includes("software") || text.includes("tech")) return SIMULATION_DATA.saas
    if (text.includes("agency") || text.includes("service") || text.includes("coach") || text.includes("consult")) return SIMULATION_DATA.agency

    // Default to dynamic template
    return generateDynamicTemplate(audience || "Business Owners", goal || "grow their revenue")
}
