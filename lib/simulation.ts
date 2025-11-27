
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
    },
    "default": {
        framework: "PAS",
        core_desire: "Growth",
        main_objection: "Risk of failure",
        strategic_angle: "The Low-Risk Growth Lever",
        copy: "Subject: The one thing holding you back.\n\n[Name],\n\nI've been looking at your current approach, and I see a massive opportunity being missed.\n\nYou're doing 90% of things right. But that last 10% is costing you.\n\nWe've identified a 'Silent Leak' in your strategy that is draining your potential results.\n\nThe good news? It's fixable in under 48 hours.\n\nI recorded a quick video showing exactly where this leak is and how to plug it.\n\n[Link: Watch the Breakdown]\n\nDon't let this leak drain another dollar.\n\n- [Your Name]",
        explanation: {
            psychology: "Curiosity Gap. The concept of a 'Silent Leak' creates an open loop that the reader MUST close by clicking. It implies immediate loss if they don't act.",
            structure: "PAS Framework:\n1. Problem: Missing a massive opportunity.\n2. Agitation: The 'Silent Leak' costing you results.\n3. Solution: The video breakdown.",
            word_choice: "'Silent Leak' (creates anxiety/curiosity), 'Draining' (visceral loss), 'Plug it' (simple solution)."
        }
    }
}

export function getSimulation(audience: string, goal: string) {
    const text = (audience + " " + goal).toLowerCase()
    if (text.includes("saas") || text.includes("software") || text.includes("tech")) return SIMULATION_DATA.saas
    if (text.includes("agency") || text.includes("service") || text.includes("coach")) return SIMULATION_DATA.agency
    return SIMULATION_DATA.default
}
