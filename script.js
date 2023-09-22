        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}`;

        async function searchRecipes() {
            const ingredients = document.getElementById('ingredients').value;
            const recipeList = document.getElementById('recipeList');

            try {
                const response = await fetch(`${apiUrl}&ingredients=${ingredients}`);
                const data = await response.json();

                // Clear previous results
                recipeList.innerHTML = '';

                if (data.length === 0) {
                    recipeList.innerHTML = '<p>No recipes found.</p>';
                } else {
                    data.forEach(recipe => {
                        const li = document.createElement('li');
                        li.textContent = recipe.title;
                        recipeList.appendChild(li);
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                recipeList.innerHTML = '<p>An error occurred while fetching data.</p>';
            }
        }