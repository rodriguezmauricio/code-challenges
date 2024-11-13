/* Challenge #44: Filter Out Invalid Emails
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of strings and filters out any invalid email addresses.
For simplicity, consider an email valid if it contains exactly one "@" symbol and at least one dot "." 
after the "@" symbol.

Requirements:

Define a function called filterValidEmails.
It should take an array of strings as an argument.
Use the filter method to return a new array containing only valid email addresses. */

// function filterValidEmails(arr: string[]): string[] {
//     return arr.filter((item) => {
//         return (
//             item.includes("@") &&
//             item.includes(".com") &&
//             item.split("@")[1].length > 4 &&
//             item.split("@")[0].length > 0
//         );
//     });
// }

function filterValidEmails(arr: string[]): string[] {
    return arr.filter((item) => {
        const [localPart, domainPart] = item.split("@");

        return (
            item.split("@").length === 2 && // Ensure exactly one "@"
            domainPart?.includes(".") && // Ensure there's a dot in the domain part
            localPart.length > 0 && // Ensure there's text before "@"
            domainPart.length > 0 // Ensure there's text after "@"
        );
    });
}

console.log(
    filterValidEmails(["test@example.com", "invalid-email", "user@domain", "another@domain.com"])
);
console.log(filterValidEmails(["user@domain.com", "user@domaincom", "@domain.com", "user@.com"]));
console.log(filterValidEmails([]));
console.log(filterValidEmails(["plainaddress", "missing@dotcom", "just@a.dot"]));
