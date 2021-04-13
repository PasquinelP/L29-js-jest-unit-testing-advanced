# Opdracht: Testen - TDD van A tot Z PasswordVerifier


In onderstaande opdracht moet je een functie maken die een password gaat valideren. Maar, als ware TDD wizards die jullie nu zijn gaan we ervan uit dat jullie uiteraard eerst de test(s) schrijven die deze functie gaat valideren, alvorens jullie met de functie aan de slag gaan:

## Setting up:

* Maak een nieuwe map voor deze opdracht
* Installeer Jest in deze map zoals je dat eerder hebt gedaan

## Opdracht: Password verificator

### Functionaliteit

De functie die we uiteindelijk gaan schrijven moet `verifyPassword` heten. We geven deze functie één argument. Dat argument gaat "iets" zijn dat we gaan checken om te kijken of het een goed genoeg wachtwoord is.

We hebben de volgende condities die we gebruiken:

1. password is korter dan 9 karakters
2. password is niet null
3. password heeft 1 of meer uppercase karakters
4. password heeft 1 of meer lowercase karakters
5. password heeft 1 of meer cijfers

Een wachtwoord wordt alléén goedgekeurd als:

1. tenminste 3 van de bovenstaande condities true zijn
2. conditie 4 true is (die moet dus altijd true zijn)

### Werkwijze

* per conditie:
  * elke conditie krijgt zijn eigen functie
  * schrijf een aantal tests die checken of die functie goed werkt
    * tests waarbij we verwachten dat de functie `true` terug geeft
    * tests waarbij we verwachten dat de functie `false` terug geeft
  * schrijf vervolgens de functie zelf
  * zorg dat alle tests *passen*
* schrijf nu tests voor de algemene functie `verifyPassword`: 
  * tests waarbij we verwachten dat de functie `true` terug geeft
  * tests waarbij we verwachten dat de functie `false` terug geeft
  * denk goed na over de *combinatie* van condities die je moet testen
* schrijf vervolgens de functie `verifyPassword` en zorg dat die de condities goed combineert
  * zorg dat alle tests passen

