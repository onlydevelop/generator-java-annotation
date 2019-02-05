package <%= packageName %>;

import <%= packageName %>.Test;
import <%= packageName %>.TesterInfo;
import <%= packageName %>.TesterInfo.Priority;

/**
	Yong Mook Kim was kind enough to use this example
	from his website https://www.mkyong.com
 */
@TesterInfo(
	priority = Priority.HIGH, 
	createdBy = "GeekTester",  
	tags = {"dev","example" }
)
public class TestExample {

	@Test
	void testA() {
	  if (true)
		throw new RuntimeException("This test always failed");
	}

	@Test(enabled = false)
	void testB() {
	  if (false)
		throw new RuntimeException("This test always passed");
	}

	@Test(enabled = true)
	void testC() {
	  if (10 > 1) {
		// do nothing, this test always passed.
	  }
	}

}

