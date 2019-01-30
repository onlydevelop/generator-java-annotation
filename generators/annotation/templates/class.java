package <%= packageName %>;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.<%= retentionPolicy %>)
@Target(ElementType.<%= elementType %>)
public @interface <%= className %> {

	// TODO: Write your implementation here
	public boolean enabled() default true;
}
