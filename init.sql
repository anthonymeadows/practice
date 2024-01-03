-- Drop tables if they exist
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS chefs;

-- Create tables
CREATE TABLE IF NOT EXISTS chefs (
    id serial PRIMARY KEY,
    username varchar(255)
);

CREATE TABLE IF NOT EXISTS foods (
    id serial PRIMARY KEY,
    name varchar(255),
    ingredients text,
    instructions text,
    user_id integer REFERENCES chefs(id)
);

-- Insert data
INSERT INTO chefs (username) VALUES
    ('chefAlice'),
    ('chefBob'),
    ('chefCharlie');

INSERT INTO foods (name, ingredients, instructions, user_id) VALUES
    ('Spaghetti Bolognese', 'Ground beef, onion, garlic, tomatoes, spaghetti, olive oil, salt, pepper', '1. Heat olive oil in a pan. 2. Add chopped onion and garlic. 3. Add ground beef and cook until browned. 4. Stir in chopped tomatoes. 5. Cook spaghetti. 6. Serve Bolognese sauce over spaghetti.', 1),
    ('Chicken Alfredo', 'Chicken breast, fettuccine pasta, heavy cream, Parmesan cheese, butter, garlic, salt, pepper', '1. Cook fettuccine pasta. 2. Season chicken and cook in butter. 3. Add minced garlic and heavy cream. 4. Stir in Parmesan cheese. 5. Mix with cooked pasta.', 2),
    ('Vegetable Stir-Fry', 'Broccoli, carrots, bell peppers, soy sauce, ginger, garlic, vegetable oil', '1. Heat oil in a wok. 2. Add minced garlic and ginger. 3. Stir in chopped vegetables. 4. Add soy sauce. 5. Cook until vegetables are tender-crisp.', 3),
    ('Margherita Pizza', 'Pizza dough, tomatoes, fresh mozzarella, basil, olive oil, salt', '1. Preheat oven. 2. Roll out pizza dough. 3. Top with sliced tomatoes and mozzarella. 4. Bake until crust is golden and cheese is melted. 5. Garnish with fresh basil.', 1),
    ('Grilled Salmon', 'Salmon fillets, lemon, olive oil, garlic, dill, salt, pepper', '1. Preheat grill. 2. Season salmon with olive oil, garlic, dill, salt, and pepper. 3. Grill for 5-7 minutes per side. 4. Squeeze lemon over the top before serving.', 2),
    ('Caprese Salad', 'Tomatoes, fresh mozzarella, basil, balsamic glaze, olive oil, salt', '1. Slice tomatoes and mozzarella. 2. Arrange on a plate. 3. Drizzle with olive oil and balsamic glaze. 4. Sprinkle with salt and fresh basil.', 3),
    ('Chocolate Brownies', 'Butter, sugar, eggs, vanilla extract, flour, cocoa powder, salt, chocolate chips', '1. Preheat oven. 2. Mix melted butter, sugar, and eggs. 3. Add vanilla, flour, cocoa, and salt. 4. Fold in chocolate chips. 5. Bake until a toothpick comes out clean.', 1),
    ('Fruit Smoothie', 'Banana, berries, yogurt, honey, ice cubes', '1. Blend banana, berries, yogurt, and honey. 2. Add ice cubes. 3. Blend until smooth and creamy. 4. Pour into a glass and enjoy.', 2),
    ('Caesar Salad', 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing', '1. Chop lettuce and toss with croutons. 2. Grate Parmesan over the top. 3. Drizzle with Caesar dressing. 4. Toss until well coated.', 3);
