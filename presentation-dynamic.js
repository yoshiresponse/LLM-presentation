class PresentationManager {
    constructor() {
        this.slides = [];
        this.currentSlide = 0;
        this.slideContainer = document.getElementById('presentation-container');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.slideCounter = document.getElementById('slide-counter');
        
        this.init();
    }

    async init() {
        try {
            // Load slide configuration
            const response = await fetch('slides.json');
            const config = await response.json();
            
            // Load all slides
            await this.loadSlides(config.slides);
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Show first slide
            this.showSlide(0);
        } catch (error) {
            console.error('Failed to initialize presentation:', error);
            // Fallback to existing slides if dynamic loading fails
            this.slides = Array.from(document.querySelectorAll('.slide'));
            this.setupEventListeners();
            this.showSlide(0);
        }
    }

    async loadSlides(slideConfigs) {
        this.slideContainer.innerHTML = '';
        
        for (let i = 0; i < slideConfigs.length; i++) {
            const config = slideConfigs[i];
            try {
                const response = await fetch(config.file);
                const html = await response.text();
                
                // Create a temporary div to parse the HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                // Get the slide element
                const slideElement = tempDiv.querySelector('.slide');
                if (slideElement) {
                    slideElement.setAttribute('data-slide-id', config.id);
                    slideElement.setAttribute('data-slide-title', config.title);
                    
                    // Make first slide active
                    if (i === 0) {
                        slideElement.classList.add('active');
                    }
                    
                    this.slideContainer.appendChild(slideElement);
                    this.slides.push(slideElement);
                }
            } catch (error) {
                console.error(`Failed to load slide ${config.file}:`, error);
            }
        }
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.goToSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.goToSlide(this.slides.length - 1);
            }
        });
    }

    showSlide(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        this.currentSlide = index;
        this.updateNavigation();
    }

    updateNavigation() {
        const slideTitle = this.slides[this.currentSlide]?.getAttribute('data-slide-title') || '';
        this.slideCounter.textContent = `${this.currentSlide + 1} / ${this.slides.length}${slideTitle ? ` - ${slideTitle}` : ''}`;
        
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.slides.length - 1;
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.showSlide(this.currentSlide - 1);
        }
    }

    nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.showSlide(this.currentSlide + 1);
        }
    }

    goToSlide(index) {
        this.showSlide(index);
    }

    // Public API for external control
    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.slides.length;
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.presentation = new PresentationManager();
});
