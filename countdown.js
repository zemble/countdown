// Airport Board Countdown Timer
// Full implementation with timezone support and flip animations

class CountdownTimer {
    constructor(targetDate, timezone = 'UTC', title = 'Countdown Timer') {
        this.targetDate = new Date(targetDate);
        this.timezone = timezone;
        this.title = title;
        this.digits = {};
        this.previousValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.isIframeMode = window.self !== window.top;
        
        this.init();
    }
    
    init() {
        // Apply iframe mode if detected
        if (this.isIframeMode) {
            document.body.classList.add('iframe-mode');
        }
        
        // Set title
        document.getElementById('countdown-title').textContent = this.title;
        
        // Get all digit elements
        this.digits = {
            daysTens: document.getElementById('days-tens'),
            daysOnes: document.getElementById('days-ones'),
            hoursTens: document.getElementById('hours-tens'),
            hoursOnes: document.getElementById('hours-ones'),
            minutesTens: document.getElementById('minutes-tens'),
            minutesOnes: document.getElementById('minutes-ones'),
            secondsTens: document.getElementById('seconds-tens'),
            secondsOnes: document.getElementById('seconds-ones')
        };
        
        // Start the countdown
        this.updateCountdown();
        this.intervalId = setInterval(() => this.updateCountdown(), 1000);
        
        // Handle page visibility changes for better performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(this.intervalId);
            } else {
                this.updateCountdown();
                this.intervalId = setInterval(() => this.updateCountdown(), 1000);
            }
        });
    }
    
    updateCountdown() {
        const now = new Date();
        const timeRemaining = this.targetDate.getTime() - now.getTime();
        
        if (timeRemaining <= 0) {
            this.displayTime(0, 0, 0, 0);
            clearInterval(this.intervalId);
            this.onCountdownComplete();
            return;
        }
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        this.displayTime(days, hours, minutes, seconds);
    }
    
    displayTime(days, hours, minutes, seconds) {
        const current = { days, hours, minutes, seconds };
        
        // Update each time unit if it has changed
        if (current.days !== this.previousValues.days) {
            this.updateDigitPair('days', current.days);
        }
        if (current.hours !== this.previousValues.hours) {
            this.updateDigitPair('hours', current.hours);
        }
        if (current.minutes !== this.previousValues.minutes) {
            this.updateDigitPair('minutes', current.minutes);
        }
        if (current.seconds !== this.previousValues.seconds) {
            this.updateDigitPair('seconds', current.seconds);
        }
        
        this.previousValues = current;
    }
    
    updateDigitPair(unit, value) {
        const tens = Math.floor(value / 10);
        const ones = value % 10;
        
        this.updateDigit(`${unit}Tens`, tens);
        this.updateDigit(`${unit}Ones`, ones);
    }
    
    updateDigit(digitKey, newValue) {
        const digitElement = this.digits[digitKey];
        if (!digitElement) return;
        
        const digitDisplay = digitElement.querySelector('.digit-display');
        const currentValue = parseInt(digitDisplay.textContent);
        
        if (currentValue === newValue) return;
        
        // Simple update with smooth transition
        digitDisplay.textContent = newValue;
    }
    
    onCountdownComplete() {
        // Add completed styling
        document.querySelector('.countdown-board').classList.add('completed');
        
        // Optional: dispatch custom event for external handling
        window.dispatchEvent(new CustomEvent('countdownComplete', {
            detail: { targetDate: this.targetDate }
        }));
    }
    
    destroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

// URL Parameter parsing
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        date: params.get('date') || params.get('target'),
        time: params.get('time'),
        timezone: params.get('timezone') || params.get('tz') || 'UTC',
        title: params.get('title') || 'Countdown Timer',
        theme: params.get('theme') || 'default'
    };
}

// Parse date from various formats
function parseTargetDate(dateStr, timeStr, timezone) {
    let targetDate;
    
    if (dateStr) {
        // Try to parse the date string
        if (timeStr) {
            targetDate = new Date(`${dateStr} ${timeStr}`);
        } else {
            targetDate = new Date(dateStr);
        }
    } else {
        // Default to New Year if no date provided
        const nextYear = new Date().getFullYear() + 1;
        targetDate = new Date(`${nextYear}-01-01T00:00:00`);
    }
    
    // Validate the date
    if (isNaN(targetDate.getTime())) {
        console.error('Invalid date provided, using default');
        const nextYear = new Date().getFullYear() + 1;
        targetDate = new Date(`${nextYear}-01-01T00:00:00`);
    }
    
    return targetDate;
}

// Apply theme if specified
function applyTheme(theme) {
    if (theme && theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
}

// Initialize the countdown when the page loads
let countdownTimer;

document.addEventListener('DOMContentLoaded', () => {
    const params = getUrlParams();
    const targetDate = parseTargetDate(params.date, params.time, params.timezone);
    
    applyTheme(params.theme);
    
    countdownTimer = new CountdownTimer(targetDate, params.timezone, params.title);
    
    // Log configuration for debugging
    console.log('Countdown Timer initialized:', {
        targetDate: targetDate.toISOString(),
        timezone: params.timezone,
        title: params.title,
        theme: params.theme
    });
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (countdownTimer) {
        countdownTimer.destroy();
    }
});

// Export for use in other files or Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CountdownTimer, getUrlParams, parseTargetDate };
} else if (typeof window !== 'undefined') {
    window.CountdownTimer = CountdownTimer;
}
