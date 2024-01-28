
    // Function to fetch a random quote from the Quotable API
    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random?maxLength=100');
            const data = await response.json();
            return `${data.content} - ${data.author}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return 'Motivational Quote'; // Default text in case of an error
        }
    }

    // Update the quote section with a new quote
    async function updateQuote() {
        const quoteSection = document.getElementById('quote-section');
        if (quoteSection) {
            const quote = await fetchQuote();
            quoteSection.textContent = quote;
        }
    }

    // Initial update when the page loads
    document.addEventListener('DOMContentLoaded', updateQuote);

    // Update the quote when the "Motivational Quote" section is clicked
    document.getElementById('quote-section').addEventListener('click', updateQuote);

