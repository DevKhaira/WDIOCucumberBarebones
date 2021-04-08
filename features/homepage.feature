Feature: Kung fu London Navigation

  Scenario: As a user, I can log into the secure area

    Given I am on the homepage
    When I click on "Members"
    Then I should see the login page
    And an image in the background should exist