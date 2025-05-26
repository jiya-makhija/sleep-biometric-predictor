// Interactive info section data
const infoSections = [
    {
        title: "How This Works & Why It Matters",
        type: "overview",
        content: {
            features: [
                {
                    title: "What You'll Get",
                    description: "Match with real participants from the MMASH sleep study based on your sleep patterns and demographics."
                },
                {
                    title: "Real Science",
                    description: "Based on actual data from 21 participants aged 20-40 who underwent comprehensive sleep monitoring."
                },
                {
                    title: "Sleep Insights",
                    description: "Understand your sleep latency, fragmentation, and quality compared to research participants."
                },
                {
                    title: "Personalized Results",
                    description: "Get matched based on age, sleep duration, stress levels, and chronotype preferences."
                }
            ]
        }
    },
    {
        title: "The Science Behind Sleep Research",
        type: "science",
        content: {
            intro: "The MMASH study measured real sleep parameters that most people never get to see:",
            biomarkers: [
                {
                    title: "Sleep Latency",
                    description: "How long it takes to fall asleep. Research shows latency >30 minutes indicates potential sleep disorders or poor sleep hygiene."
                },
                {
                    title: "Sleep Fragmentation",
                    description: "Number of awakenings per night. Frequent awakenings reduce deep sleep phases critical for recovery and memory consolidation."
                },
                {
                    title: "Sleep Efficiency",
                    description: "Percentage of time actually sleeping while in bed. Healthy adults typically achieve 85%+ efficiency."
                }
            ]
        }
    },
    {
        title: "The MMASH Study",
        type: "study",
        content: {
            intro: "This tool uses data from a comprehensive sleep study that collected:",
            features: [
                {
                    title: "Sleep Monitoring",
                    description: "24-hour actigraphy data measuring sleep duration, efficiency, and fragmentation patterns"
                },
                {
                    title: "Stress Assessment",
                    description: "Daily Stress Inventory (DSI) scores measuring perceived stress and life events"
                },
                {
                    title: "Sleep Quality",
                    description: "Pittsburgh Sleep Quality Index (PSQI) - the clinical standard for sleep assessment"
                },
                {
                    title: "Chronotype Analysis",
                    description: "Morningness-Eveningness Questionnaire (MEQ) determining natural sleep timing preferences"
                }
            ],
            conclusion: "Result: You get matched with participants who have similar sleep patterns and validated scientific measurements."
        }
    },
    {
        title: "Why This Matters",
        type: "benefits",
        content: {
            benefits: [
                {
                    title: "Scientific Accuracy",
                    description: "Unlike generic sleep apps, this uses real research data from controlled studies with validated instruments."
                },
                {
                    title: "Pattern Recognition",
                    description: "Understand how your sleep patterns compare to others and identify areas for improvement based on research."
                },
                {
                    title: "Evidence-Based Insights",
                    description: "Get recommendations grounded in sleep science rather than generic advice that may not apply to you."
                }
            ]
        }
    }
];

// Real MMASH participant data (21 participants)
const participants = [
    {id: "user_1", age: 29, gender: "M", sleepHours: 3.3, stressScore: 23, sleepLatency: 0, nightAwakenings: 9, meqScore: 47, psqi: 5, efficiency: 92.0},
    {id: "user_2", age: 27, gender: "M", sleepHours: 4.1, stressScore: 26, sleepLatency: 4, nightAwakenings: 18, meqScore: 52, psqi: 7, efficiency: 73.5},
    {id: "user_3", age: 34, gender: "M", sleepHours: 5.8, stressScore: 11, sleepLatency: 3, nightAwakenings: 16, meqScore: 59, psqi: 8, efficiency: 79.2},
    {id: "user_4", age: 27, gender: "M", sleepHours: 5.3, stressScore: 10, sleepLatency: 4, nightAwakenings: 28, meqScore: 60, psqi: 4, efficiency: 85.5},
    {id: "user_5", age: 25, gender: "M", sleepHours: 5.8, stressScore: 41, sleepLatency: 0, nightAwakenings: 21, meqScore: 52, psqi: 8, efficiency: 85.7},
    {id: "user_6", age: 26, gender: "M", sleepHours: 7.1, stressScore: 74, sleepLatency: 4, nightAwakenings: 20, meqScore: 38, psqi: 9, efficiency: 88.8},
    {id: "user_7", age: 23, gender: "M", sleepHours: 4.5, stressScore: 28, sleepLatency: 2, nightAwakenings: 17, meqScore: 44, psqi: 6, efficiency: 81.8},
    {id: "user_8", age: 26, gender: "M", sleepHours: 4.5, stressScore: 23, sleepLatency: 1, nightAwakenings: 11, meqScore: 50, psqi: 4, efficiency: 81.8},
    {id: "user_9", age: 23, gender: "M", sleepHours: 6.8, stressScore: 42, sleepLatency: 2, nightAwakenings: 19, meqScore: 64, psqi: 4, efficiency: 91.9},
    {id: "user_10", age: 24, gender: "M", sleepHours: 4.7, stressScore: 35, sleepLatency: 2, nightAwakenings: 16, meqScore: 48, psqi: 6, efficiency: 85.5},
    {id: "user_12", age: 25, gender: "M", sleepHours: 4.4, stressScore: 35, sleepLatency: 1, nightAwakenings: 24, meqScore: 46, psqi: 6, efficiency: 78.6},
    {id: "user_13", age: 30, gender: "M", sleepHours: 6.4, stressScore: 37, sleepLatency: 2, nightAwakenings: 12, meqScore: 60, psqi: 3, efficiency: 91.4},
    {id: "user_14", age: 26, gender: "M", sleepHours: 7.4, stressScore: 49, sleepLatency: 2, nightAwakenings: 4, meqScore: 44, psqi: 2, efficiency: 92.5},
    {id: "user_15", age: 24, gender: "M", sleepHours: 6.2, stressScore: 56, sleepLatency: 3, nightAwakenings: 13, meqScore: 42, psqi: 5, efficiency: 88.6},
    {id: "user_16", age: 26, gender: "M", sleepHours: 9.6, stressScore: 32, sleepLatency: 1, nightAwakenings: 44, meqScore: 46, psqi: 6, efficiency: 85.7},
    {id: "user_17", age: 40, gender: "M", sleepHours: 5.3, stressScore: 29, sleepLatency: 2, nightAwakenings: 21, meqScore: 53, psqi: 3, efficiency: 88.3},
    {id: "user_18", age: 27, gender: "M", sleepHours: 5.5, stressScore: 21, sleepLatency: 1, nightAwakenings: 19, meqScore: 52, psqi: 4, efficiency: 91.7},
    {id: "user_19", age: 25, gender: "M", sleepHours: 4.7, stressScore: 34, sleepLatency: 1, nightAwakenings: 18, meqScore: 58, psqi: 7, efficiency: 78.3},
    {id: "user_20", age: 26, gender: "M", sleepHours: 6.0, stressScore: 31, sleepLatency: 0, nightAwakenings: 18, meqScore: 53, psqi: 4, efficiency: 92.3},
    {id: "user_21", age: 26, gender: "M", sleepHours: 5.7, stressScore: 43, sleepLatency: 1, nightAwakenings: 22, meqScore: 49, psqi: 6, efficiency: 87.7},
    {id: "user_22", age: 26, gender: "M", sleepHours: 4.9, stressScore: 21, sleepLatency: 2, nightAwakenings: 12, meqScore: 49, psqi: 6, efficiency: 81.7}
];

// Interactive info controller
class InfoController {
    constructor() {
        this.currentSection = 0;
        this.autoAdvanceEnabled = true;
        this.autoAdvanceTimer = null;
        this.init();
    }

    init() {
        this.renderCurrentSection();
        this.setupEventListeners();
        this.startAutoAdvance();
    }

    setupEventListeners() {
        document.getElementById('prevBtn').addEventListener('click', () => this.goToPrevious());
        document.getElementById('nextBtn').addEventListener('click', () => this.goToNext());
        document.getElementById('skipBtn').addEventListener('click', () => this.skipToQuiz());
        
        const autoAdvanceCheckbox = document.getElementById('autoAdvance');
        autoAdvanceCheckbox.addEventListener('change', (e) => {
            this.autoAdvanceEnabled = e.target.checked;
            if (this.autoAdvanceEnabled) {
                this.startAutoAdvance();
            } else {
                this.stopAutoAdvance();
            }
        });
    }

    renderCurrentSection() {
        const section = infoSections[this.currentSection];
        const content = document.getElementById('infoContent');
        
        content.innerHTML = '';
        
        const title = document.createElement('h2');
        title.className = 'info-title';
        title.textContent = section.title;
        content.appendChild(title);

        switch (section.type) {
            case 'overview':
                this.renderOverview(content, section.content);
                break;
            case 'science':
                this.renderScience(content, section.content);
                break;
            case 'study':
                this.renderStudy(content, section.content);
                break;
            case 'benefits':
                this.renderBenefits(content, section.content);
                break;
        }

        this.updateProgressDots();
        this.updateNavigationButtons();
        this.animateContent();
    }

    renderOverview(container, content) {
        const grid = document.createElement('div');
        grid.className = 'feature-grid';
        
        content.features.forEach((feature) => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            `;
            grid.appendChild(card);
        });
        
        container.appendChild(grid);
    }

    renderScience(container, content) {
        const intro = document.createElement('p');
        intro.style.marginBottom = '20px';
        intro.innerHTML = `<strong>${content.intro}</strong>`;
        container.appendChild(intro);

        const section = document.createElement('div');
        section.className = 'science-section';
        
        content.biomarkers.forEach((biomarker) => {
            const item = document.createElement('div');
            item.className = 'biomarker-item';
            item.innerHTML = `
                <h5>${biomarker.title}</h5>
                <p>${biomarker.description}</p>
            `;
            section.appendChild(item);
        });
        
        container.appendChild(section);
    }

    renderStudy(container, content) {
        const intro = document.createElement('p');
        intro.style.marginBottom = '20px';
        intro.innerHTML = `<strong>${content.intro}</strong>`;
        container.appendChild(intro);

        const grid = document.createElement('div');
        grid.className = 'feature-grid';
        
        content.features.forEach((feature) => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            `;
            grid.appendChild(card);
        });
        
        container.appendChild(grid);

        const conclusion = document.createElement('p');
        conclusion.style.marginTop = '20px';
        conclusion.style.fontWeight = '500';
        conclusion.innerHTML = `<strong>${content.conclusion}</strong>`;
        container.appendChild(conclusion);
    }

    renderBenefits(container, content) {
        const section = document.createElement('div');
        section.className = 'science-section';
        
        content.benefits.forEach((benefit) => {
            const item = document.createElement('div');
            item.className = 'biomarker-item';
            item.style.background = '#fef3c7';
            item.style.borderColor = '#fbbf24';
            item.innerHTML = `
                <h5 style="color: #92400e;">${benefit.title}</h5>
                <p style="color: #78350f;">${benefit.description}</p>
            `;
            section.appendChild(item);
        });
        
        container.appendChild(section);
    }

    animateContent() {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 150);
        });

        const items = document.querySelectorAll('.biomarker-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200);
        });
    }

    updateProgressDots() {
        const dots = document.querySelectorAll('.progress-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSection);
        });
    }

    updateNavigationButtons() {
        document.getElementById('prevBtn').disabled = this.currentSection === 0;
        document.getElementById('nextBtn').textContent = 
            this.currentSection === infoSections.length - 1 ? 'Start Quiz' : 'Next';
    }

    goToPrevious() {
        if (this.currentSection > 0) {
            this.currentSection--;
            this.renderCurrentSection();
            this.restartAutoAdvance();
        }
    }

    goToNext() {
        if (this.currentSection < infoSections.length - 1) {
            this.currentSection++;
            this.renderCurrentSection();
            this.restartAutoAdvance();
        } else {
            this.skipToQuiz();
        }
    }

    skipToQuiz() {
        this.stopAutoAdvance();
        document.getElementById('interactiveInfo').style.display = 'none';
        document.getElementById('quizSection').classList.add('show');
        initializePredictions();
    }

    startAutoAdvance() {
        if (!this.autoAdvanceEnabled) return;
        
        this.autoAdvanceTimer = setTimeout(() => {
            if (this.currentSection < infoSections.length - 1) {
                this.goToNext();
            }
        }, 5000);
    }

    stopAutoAdvance() {
        if (this.autoAdvanceTimer) {
            clearTimeout(this.autoAdvanceTimer);
            this.autoAdvanceTimer = null;
        }
    }

    restartAutoAdvance() {
        this.stopAutoAdvance();
        this.startAutoAdvance();
    }
}

function initializePredictions() {
    // Update slider displays
    document.getElementById('age').addEventListener('input', function() {
        document.getElementById('ageValue').textContent = this.value + ' years';
    });

    document.getElementById('sleepHours').addEventListener('input', function() {
        document.getElementById('sleepHoursValue').textContent = this.value + ' hours';
    });

    document.getElementById('sleepLatency').addEventListener('input', function() {
        document.getElementById('sleepLatencyValue').textContent = this.value + ' minutes';
    });

    document.getElementById('nightAwakenings').addEventListener('input', function() {
        document.getElementById('nightAwakeningsValue').textContent = this.value + ' times';
    });

    // Form submission
    document.getElementById('sleepQuiz').addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.getElementById('results').classList.add('show');
        document.getElementById('loading').style.display = 'block';
        document.getElementById('matchResults').style.display = 'none';
        
        setTimeout(() => {
            const userProfile = {
                age: parseInt(document.getElementById('age').value),
                sleepHours: parseFloat(document.getElementById('sleepHours').value),
                stressLevel: parseInt(document.querySelector('input[name="stress"]:checked').value),
                sleepLatency: parseInt(document.getElementById('sleepLatency').value),
                nightAwakenings: parseInt(document.getElementById('nightAwakenings').value),
                chronotype: parseInt(document.querySelector('input[name="chronotype"]:checked').value)
            };

            const match = findBestMatch(userProfile);
            displayResults(userProfile, match);
        }, 2000);
    });
}

function findBestMatch(userProfile) {
    let bestMatch = null;
    let smallestDistance = Infinity;

    // Convert user answers to MMASH ranges
    const stressRanges = [[15, 25], [25, 35], [35, 50], [50, 65], [65, 74]];
    const userStress = (stressRanges[userProfile.stressLevel - 1][0] + stressRanges[userProfile.stressLevel - 1][1]) / 2;

    const meqRanges = [[38, 45], [45, 52], [52, 58], [58, 64], [64, 70]];
    const userMeq = (meqRanges[userProfile.chronotype - 1][0] + meqRanges[userProfile.chronotype - 1][1]) / 2;

    participants.forEach(participant => {
        // Calculate simple distance
        const ageDiff = Math.abs(participant.age - userProfile.age) / 20;
        const sleepDiff = Math.abs(participant.sleepHours - userProfile.sleepHours) / 7;
        const stressDiff = Math.abs(participant.stressScore - userStress) / 64;
        const latencyDiff = Math.abs(participant.sleepLatency - userProfile.sleepLatency) / 30;
       const awakeningsDiff = Math.abs(participant.nightAwakenings - userProfile.nightAwakenings) / 40;
       const meqDiff = Math.abs(participant.meqScore - userMeq) / 26;

       // Weighted distance
       const distance = Math.sqrt(
           Math.pow(ageDiff * 0.15, 2) +
           Math.pow(sleepDiff * 0.25, 2) +
           Math.pow(stressDiff * 0.25, 2) +
           Math.pow(latencyDiff * 0.20, 2) +
           Math.pow(awakeningsDiff * 0.10, 2) +
           Math.pow(meqDiff * 0.05, 2)
       );

       if (distance < smallestDistance) {
           smallestDistance = distance;
           bestMatch = participant;
       }
   });

   const similarity = Math.max(0, 100 - (smallestDistance * 100));
   return { participant: bestMatch, similarity };
}

function displayResults(userProfile, match) {
   const participant = match.participant;
   const similarity = match.similarity.toFixed(1);

   const resultsHTML = `
       <div class="match-header">
           <div class="match-title">Your MMASH Sleep Match</div>
           <div class="participant-id">Participant ${participant.id}</div>
           <div class="accuracy">${similarity}% similarity to your sleep patterns</div>
       </div>

       <div class="comparison">
           <div class="comparison-card predicted">
               <h4>Your Sleep Profile</h4>
               <p><strong>Age:</strong> ${userProfile.age} years</p>
               <p><strong>Sleep Duration:</strong> ${userProfile.sleepHours} hours</p>
               <p><strong>Stress Level:</strong> ${['Very Low', 'Low', 'Moderate', 'High', 'Very High'][userProfile.stressLevel - 1]}</p>
               <p><strong>Sleep Latency:</strong> ${userProfile.sleepLatency} minutes</p>
               <p><strong>Night Awakenings:</strong> ${userProfile.nightAwakenings} times</p>
               <p><strong>Chronotype:</strong> ${['Definitely Evening', 'Moderately Evening', 'Neither', 'Moderately Morning', 'Definitely Morning'][userProfile.chronotype - 1]}</p>
           </div>

           <div class="comparison-card actual">
               <h4>Matched Participant Data</h4>
               <p><strong>Age:</strong> ${participant.age} years</p>
               <p><strong>Sleep Duration:</strong> ${participant.sleepHours.toFixed(1)} hours</p>
               <p><strong>Stress Score:</strong> ${participant.stressScore} (DSI)</p>
               <p><strong>Sleep Latency:</strong> ${participant.sleepLatency} minutes</p>
               <p><strong>Night Awakenings:</strong> ${participant.nightAwakenings} times</p>
               <p><strong>Sleep Quality (PSQI):</strong> ${participant.psqi}</p>
               <p><strong>Sleep Efficiency:</strong> ${participant.efficiency.toFixed(1)}%</p>
           </div>
       </div>

       <div class="insights">
           <h4>Sleep Science Insights</h4>
           ${generateInsights(userProfile, participant)}
       </div>
   `;

   document.getElementById('loading').style.display = 'none';
   document.getElementById('matchResults').innerHTML = resultsHTML;
   document.getElementById('matchResults').style.display = 'block';
}

function generateInsights(user, participant) {
   const insights = [];

   // Sleep duration insights
   if (participant.sleepHours < 6) {
       insights.push(`<div class="insight"><strong>Short Sleep Duration:</strong> Your matched participant averaged ${participant.sleepHours.toFixed(1)} hours - well below the recommended 7-9 hours. This often correlates with higher stress and poorer sleep quality.</div>`);
   } else if (participant.sleepHours > 8) {
       insights.push(`<div class="insight"><strong>Long Sleep Duration:</strong> Your match got ${participant.sleepHours.toFixed(1)} hours of sleep, which may indicate good sleep hygiene or compensation for poor sleep quality.</div>`);
   }

   // Sleep quality insights
   if (participant.psqi > 5) {
       insights.push(`<div class="insight"><strong>Sleep Quality:</strong> Your matched participant had a PSQI score of ${participant.psqi}, indicating room for improvement in sleep quality (scores >5 suggest poor sleep).</div>`);
   } else {
       insights.push(`<div class="insight"><strong>Good Sleep Quality:</strong> Your match had a PSQI score of ${participant.psqi}, indicating relatively good sleep quality.</div>`);
   }

   // Stress insights
   if (participant.stressScore > 40) {
       insights.push(`<div class="insight"><strong>High Stress Impact:</strong> Your matched participant had a Daily Stress Inventory score of ${participant.stressScore}, which often correlates with sleep fragmentation and reduced sleep efficiency.</div>`);
   }

   // Sleep fragmentation
   if (participant.nightAwakenings > 20) {
       insights.push(`<div class="insight"><strong>Sleep Fragmentation:</strong> Your match experienced ${participant.nightAwakenings} awakenings per night, indicating fragmented sleep that reduces restorative sleep phases.</div>`);
   }

   // Recommendations based on patterns
   if (user.sleepLatency > 15) {
       insights.push(`<div class="insight"><strong>Recommendation:</strong> Your reported sleep onset time of ${user.sleepLatency} minutes suggests possible sleep hygiene improvements could help you fall asleep faster.</div>`);
   }

   if (insights.length === 0) {
       insights.push(`<div class="insight"><strong>Balanced Profile:</strong> Your sleep patterns match someone with relatively balanced sleep metrics. Focus on maintaining consistent sleep schedules.</div>`);
   }

   return insights.join('');
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
   // Initialize interactive info controller
   new InfoController();
});