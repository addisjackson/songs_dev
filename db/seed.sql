\c songs_dev


-- Create the "songs" table if it doesn't exist
CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY,
    artist TEXT,
    name TEXT,
    album TEXT,
    title TEXT,
    is_favorite BOOLEAN
);


INSERT INTO songs (artist, name, album, title, is_favorite)
VALUES
    ('The Beatles', 'Let It Be', 'Let It Be', 'Let It Be', true),
    ('Queen', 'Bohemian Rhapsody', 'A Night at the Opera', 'Bohemian Rhapsody', true),
    ('Michael Jackson', 'Billie Jean', 'Thriller', 'Billie Jean', true),
    ('Bob Dylan', 'Like a Rolling Stone', 'Highway 61 Revisited', 'Like a Rolling Stone', false),
    ('Elton John', 'Rocket Man', 'Honky Château', 'Rocket Man', false),
    ('Led Zeppelin', 'Stairway to Heaven', 'IV', 'Stairway to Heaven', true),
    ('Pink Floyd', 'Comfortably Numb', 'The Wall', 'Comfortably Numb', true),
    ('U2', 'With or Without You', 'The Joshua Tree', 'With or Without You', true),
    ('Nirvana', 'Smells Like Teen Spirit', 'Nevermind', 'Smells Like Teen Spirit', false),
    ('The Rolling Stones', 'Paint It Black', 'Aftermath', 'Paint It Black', true),
    ('The Who', 'Baba O''Riley', 'Who''s Next', 'Baba O''Riley', false),
    ('John Lennon', 'Imagine', 'Imagine', 'Imagine', true),
    ('David Bowie', 'Space Oddity', 'David Bowie', 'Space Oddity', false),
    ('The Eagles', 'Hotel California', 'Hotel California', 'Hotel California', true),
    ('Adele', 'Someone Like You', '21', 'Someone Like You', true),
    ('Fleetwood Mac', 'Go Your Own Way', 'Rumours', 'Go Your Own Way', false),
    ('Prince', 'Purple Rain', 'Purple Rain', 'Purple Rain', true),
    ('The Police', 'Every Breath You Take', 'Synchronicity', 'Every Breath You Take', false),
    ('The Doors', 'Light My Fire', 'The Doors', 'Light My Fire', true),
    ('Johnny Cash', 'Ring of Fire', 'Ring of Fire: The Best of Johnny Cash', 'Ring of Fire', false),
    ('Radiohead', 'Creep', 'Pablo Honey', 'Creep', true),
    ('Whitney Houston', 'I Will Always Love You', 'The Bodyguard: Original Soundtrack Album', 'I Will Always Love You', true),
    ('Elvis Presley', 'Can''t Help Falling in Love', 'Blue Hawaii', 'Can''t Help Falling in Love', false),
    ('Journey', 'Don''t Stop Believin''', 'Escape', 'Don''t Stop Believin''', true),
    ('Madonna', 'Like a Virgin', 'Like a Virgin', 'Like a Virgin', false),
    ('The Beach Boys', 'Good Vibrations', 'Smiley Smile', 'Good Vibrations', true),
    ('Guns N'' Roses', 'Sweet Child o'' Mine', 'Appetite for Destruction', 'Sweet Child o'' Mine', true),
    ('Aerosmith', 'Dream On', 'Aerosmith', 'Dream On', false),
    ('Coldplay', 'Fix You', 'X&Y', 'Fix You', true),
    ('Bee Gees', 'Stayin Alive', 'Saturday Night Fever: The Original Movie Sound Track', 'Stayin Alive', false);

-- Seed album data with real album titles and release dates
INSERT INTO albums (title, release_date) VALUES
  ('Abbey Road', '1969-09-26'),
  ('Thriller', '1982-11-30'),
  ('Dark Side of the Moon', '1973-03-01'),
  ('Rumours', '1977-02-04'),
  ('The Wall', '1979-11-30'),
  ('Back in Black', '1980-07-25'),
  ('Led Zeppelin IV', '1971-11-08'),
  ('Hotel California', '1976-12-08'),
  ('A Night at the Opera', '1975-11-21'),
  ('Sgt. Pepper''s Lonely Hearts Club Band', '1967-05-26'),
  ('The Joshua Tree', '1987-03-09'),
  ('Legend', '1984-05-08'),
  ('Let It Be', '1970-05-08'),
  ('Nevermind', '1991-09-24'),
  ('The Queen Is Dead', '1986-06-16'),
  ('OK Computer', '1997-05-21'),
  ('Born to Run', '1975-08-25'),
  ('The White Album', '1968-11-22'),
  ('A Hard Day''s Night', '1964-07-10'),
  ('The Doors', '1967-01-04'),
  ('Pet Sounds', '1966-05-16'),
  ('Breakfast in America', '1979-03-29'),
  ('Led Zeppelin II', '1969-10-22'),
  ('Abbey Road', '1969-09-26'),
  ('Who''s Next', '1971-08-14'),
  ('Innervisions', '1973-08-03'),
  ('The Stranger', '1977-09-29'),
  ('Songs in the Key of Life', '1976-09-28'),
  ('Off the Wall', '1979-08-10'),
  ('Bad', '1987-08-31'),
  ('The Queen Is Dead', '1986-06-16');
