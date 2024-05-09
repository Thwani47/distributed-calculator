using System.ComponentModel.DataAnnotations;

namespace CSharpAdder.Models;

public class AddRequest
{
    [Required]
    public float FirstNumber { get; set; }
    [Required]
    public float SecondNumber { get; set; }
}